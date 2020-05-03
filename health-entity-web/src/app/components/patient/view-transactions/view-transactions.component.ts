import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from 'app/services/transaction.service';
import { ResourceService } from 'app/services/resources/resource.services';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Transaction } from 'app/models/transaction';
import { OptionsList } from 'app/models/options-lists';
import { ResourceEnum } from 'app/models/resource-enum';

@Component({
  selector: 'app-view-transactions',
  templateUrl: './view-transactions.component.html',
  styleUrls: ['./view-transactions.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class ViewTransactionsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private transactionService: TransactionService,
    private resourceService: ResourceService,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private changeDetectorRefs: ChangeDetectorRef
  ) {
    this.iconRegistry
      .addSvgIcon('lock',
        this.sanitizer.bypassSecurityTrustResourceUrl(
          '../../../../assets/icons/lock.svg'
        )
      )
      .addSvgIcon('lock_open',
        this.sanitizer.bypassSecurityTrustResourceUrl(
          '../../../../assets/icons/lock_open.svg'
        )
      )
      .addSvgIcon('question',
        this.sanitizer.bypassSecurityTrustResourceUrl(
          '../../../../assets/icons/question.svg'
        )
      );
  }
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  dataSource: MatTableDataSource<Transaction>;
  integrity: Map<Transaction, string>;

  columnsToDisplay = ['date', 'operation', 'type', 'practitioner', 'entity', 'integrity'];
  expandedElement: Transaction | null;
  resource: any;

  resourceOptions = OptionsList.Resources;
  operationOptions = OptionsList.Operations;
  resources = ResourceEnum;

  idType: any;
  id: any;

  ngOnInit(): void {
    this.integrity = new Map();
    this.refresh();
  }

  refresh() {
    this.activatedRoute.params.subscribe((params) => {
      this.idType = params['idType'];
      this.id = params['id'];

      this.transactionService.getTransactions(this.idType, this.id).
      subscribe(
        result => {
          this.dataSource = new MatTableDataSource<Transaction>(result);
          this.dataSource.paginator = this.paginator;
          this.changeDetectorRefs.detectChanges();
        },
        error => {
          console.log(error);
        }
      );
    });
  }

  search(row) {
    if (row === this.expandedElement) {
      this.resourceService.getResource(row.resourcePath)
      .subscribe(
        result => {
          this.resource = result;
        },
        error => {
          console.log(error);
        },
        async () => {
          let jsonString = this.stringifyKeysInOrder(this.resource);
          const hexHash = await this.digestMessage(jsonString);
          if (hexHash === row.resourceIntegrity) {
            this.integrity.set(row, 'lock');
          } else {
            this.integrity.set(row, 'lock_open');
          }
        }
      );
    }
  }

  recursivelyOrderKeys(unordered) {
    // If it's an array - recursively order any
    // dictionary items within the array
    if (Array.isArray(unordered)) {
      unordered.forEach( (item, index) => {
        unordered[index] = this.recursivelyOrderKeys(item);
      });
      return unordered;
    }

    // If it's an object - let's order the keys
    if (typeof unordered === 'object') {
      var ordered = {};
      Object.keys(unordered).sort().forEach( (key) => {
        ordered[key] = this.recursivelyOrderKeys(unordered[key]);
      });
      return ordered;
    }

    return unordered;
  };

  stringifyKeysInOrder(data) {
    var sortedData = this.recursivelyOrderKeys(data);
    return JSON.stringify(sortedData);
  };

  async digestMessage(message) {
    const msgUint8 = new TextEncoder().encode(message);                           // encode as (utf-8) Uint8Array
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);           // hash the message
    const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convert buffer to byte array
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
    return hashHex;
  }
}
