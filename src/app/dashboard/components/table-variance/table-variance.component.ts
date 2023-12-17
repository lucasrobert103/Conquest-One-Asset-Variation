import { Component, Input } from '@angular/core';
import { IVariance } from "../../../core/models/variance.model";

@Component({
  selector: 'app-table-variance',
  templateUrl: './table-variance.component.html',
  styleUrls: ['./table-variance.component.css']
})
export class TableVarianceComponent {

  @Input() dataSource: IVariance[] = [];

  displayedColumns: string[] = [
    'day', 'date', 'price', 'variationDMinusOne', 'firstDateVariation'
  ];
}
