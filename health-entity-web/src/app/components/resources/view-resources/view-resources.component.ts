import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Resource } from '../../../models/resource';
import { Identification } from 'app/models/identification';

@Component({
  selector: 'app-view-resources',
  templateUrl: './view-resources.component.html',
  styleUrls: ['./view-resources.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class ViewResourcesComponent implements OnInit {

  constructor() { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  dataSource = new MatTableDataSource<Resource>(RESOURCES_DUMMY);
  columnsToDisplay = ['date', 'type', 'practitioner', 'entity'];
  expandedElement: Resource | null;

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}

const RESOURCES_DUMMY: Resource[] = [
  {
    date: new Date('2020-01-16T00:00:00'),
    type: 'observation',
    practitioner: new Identification('CC', 12345),
    entity: 'Salud Total',
    data: 'una url'
  },
  {
    date: new Date('2020-01-16T00:00:00'),
    type: 'condition',
    practitioner: new Identification('CC', 67890),
    entity: 'Saludcop',
    data: 'una url'
  },
  {
    date: new Date('2020-01-16T00:00:00'),
    type: 'procedure',
    practitioner: new Identification('CC', 9876),
    entity: 'NuevaEps',
    data: 'una url'
  },
  {
    date: new Date('2020-01-16T00:00:00'),
    type: 'observation',
    practitioner: new Identification('CC', 54321),
    entity: 'Compensar',
    data: 'una url'
  },
];
