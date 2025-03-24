import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StepUserNameComponent } from './components/quizz/step-user-name/step-user-name.component';
import { QuizzService } from '../service/quizz.service';
import { StepQuizzParameterComponent } from './components/quizz/step-quizz-parameter/step-quizz-parameter.component';
import { StepQuizzQuestionComponent } from './components/quizz/step-quizz-question/step-quizz-question.component';
import { ResultComponent } from './components/quizz/result/result.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    StepUserNameComponent,
    StepQuizzParameterComponent,
    StepQuizzQuestionComponent,
    ResultComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Quizz Happy';
  step: number;

  constructor(private quizzService: QuizzService) {
    this.step = this.quizzService.getCurrentStep;
  }
}
