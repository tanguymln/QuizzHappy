import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Question, QuizzService } from '../../../../service/quizz.service';
import { RadioInputComponent } from '../../ui/radio-input/radio-input.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { ShufflePipe } from '../../../../pipe/shuffle.pipe';
import { CheckboxInputComponent } from '../../ui/checkbox-input/checkbox-input.component';

@Component({
  selector: 'app-step-quizz-question',
  imports: [
    CommonModule,
    RadioInputComponent,
    CheckboxInputComponent,
    ButtonComponent,
    ShufflePipe,
  ],
  templateUrl: './step-quizz-question.component.html',
  styleUrl: './step-quizz-question.component.css',
})
export class StepQuizzQuestionComponent {
  currentQuestionIndex: number;
  numberOfQuestions: number;
  questions: Question[];
  isAnswer: boolean = false;

  isLargeScreen = window.innerWidth >= 768;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isLargeScreen = event.target.innerWidth >= 768;
  }

  selectedValue: string | string[] = '';
  constructor(private quizzService: QuizzService) {
    this.currentQuestionIndex = this.quizzService.getCurrentQuestionIndex;
    this.numberOfQuestions = this.quizzService.quizParameters.numberOfQuestions;
    this.questions = this.quizzService.getQuestions;
  }

  showAnswer() {
    this.isAnswer = true;

    if (Array.isArray(this.selectedValue)) {
      const allCorrect = this.selectedValue.every((answer) =>
        this.questions[this.currentQuestionIndex - 1].correctAnswer.includes(
          answer
        )
      );
      if (allCorrect) {
        this.quizzService.incrementScore;
      }
    } else {
      if (
        this.questions[this.currentQuestionIndex - 1].correctAnswer.includes(
          this.selectedValue
        )
      ) {
        this.quizzService.incrementScore;
      }
    }
  }

  onNextQuestion() {
    if (this.currentQuestionIndex < this.numberOfQuestions) {
      this.isAnswer = false;
      this.selectedValue = ' ';
      this.currentQuestionIndex++;
      this.quizzService.setCurrentQuestionIndex(this.currentQuestionIndex);
    } else {
      this.quizzService.nextStep();
    }
  }

  onAnswerSelected(selected: string | string[]) {
    this.selectedValue = selected;
  }
}
