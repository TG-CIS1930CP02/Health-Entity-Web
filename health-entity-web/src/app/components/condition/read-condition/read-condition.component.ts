import { Component, OnInit, Input } from '@angular/core';
import { Condition } from 'app/models/condition';

@Component({
  selector: 'app-read-condition',
  templateUrl: './read-condition.component.html',
  styleUrls: ['./read-condition.component.css']
})
export class ReadConditionComponent implements OnInit {

  constructor() { }

  @Input()
  condition: Condition = new Condition(
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
  );

  ngOnInit(): void { }

}
