import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleSignupFormComponent } from './principle-signup.component';

describe('PrincipalSignUpComponent', () => {
  let component:PrincipleSignupFormComponent;
  let fixture: ComponentFixture<PrincipleSignupFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipleSignupFormComponent]
    });
    fixture = TestBed.createComponent(PrincipleSignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
