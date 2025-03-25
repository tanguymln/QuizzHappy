import { QuizzService } from './../../../../service/quizz.service';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../ui/button/button.component';

@Component({
  selector: 'app-result',
  imports: [ButtonComponent],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css',
})
export class ResultComponent {
  score: number;
  userData: { firstname: string; lastname: string } = {
    firstname: '',
    lastname: '',
  };
  numberOfQuestions: number;

  constructor(private quizzService: QuizzService) {
    this.score = this.quizzService.getScore;
    this.userData = this.quizzService.getUserData;
    this.numberOfQuestions = this.quizzService.getNumberOfQuestions;
  }

  public resetQuizz() {
    this.quizzService.resetQuizz();
  }
}
