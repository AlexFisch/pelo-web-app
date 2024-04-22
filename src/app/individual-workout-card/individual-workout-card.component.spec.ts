import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualWorkoutCardComponent } from './individual-workout-card.component';

describe('IndividualWorkoutCardComponent', () => {
  let component: IndividualWorkoutCardComponent;
  let fixture: ComponentFixture<IndividualWorkoutCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualWorkoutCardComponent]
    });
    fixture = TestBed.createComponent(IndividualWorkoutCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
