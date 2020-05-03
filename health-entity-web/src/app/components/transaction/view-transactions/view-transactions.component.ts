import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from 'app/services/transaction.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Transaction } from 'app/models/transaction';
import { OptionsList } from 'app/models/options-lists';

@Component({
  selector: 'app-view-transactions',
  templateUrl: './view-transactions.component.html',
  styleUrls: ['./view-transactions.component.scss'],
})
export class ViewTransactionsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private transactionService: TransactionService,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
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

  columnsToDisplay = ['date', 'operation', 'type', 'resourceId', 'practitioner', 'entity'];

  resourceOptions = OptionsList.Resources;
  operationOptions = OptionsList.Operations;

  idType: any;
  id: any;

  ngOnInit(): void {
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
        },
        error => {
          console.log(error);
        }
      );
    });
  }
}
