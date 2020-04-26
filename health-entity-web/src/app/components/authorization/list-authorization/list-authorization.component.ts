import { Component, OnInit, ViewChild } from '@angular/core';
import { Authorization } from '../../../models/authorization';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-list-authorization',
  templateUrl: './list-authorization.component.html',
  styleUrls: ['./list-authorization.component.scss']
})
export class ListAuthorizationComponent implements OnInit {
  displayedColumns: string[] = ['identificationType', 'identificationNumber', 'name', 'rol'];
  dataSource: MatTableDataSource<Authorization>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { }

  ngOnInit(): void { }

}
