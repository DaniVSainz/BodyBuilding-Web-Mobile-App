import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWorkoutComponent } from './show-workout.component';

describe('ShowWorkoutComponent', () => {
  let component: ShowWorkoutComponent;
  let fixture: ComponentFixture<ShowWorkoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowWorkoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
