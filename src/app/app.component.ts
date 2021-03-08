import {Component} from '@angular/core';
import {SummaryData} from './summary-text/summary-text.models';
import {MOCK_DATA} from '../mockData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: SummaryData;

  constructor() {
    this.data = MOCK_DATA;
  }
}
