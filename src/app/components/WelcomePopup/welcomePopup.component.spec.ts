import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePopupComponent } from './welcomePopup.component';

describe('PopupComponent', () => {
  let component: WelcomePopupComponent;
  let fixture: ComponentFixture<WelcomePopupComponent>;

  beforeEach(async(() => {
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
