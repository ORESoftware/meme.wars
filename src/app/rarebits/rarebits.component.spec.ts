import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RarebitsComponent } from './rarebits.component';

describe('RarebitsComponent', () => {
  let component: RarebitsComponent;
  let fixture: ComponentFixture<RarebitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RarebitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RarebitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
