import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyroutingComponent } from './lazyrouting.component';

describe('LazyroutingComponent', () => {
  let component: LazyroutingComponent;
  let fixture: ComponentFixture<LazyroutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyroutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyroutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
