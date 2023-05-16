import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovaterComponent } from './innovater.component';

describe('InnovaterComponent', () => {
  let component: InnovaterComponent;
  let fixture: ComponentFixture<InnovaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnovaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnovaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
