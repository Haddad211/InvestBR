import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInvestorComponent } from './contact-investor.component';

describe('ContactInvestorComponent', () => {
  let component: ContactInvestorComponent;
  let fixture: ComponentFixture<ContactInvestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactInvestorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactInvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
