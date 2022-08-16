import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsnewComponent } from './obsnew.component';

describe('ObsnewComponent', () => {
  let component: ObsnewComponent;
  let fixture: ComponentFixture<ObsnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObsnewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
