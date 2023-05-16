import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationInnovatorComponent } from './notification-innovator.component';

describe('NotificationInnovatorComponent', () => {
  let component: NotificationInnovatorComponent;
  let fixture: ComponentFixture<NotificationInnovatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationInnovatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationInnovatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
