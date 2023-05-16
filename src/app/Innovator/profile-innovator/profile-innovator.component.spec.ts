import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInnovatorComponent } from './profile-innovator.component';

describe('ProfileInnovatorComponent', () => {
  let component: ProfileInnovatorComponent;
  let fixture: ComponentFixture<ProfileInnovatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileInnovatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileInnovatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
