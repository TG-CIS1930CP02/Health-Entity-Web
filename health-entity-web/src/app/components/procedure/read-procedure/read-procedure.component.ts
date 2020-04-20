import { Component, OnInit, Input } from '@angular/core';
import { Procedure } from 'app/models/procedure';

@Component({
  selector: 'app-read-procedure',
  templateUrl: './read-procedure.component.html',
  styleUrls: ['./read-procedure.component.scss']
})
export class ReadProcedureComponent implements OnInit {

  constructor() { }
  @Input()
  procedure: Procedure = new Procedure(
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined
  );

  ngOnInit(): void { }

}
