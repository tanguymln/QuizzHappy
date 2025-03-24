import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepQuizzParameterComponent } from './step-quizz-parameter.component';

describe('StepQuizzParameterComponent', () => {
  let component: StepQuizzParameterComponent;
  let fixture: ComponentFixture<StepQuizzParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepQuizzParameterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepQuizzParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
