import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccefullLoginComponent } from './succefull-login.component';

describe('SuccefullLoginComponent', () => {
  let component: SuccefullLoginComponent;
  let fixture: ComponentFixture<SuccefullLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccefullLoginComponent]
    });
    fixture = TestBed.createComponent(SuccefullLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
