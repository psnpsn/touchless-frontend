import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapwaterComponent } from './tapwater.component';

describe('TapwaterComponent', () => {
  let component: TapwaterComponent;
  let fixture: ComponentFixture<TapwaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapwaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapwaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
