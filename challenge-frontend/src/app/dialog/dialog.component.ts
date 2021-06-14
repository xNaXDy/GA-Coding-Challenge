import { Component, Input, OnInit } from '@angular/core';
import { Wine } from '../schema/wine.schema';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  @Input() editMode = false;
  @Input() wineData: Wine = {
    _id: '',
    acidity: 0,
    alcoholLevel: 0,
    appellation: '',
    country: '',
    description: '',
    grape: '',
    lage: '',
    region: '',
    sugarLevel: 0,
    sweetness: '',
    title: '',
    validEAN: false,
    vintage: 0,
    wineColor: '',
    wineType: '',
    winery: ''
  };

  constructor() { }

}
