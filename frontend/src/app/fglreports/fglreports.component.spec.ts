import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FglreportsComponent } from './fglreports.component';

describe('FglreportsComponent', () => {
  let component: FglreportsComponent;
  let fixture: ComponentFixture<FglreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FglreportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FglreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
