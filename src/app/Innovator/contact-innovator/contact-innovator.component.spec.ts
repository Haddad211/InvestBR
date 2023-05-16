import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInnovatorComponent } from './contact-innovator.component';

describe('ContactInnovatorComponent', () => {
  let component: ContactInnovatorComponent;
  let fixture: ComponentFixture<ContactInnovatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactInnovatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactInnovatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
