import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivenewComponent } from './reactivenew.component';

describe('ReactivenewComponent', () => {
  let component: ReactivenewComponent;
  let fixture: ComponentFixture<ReactivenewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactivenewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
