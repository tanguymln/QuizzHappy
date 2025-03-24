import { QuizzService } from './../../../../service/quizz.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-step-quizz-parameter',
  imports: [],
  templateUrl: './step-quizz-parameter.component.html',
  styleUrl: './step-quizz-parameter.component.css',
})
export class StepQuizzParameterComponent {
  userData: { firstname: string; lastname: string } = {
    firstname: '',
    lastname: '',
  };

  constructor(private quizzService: QuizzService) {
    this.userData = this.quizzService.getUserData;
  }
}
