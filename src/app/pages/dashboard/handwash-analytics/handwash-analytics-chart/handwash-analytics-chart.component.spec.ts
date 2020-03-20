import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandwashAnalyticsChartComponent } from './handwash-analytics-chart.component';

describe('HandwashAnalyticsChartComponent', () => {
  let component: HandwashAnalyticsChartComponent;
  let fixture: ComponentFixture<HandwashAnalyticsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandwashAnalyticsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandwashAnalyticsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
