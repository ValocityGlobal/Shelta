import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WelcomePopupComponent } from './welcomePopup.component';

describe('PopupComponent', () => {
  let component: WelcomePopupComponent;
  let fixture: ComponentFixture<WelcomePopupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
