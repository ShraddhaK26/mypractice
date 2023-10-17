import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleLogginComponent } from './principle-loggin.component';

describe('PrincipleLogginComponent', () => {
  let component: PrincipleLogginComponent;
  let fixture: ComponentFixture<PrincipleLogginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipleLogginComponent]
    });
    fixture = TestBed.createComponent(PrincipleLogginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
