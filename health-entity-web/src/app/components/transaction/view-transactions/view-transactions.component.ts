import { Component, OnInit, ViewChild } from '@angular/core';
import { TransactionService } from 'app/services/transaction.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Transaction } from 'app/models/transaction';
import { OptionsList } from 'app/models/options-lists';
import { TokenReaderService } from 'app/services/security/token-reader.service';

@Component({
  selector: 'app-view-transactions',
  templateUrl: './view-transactions.component.html',
  styleUrls: ['./view-transactions.component.scss'],
})
export class ViewTransactionsComponent implements OnInit {
  idType: any;
  id: any;
  entities = OptionsList.Entities;

  constructor(
    private transactionService: TransactionService,
    private tokenReaderService: TokenReaderService,
  ) {
    const identification = this.tokenReaderService.getIdentificationPerformer();
    this.idType = identification.type;
    this.id = identification.id;
  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  dataSource: MatTableDataSource<Transaction>;

  columnsToDisplay = ['date', 'operation', 'type', 'resourceId', 'practitioner', 'entity'];

  resourceOptions = OptionsList.Resources;
  operationOptions = OptionsList.Operations;

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
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
  }
}
