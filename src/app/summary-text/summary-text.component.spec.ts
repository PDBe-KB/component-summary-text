import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryTextComponent } from './summary-text.component';

describe('SummaryTextComponent', () => {
  let component: SummaryTextComponent;
  let fixture: ComponentFixture<SummaryTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
