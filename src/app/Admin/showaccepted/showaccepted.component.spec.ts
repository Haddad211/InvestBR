import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowacceptedComponent } from './showaccepted.component';

describe('ShowacceptedComponent', () => {
  let component: ShowacceptedComponent;
  let fixture: ComponentFixture<ShowacceptedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowacceptedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowacceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
