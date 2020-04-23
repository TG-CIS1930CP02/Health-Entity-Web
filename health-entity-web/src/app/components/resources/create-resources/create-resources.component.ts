import { Component, OnInit } from '@angular/core';
import { OptionsList } from 'app/models/options-lists';

@Component({
  selector: 'app-create-resources',
  templateUrl: './create-resources.component.html',
  styleUrls: ['./create-resources.component.scss']
})
export class CreateResourcesComponent implements OnInit {

  constructor() { }

  resource = 'procedure';

  resourceOptions = OptionsList.Resources;
  description = OptionsList.ResourceDescription;

  ngOnInit(): void { }

}
