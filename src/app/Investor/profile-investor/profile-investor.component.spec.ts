import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInvestorComponent } from './profile-investor.component';

describe('ProfileInvestorComponent', () => {
  let component: ProfileInvestorComponent;
  let fixture: ComponentFixture<ProfileInvestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileInvestorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileInvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
