import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepQuizzQuestionComponent } from './step-quizz-question.component';

describe('StepQuizzQuestionComponent', () => {
  let component: StepQuizzQuestionComponent;
  let fixture: ComponentFixture<StepQuizzQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepQuizzQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepQuizzQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
