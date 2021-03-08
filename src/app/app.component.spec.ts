import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {SummaryTextComponent} from './summary-text/summary-text.component';
import {MatDialog} from '@angular/material';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SummaryTextComponent
      ],
      providers: [
        {provide: MatDialog, useValue: {}}
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
