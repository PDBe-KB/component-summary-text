import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryTextComponent } from './summary-text.component';
import {SummaryData} from './summary-text.models';
import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-tutorial',
  styles: [],
  template: '<html></html>'
})
class TutorialComponent {}

const TEST_SUMMARY_DATA: SummaryData = {
  title: 'title',
  subtitle: 'subtitle',
  texts: [
    {
      label: 'test label 1',
      text: 'text1',
      italic: true,
      show_long: true,
      source: '',
      source_url: ''
    },
    {
      label: 'test label 2',
      text: 'text2 text2 text2',
      italic: false,
      show_long: false,
      source: 'source',
      source_url: 'url'
    }
  ],
  text_limit: 2,
  flags: [
    {
      name: 'name',
      color: 'color',
      url: 'url',
      tooltip: 'tooltip'
    }
  ],
};



describe('SummaryTextComponent', () => {
  let component: SummaryTextComponent;
  let fixture: ComponentFixture<SummaryTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryTextComponent, TutorialComponent ],
      providers: [
        {provide: MatDialog, useValue: {}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryTextComponent);
    component = fixture.componentInstance;
    component.data = TEST_SUMMARY_DATA;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
