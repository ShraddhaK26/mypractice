import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubLandingComponent } from './sub-landing.component';

describe('SubLandingComponent', () => {
  let component: SubLandingComponent;
  let fixture: ComponentFixture<SubLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubLandingComponent]
    });
    fixture = TestBed.createComponent(SubLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
