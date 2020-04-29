import { Component, OnInit, ViewChild } from '@angular/core';
import { Authorization } from '../../../models/authorization';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AuthorizationService } from 'app/services/authorization.service';

@Component({
  selector: 'app-list-authorization',
  templateUrl: './list-authorization.component.html',
  styleUrls: ['./list-authorization.component.scss']
})
export class ListAuthorizationComponent implements OnInit {
  unauthorized = false;
  idNumber: number;
  idType: string;

  auth: Authorization[];
  displayedColumns: string[] = ['identification', 'name', 'rol', 'action'];
  dataSource: MatTableDataSource<Authorization>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(authorizationService: AuthorizationService) {
    // TODO fill auth with data
    authorizationService.getAuthorizations().
    subscribe(
      result => {
        debugger;
        this.auth = result;
      },
      error => {
        console.log(error);
    });
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.auth);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  saveId(type: string, id: number) {
    this.idType = type;
    this.idNumber = id;
    this.unauthorized = true;
  }

  unauthorize() {
    this.unauthorized = false;
    // TODO unauthorize with this.idType and this.idNumber
  }

  close() {
    this.unauthorized = false;
  }
}
