import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HellpComponent } from './hellp.component';

describe('HellpComponent', () => {
  let component: HellpComponent;
  let fixture: ComponentFixture<HellpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HellpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HellpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
