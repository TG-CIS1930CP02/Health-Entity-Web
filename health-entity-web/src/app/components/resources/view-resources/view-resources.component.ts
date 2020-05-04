import { Component, OnInit, ViewChild, ChangeDetectorRef, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Transaction } from '../../../models/transaction';
import { OptionsList } from '../../../models/options-lists';
import { ActivatedRoute } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { TransactionService } from '../../../services/transaction.service';
import { ResourceEnum } from '../../../models/resource-enum';
import { ResourceService } from '../../../services/resources/resource.services';
import { RoleEnum } from '../../../models/role-enum';
import { TokenReaderService } from 'app/services/security/token-reader.service';
import { Person } from '../../../models/person';
import { PersonService } from '../../../services/person.service';

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
  role: string;
  roles = RoleEnum;
  emergency: string;
  person: Person;

  title = 'Historia clínica';

  constructor(
    private activatedRoute: ActivatedRoute,
    private transactionService: TransactionService,
    private resourceService: ResourceService,
    private personService: PersonService,
    private tokenReaderService: TokenReaderService,
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

    this.init();
  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  dataSource: MatTableDataSource<Transaction>;
  integrity: Map<Transaction, string>;

  columnsToDisplay = ['date', 'type', 'resourceId', 'practitioner', 'entity', 'integrity'];
  expandedElement: Transaction | null;
  resource: any;

  resourceOptions = OptionsList.Resources;
  resources = ResourceEnum;

  idType: any;
  id: any;

  ngOnInit(): void {
    this.integrity = new Map();
    this.refresh();
  }

  init() {
    this.role = localStorage.getItem('role');

    this.activatedRoute.queryParams.subscribe(params => {
      this.emergency = params['emergencySearch'];
      if (this.emergency === 'true') {
        console.log(this.emergency);
        this.title = 'Historia Clínica de Emergencia';
      }
    });

    if (this.role != RoleEnum.PATIENT) {
      this.activatedRoute.params.subscribe((params) => {
        this.idType = params['idType'];
        this.id = params['id'];

        this.personService.findByIdentification(this.idType, this.id).subscribe(
          result => {
            console.log(result);
            this.person = result;
          },
          error => {
            console.error(error);
          }
        );
      });
    }
  }

  refresh() {
    if (this.role === RoleEnum.PATIENT) {
      const identification = this.tokenReaderService.getIdentificationPerformer();
      this.idType = identification.type;
      this.id = identification.id;
      this.getPatientTransactions();
    } else {
      this.getTransactions();
    }
  }

  getTransactions() {
      if (this.emergency === 'true') {
        this.getTransactionsEmergency();
      } else {
        this.getPatientTransactions();
      }
  }

  getTransactionsEmergency() {
    this.transactionService.getMedicalRecordsEmergency(this.idType, this.id).
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
  }

  getPatientTransactions() {
    this.transactionService.getMedicalRecords(this.idType, this.id).
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
  }

  search(row) {
    this.resource = null;
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
      let ordered = {};
      Object.keys(unordered).sort().forEach( (key) => {
        ordered[key] = this.recursivelyOrderKeys(unordered[key]);
      });
      return ordered;
    }

    return unordered;
  }

  stringifyKeysInOrder(data) {
    let sortedData = this.recursivelyOrderKeys(data);
    return JSON.stringify(sortedData);
  }

  async digestMessage(message) {
    const msgUint8 = new TextEncoder().encode(message);                           // encode as (utf-8) Uint8Array
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);           // hash the message
    const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convert buffer to byte array
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
    return hashHex;
  }
}
