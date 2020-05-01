import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Transaction } from '../../../models/transaction';
import { OptionsList } from '../../../models/options-lists';
import { ActivatedRoute } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { TransactionService } from '../../../services/transaction.service';

@Component({
  selector: 'app-view-resources',
  templateUrl: './view-resources.component.html',
  styleUrls: ['./view-resources.component.scss'],
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
export class ViewResourcesComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private transactionService: TransactionService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry
      .addSvgIcon('lock',
        sanitizer.bypassSecurityTrustResourceUrl(
          '../../../../assets/icons/lock.svg'
        )
      )
      .addSvgIcon('lock_open',
        sanitizer.bypassSecurityTrustResourceUrl(
          '../../../../assets/icons/lock_open.svg'
        )
      );
  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  // TODO bring this from back and call url for info of resources
  dataSource: MatTableDataSource<Transaction>; // = new MatTableDataSource<Transaction>(TRANSACTION_DUMMY);
  columnsToDisplay = ['date', 'type', 'practitioner', 'entity', 'integrity'];
  expandedElement: Transaction | null;

  resourceOptions = OptionsList.Resources;

  idType: any;
  id: any;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.idType = params['idType'];
      this.id = params['id'];
      // TODO: GET MEDICAL RECORDS FROM BACKEND

      this.transactionService.getTransactions(this.idType, this.id).
      subscribe(
        result => {
          this.dataSource = new MatTableDataSource<Transaction>(result);
          this.dataSource.paginator = this.paginator;
        },
        error => {
          console.log(error);
        }
      );
    });
  }
}

// TODO dummy data, delete this
const TRANSACTION_DUMMY: Transaction[] = [
  {
    institution: 'Colsanitas',
    operation: 'ADD',
    recipient: 'CC_123',
    recipientRole: 'ROLE_PATIENT',
    resourceIntegrity: 'hash',
    resourcePath: 'CC_123/observation/hash',
    sourceType: 'observation',
    sender: 'CC_321',
    senderRole: 'ROLE_DOCTOR',
    timestamp: new Date()
  },
];
