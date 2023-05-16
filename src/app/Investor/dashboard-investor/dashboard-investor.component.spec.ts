import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInvestorComponent } from './dashboard-investor.component';

describe('DashboardInvestorComponent', () => {
  let component: DashboardInvestorComponent;
  let fixture: ComponentFixture<DashboardInvestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardInvestorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardInvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
