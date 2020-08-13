import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisisHelplineComponent } from './crisis-helpline.component';

describe('CrisisHelplineComponent', () => {
  let component: CrisisHelplineComponent;
  let fixture: ComponentFixture<CrisisHelplineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrisisHelplineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrisisHelplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
