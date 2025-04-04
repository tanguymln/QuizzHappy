import { CommonModule } from '@angular/common';
import { QuizzService, Question } from './../../../../service/quizz.service';

import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../ui/button/button.component';
import { NumberInputComponent } from '../../ui/number-input/number-input.component';
import { SelectComponent } from '../../ui/select/select.component';
import { ApiService } from '../../../../service/api.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-step-quizz-parameter',
  imports: [
    CommonModule,
    FormsModule,
    ButtonComponent,
    NumberInputComponent,
    SelectComponent,
  ],
  templateUrl: './step-quizz-parameter.component.html',
  styleUrl: './step-quizz-parameter.component.css',
  standalone: true,
})
export class StepQuizzParameterComponent {
  typeOptions: { label: string; value: string }[] = [];
  difficultyOptions: { label: string; value: string }[] = [
    { label: 'Any Difficulty', value: '' },
    { label: 'Facile', value: 'easy' },
    { label: 'Moyen', value: 'medium' },
    { label: 'Difficile', value: 'hard' },
  ];
  answerOptions: { label: string; value: string }[] = [
    { label: 'Any type', value: '' },
    { label: 'Multiple', value: 'multiple' },
    { label: 'True/False', value: 'boolean' },
  ];

  selectedType: string = '';
  selectedDifficulty: string = '';
  selectedAnswerType: string = '';
  amount: number = 5;

  userData: { firstname: string; lastname: string } = {
    firstname: '',
    lastname: '',
  };

  isLargeScreen = window.innerWidth >= 768;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isLargeScreen = event.target.innerWidth >= 768;
  }

  errorMessage: string = '';
  constructor(
    private quizzService: QuizzService,
    private apiService: ApiService
  ) {
    this.userData = this.quizzService.getUserData;
  }

  async ngOnInit(): Promise<void> {
    try {
      const response = await firstValueFrom(this.apiService.getCategory());
      if (response.trivia_categories) {
        const typesOfQuestion = response.trivia_categories.map((cat: any) => ({
          label: cat.name,
          value: cat.id,
        }));
        this.typeOptions = [
          { label: 'Any Categories', value: '' },
          ...typesOfQuestion,
        ];
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des catégories', error);
    }
  }

  async onSubmit(event: Event): Promise<void> {
    event.preventDefault();

    if (this.amount >= 5 && this.amount <= 20) {
      this.quizzService.setQuizzParameter(
        this.amount,
        this.selectedType,
        this.selectedDifficulty,
        this.selectedAnswerType
      );

      const response = await firstValueFrom(
        this.apiService.get({
          amount: this.amount,
          category: this.selectedType,
          difficulty: this.selectedDifficulty,
          type: this.selectedAnswerType,
        })
      );

      if (response.response_code === 0) {
        const results = response.results;
        const questions: Question[] = results.map(
          (item: {
            question: string;
            correct_answer: string | string[];
            incorrect_answers: string[];
            difficulty: string;
          }) => {
            const correctAnswers = Array.isArray(item.correct_answer)
              ? item.correct_answer.map(atob)
              : [atob(item.correct_answer)];

            return {
              question: atob(item.question),
              options: [...item.incorrect_answers.map(atob), ...correctAnswers],
              correctAnswer: [...correctAnswers],
              difficulty: atob(item.difficulty),
            };
          }
        );
        this.quizzService.setQuestions(questions);
        this.quizzService.nextStep();
      } else {
        console.log('Error');
      }
    } else {
      this.errorMessage =
        'Veuillez remplir tous les champs avec des informations valide';
    }
  }

  onPrevious(): void {
    this.quizzService.previousStep();
  }

  onAmountChange(value: number) {
    this.amount = value;
  }

  isMobile(): boolean {
    return window.innerWidth <= 768;
  }
}
