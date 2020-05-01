import { Component, OnInit, ViewChild } from '@angular/core';
import { Authorization } from '../../../models/authorization';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AuthorizationService } from 'app/services/authorization.service';
import { OptionsList } from '../../../models/options-lists';

@Component({
  selector: 'app-list-authorization',
  templateUrl: './list-authorization.component.html',
  styleUrls: ['./list-authorization.component.scss']
})
export class ListAuthorizationComponent implements OnInit {
  unauthorized = false;
  idNumber: number;
  idType: string;
  role: string;

  auth: Authorization[];
  displayedColumns: string[] = ['identification', 'name', 'rol', 'action'];
  dataSource: MatTableDataSource<Authorization>;
  roleOptions = OptionsList.Roles;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private authorizationService: AuthorizationService) {
    // TODO fill auth with data
    authorizationService.getAuthorizations().
    subscribe(
      result => {
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        console.log(error);
    });
  }

  ngOnInit(): void {  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  saveId(type: string, id: number, role: string) {
    this.idType = type;
    this.idNumber = id;
    this.role = role;
    this.unauthorized = true;
  }

  unauthorize() {
    this.unauthorized = false;
    this.authorizationService.deleteAuthorization(this.idType, this.idNumber, this.role).
    subscribe(
      result => {
        location.reload();
      },
      error => {
        console.log(error);
    });
    // TODO unauthorize with this.idType and this.idNumber
  }

  close() {
    this.unauthorized = false;
  }
}
