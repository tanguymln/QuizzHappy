import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StepUserNameComponent } from './components/quizz/step-user-name/step-user-name.component';
import { QuizzService } from '../service/quizz.service';
import { StepQuizzParameterComponent } from './components/quizz/step-quizz-parameter/step-quizz-parameter.component';
import { StepQuizzQuestionComponent } from './components/quizz/step-quizz-question/step-quizz-question.component';
import { ResultComponent } from './components/quizz/result/result.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    StepUserNameComponent,
    StepQuizzParameterComponent,
    StepQuizzQuestionComponent,
    ResultComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Quizz Happy';
  step: number;

  constructor(private quizzService: QuizzService) {
    this.step = this.quizzService.getCurrentStep;
  }

  ngOnInit(): void {
    this.quizzService.step$.subscribe((newStep) => {
      this.step = newStep;
    });
  }
}
