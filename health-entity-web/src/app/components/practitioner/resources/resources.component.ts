import { Component, OnInit } from '@angular/core';
import { OptionsList } from '../../../models/options-lists';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  constructor() { }

  resource = 'procedure';

  resourceOptions = OptionsList.Resources;
  description = OptionsList.ResourceDescription;

  ngOnInit(): void { }

}
