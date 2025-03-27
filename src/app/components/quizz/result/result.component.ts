import { QuizzService } from './../../../../service/quizz.service';
import { Component, HostListener } from '@angular/core';
import { ButtonComponent } from '../../ui/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result',
  imports: [ButtonComponent, CommonModule],
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

  isLargeScreen = window.innerWidth >= 768;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isLargeScreen = event.target.innerWidth >= 768;
  }

  constructor(private quizzService: QuizzService) {
    this.score = this.quizzService.getScore;
    this.userData = this.quizzService.getUserData;
    this.numberOfQuestions = this.quizzService.getNumberOfQuestions;
  }

  public resetQuizz() {
    this.quizzService.resetQuizz();
  }
}
