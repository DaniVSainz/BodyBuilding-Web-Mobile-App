import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseShowComponent } from './exercise-show.component';

describe('ExerciseShowComponent', () => {
  let component: ExerciseShowComponent;
  let fixture: ComponentFixture<ExerciseShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
