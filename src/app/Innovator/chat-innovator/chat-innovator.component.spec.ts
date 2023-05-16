import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatInnovatorComponent } from './chat-innovator.component';

describe('ChatInnovatorComponent', () => {
  let component: ChatInnovatorComponent;
  let fixture: ComponentFixture<ChatInnovatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatInnovatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatInnovatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
