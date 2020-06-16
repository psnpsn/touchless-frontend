import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WristbandComponent } from './wristband.component';

describe('WristbandComponent', () => {
  let component: WristbandComponent;
  let fixture: ComponentFixture<WristbandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WristbandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WristbandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
