import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleSignupComponent } from './principle-signup.component';

describe('PrincipleSignupComponent', () => {
  let component: PrincipleSignupComponent;
  let fixture: ComponentFixture<PrincipleSignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipleSignupComponent]
    });
    fixture = TestBed.createComponent(PrincipleSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
