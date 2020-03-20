import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendChartComponent } from './legend-chart.component';

describe('LegendChartComponent', () => {
  let component: LegendChartComponent;
  let fixture: ComponentFixture<LegendChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegendChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegendChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
