import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Question, QuizzService } from '../../../../service/quizz.service';
import { RadioInputComponent } from '../../ui/radio-input/radio-input.component';
import { ButtonComponent } from '../../ui/button/button.component';

@Component({
  selector: 'app-step-quizz-question',
  imports: [CommonModule, RadioInputComponent, ButtonComponent],
  templateUrl: './step-quizz-question.component.html',
  styleUrl: './step-quizz-question.component.css',
})
export class StepQuizzQuestionComponent {
  currentQuestionIndex: number;
  numberOfQuestions: number;
  questions: Question[];
  isAnswer: boolean = false;

  selectedValue: string = '';
  constructor(private quizzService: QuizzService) {
    this.currentQuestionIndex = this.quizzService.getCurrentQuestionIndex;
    this.numberOfQuestions = this.quizzService.quizParameters.numberOfQuestions;
    this.questions = this.quizzService.getQuestions;

    console.log(this.questions[this.currentQuestionIndex - 1]);
  }

  showAnswer() {
    this.isAnswer = true;

    if (
      this.selectedValue ===
      this.questions[this.currentQuestionIndex - 1].correctAnswer
    ) {
      this.quizzService.incrementScore;
      console.log(this.quizzService.getScore);
    }
  }

  onNextQuestion() {
    if (this.currentQuestionIndex < this.numberOfQuestions) {
      this.isAnswer = false;
      this.currentQuestionIndex++;
      this.quizzService.setCurrentQuestionIndex(this.currentQuestionIndex);
    } else {
      this.quizzService.nextStep();
    }
  }

  onAnswerSelected(selected: string) {
    this.selectedValue = selected;
  }
}
