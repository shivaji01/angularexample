import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldrouteComponent } from './oldroute.component';

describe('OldrouteComponent', () => {
  let component: OldrouteComponent;
  let fixture: ComponentFixture<OldrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldrouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OldrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
