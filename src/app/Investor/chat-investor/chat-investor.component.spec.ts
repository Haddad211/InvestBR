import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatInvestorComponent } from './chat-investor.component';

describe('ChatInvestorComponent', () => {
  let component: ChatInvestorComponent;
  let fixture: ComponentFixture<ChatInvestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatInvestorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatInvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
