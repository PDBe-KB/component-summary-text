import { Component, OnInit, Input } from '@angular/core';
import {SummaryText, SummaryData, Flag} from './summary-text.models';
import {MatDialog} from '@angular/material';
import {TutorialComponent} from '../tutorial/tutorial.component';
import {Tutorial} from '../tutorial/tutorial.models';

@Component({
  selector: 'app-summary-text',
  templateUrl: './summary-text.component.html',
  styleUrls: ['./summary-text.component.css']
})
export class SummaryTextComponent implements OnInit {

  @Input() data: SummaryData;
  tutorial: Tutorial;

  get_shortened_text (text: string): string {
    const words = text.split(' ');
    if (words.length <= this.data.text_limit) {
      return text;
    }
    const word_subset = words.slice(0, this.data.text_limit);
    return word_subset.join(' ') + ' ...';
  }

  swich_text(text: SummaryText) {
    text.show_long = !text.show_long;
  }

  check_if_has_to_show_more(text: SummaryText) {
    const words = text.text.split(' ');
    if (!text.show_long && words.length >= this.data.text_limit) {
      return true;
    }
    return false;
  }

  getStyle(flag: any) {
    return {
      'background-color': flag.color
    };
  }

  openDialog() {
    this.dialog.open(TutorialComponent,
      {
        disableClose: false,
        panelClass: 'tutorial',
        data: this.tutorial
      }
    );
  }

  constructor(public dialog: MatDialog) {
    this.tutorial = {
      title: 'How to use the summary section',
      text: 'This short video gives an overview of how to use the summary section.',
      url: 'https://www.youtube.com/embed/Hz1ixiRLcgE?autoplay=1'
    };
  }

  ngOnInit() {
  }

}
