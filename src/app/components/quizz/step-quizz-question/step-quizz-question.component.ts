import { Component } from '@angular/core';
import { QuizzService } from '../../../../service/quizz.service';

@Component({
  selector: 'app-step-quizz-question',
  imports: [],
  templateUrl: './step-quizz-question.component.html',
  styleUrl: './step-quizz-question.component.css',
})
export class StepQuizzQuestionComponent {
  currentQuestionIndex: number;
  numberOfQuestions: number;

  constructor(private quizzService: QuizzService) {
    this.currentQuestionIndex = this.quizzService.getCurrentQuestionIndex;
    this.numberOfQuestions = this.quizzService.quizParameters.numberOfQuestions;
  }
}
