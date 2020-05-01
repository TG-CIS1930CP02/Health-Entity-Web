import { Component, OnInit } from '@angular/core';
import { OptionsList } from 'app/models/options-lists';
import { ResourceEnum } from '../../../models/resource-enum';

@Component({
  selector: 'app-create-resources',
  templateUrl: './create-resources.component.html',
  styleUrls: ['./create-resources.component.scss']
})
export class CreateResourcesComponent implements OnInit {

  constructor() { }

  resource = 'procedure';

  resources = ResourceEnum;
  resourceOptions = OptionsList.Resources;
  description = OptionsList.ResourceDescription;

  ngOnInit(): void { }

}
