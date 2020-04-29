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

  constructor(authorizationService: AuthorizationService) {
    // TODO fill auth with data
    authorizationService.getAuthorizations().
    subscribe(
      result => {
        this.init(result);
      },
      error => {
        console.log(error);
    });
  }

  ngOnInit(): void {  }

  init(result: Authorization[]) {
    this.dataSource = new MatTableDataSource(result);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSource.filterPredicate = (data, filter: string) => {
      const accumulator = (currentTerm, key) => {
        return this.nestedFilterCheck(currentTerm, data, key);
      };
      const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
      const transformedFilter = filter.trim().toLowerCase();
      return dataStr.indexOf(transformedFilter) !== -1;
    };
  }

  nestedFilterCheck(search: any, data: Authorization, key: string) {
    if (typeof data[key] === 'object') {
      for (const k in data[key]) {
        if (data[key][k] !== null) {
          search = this.nestedFilterCheck(search, data[key], k);
        }
      }
    } else {
      search += data[key];
    }
    return search;
  }

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
    // TODO unauthorize with this.idType and this.idNumber
  }

  close() {
    this.unauthorized = false;
  }
}
