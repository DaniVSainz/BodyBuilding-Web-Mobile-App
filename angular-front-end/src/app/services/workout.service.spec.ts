import { TestBed, inject } from '@angular/core/testing';

import { WorkoutService } from './workout.service';

describe('WorkoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkoutService]
    });
  });

  it('should ...', inject([WorkoutService], (service: WorkoutService) => {
    expect(service).toBeTruthy();
  }));
});
