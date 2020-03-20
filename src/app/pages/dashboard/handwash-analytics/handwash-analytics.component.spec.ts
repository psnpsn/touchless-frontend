import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandwashAnalyticsComponent } from './handwash-analytics.component';

describe('HandwashAnalyticsComponent', () => {
  let component: HandwashAnalyticsComponent;
  let fixture: ComponentFixture<HandwashAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandwashAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandwashAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
