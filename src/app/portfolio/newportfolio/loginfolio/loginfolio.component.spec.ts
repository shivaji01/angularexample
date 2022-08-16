import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginfolioComponent } from './loginfolio.component';

describe('LoginfolioComponent', () => {
  let component: LoginfolioComponent;
  let fixture: ComponentFixture<LoginfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
