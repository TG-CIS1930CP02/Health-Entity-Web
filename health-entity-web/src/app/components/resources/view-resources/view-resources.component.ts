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
import { Identification } from 'app/models/identification';
import { OptionsList } from '../../../models/options-lists';
import { ActivatedRoute } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

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
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry
      .addSvgIcon(
        'lock',
        sanitizer.bypassSecurityTrustResourceUrl(
          '../../../../assets/icons/lock.svg'
        )
      )
      .addSvgIcon(
        'lock_open',
        sanitizer.bypassSecurityTrustResourceUrl(
          '../../../../assets/icons/lock_open.svg'
        )
      );
  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  // TODO bring this from back and call url for info of resources
  dataSource = new MatTableDataSource<Transaction>(TRANSACTION_DUMMY);
  columnsToDisplay = ['date', 'type', 'practitioner', 'entity', 'integrity'];
  expandedElement: Transaction | null;

  resourceOptions = OptionsList.Resources;

  idType: any;
  id: any;

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;

    this.activatedRoute.params.subscribe((params) => {
      this.idType = params['idType'];
      this.id = params['id'];
      // TODO: GET MEDICAL RECORDS FROM BACKEND
    });
  }
}

// TODO dummy data, delete this
const TRANSACTION_DUMMY: Transaction[] = [
  {
    date: new Date('2020-01-16T00:00:00'),
    type: 'observation',
    practitioner: new Identification('CC', 12345),
    entity: 'Salud Total',
    integrity: true,
    data: new Map<string, object>([ ]),
  },
  {
    date: new Date('2020-01-16T00:00:00'),
    type: 'condition',
    practitioner: new Identification('CC', 67890),
    entity: 'Saludcop',
    integrity: false,
    data: new Map<string, object>([ ]),
  },
  {
    date: new Date('2020-01-16T00:00:00'),
    type: 'procedure',
    practitioner: new Identification('CC', 9876),
    entity: 'NuevaEps',
    integrity: true,
    data: new Map<string, object>([ ]),
  },
  {
    date: new Date('2020-01-16T00:00:00'),
    type: 'allergy-intolerance',
    practitioner: new Identification('CC', 54321),
    entity: 'Compensar',
    integrity: true,
    data: new Map<string, object>([ ]),
  },
  {
    date: new Date('2020-01-16T00:00:00'),
    type: 'diagnostic-report',
    practitioner: new Identification('CC', 9876),
    entity: 'NuevaEps',
    integrity: false,
    data: new Map<string, object>([ ]),
  },
  {
    date: new Date('2020-01-16T00:00:00'),
    type: 'observation',
    practitioner: new Identification('CC', 12345),
    entity: 'Salud Total',
    integrity: true,
    data: new Map<string, object>([ ]),
  },
  {
    date: new Date('2020-01-16T00:00:00'),
    type: 'condition',
    practitioner: new Identification('CC', 67890),
    entity: 'Saludcop',
    integrity: true,
    data: new Map<string, object>([ ]),
  },
  {
    date: new Date('2020-01-16T00:00:00'),
    type: 'procedure',
    practitioner: new Identification('CC', 9876),
    entity: 'NuevaEps',
    integrity: true,
    data: new Map<string, object>([ ]),
  },
  {
    date: new Date('2020-01-16T00:00:00'),
    type: 'allergy-intolerance',
    practitioner: new Identification('CC', 54321),
    entity: 'Compensar',
    integrity: true,
    data: new Map<string, object>([ ]),
  },
  {
    date: new Date('2020-01-16T00:00:00'),
    type: 'diagnostic-report',
    practitioner: new Identification('CC', 9876),
    entity: 'NuevaEps',
    integrity: true,
    data: new Map<string, object>([ ]),
  },
];
