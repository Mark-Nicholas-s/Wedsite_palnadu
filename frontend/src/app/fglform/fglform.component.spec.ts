import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FGLformComponent } from './fglform.component';

describe('FGLformComponent', () => {
  let component: FGLformComponent;
  let fixture: ComponentFixture<FGLformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FGLformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FGLformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
