import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationInvestorComponent } from './notification-investor.component';

describe('NotificationInvestorComponent', () => {
  let component: NotificationInvestorComponent;
  let fixture: ComponentFixture<NotificationInvestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationInvestorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationInvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
