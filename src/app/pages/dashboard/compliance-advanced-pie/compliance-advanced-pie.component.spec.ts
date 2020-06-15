import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplianceAdvancedPieComponent } from './compliance-advanced-pie.component';

describe('ComplianceAdvancedPieComponent', () => {
  let component: ComplianceAdvancedPieComponent;
  let fixture: ComponentFixture<ComplianceAdvancedPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplianceAdvancedPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplianceAdvancedPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
