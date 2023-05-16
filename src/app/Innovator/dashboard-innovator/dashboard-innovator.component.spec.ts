import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInnovatorComponent } from './dashboard-innovator.component';

describe('DashboardInnovatorComponent', () => {
  let component: DashboardInnovatorComponent;
  let fixture: ComponentFixture<DashboardInnovatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardInnovatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardInnovatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
