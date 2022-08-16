import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsdataComponent } from './obsdata.component';

describe('ObsdataComponent', () => {
  let component: ObsdataComponent;
  let fixture: ComponentFixture<ObsdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObsdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
