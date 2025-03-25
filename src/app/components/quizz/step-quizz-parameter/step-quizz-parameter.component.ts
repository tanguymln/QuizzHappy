import { CommonModule } from '@angular/common';
import { QuizzService, Question } from './../../../../service/quizz.service';

import { Component } from '@angular/core';
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
  typeOptions: { label: string; value: string }[] = [
    { label: 'Any Category', value: '' },
    { label: 'General Knowledge', value: '9' },
    { label: 'Entertainment: Books', value: '10' },
    { label: 'Entertainment: Film', value: '11' },
    { label: 'Entertainment: Music', value: '12' },
    { label: 'Entertainment: Musicals & Theatres', value: '13' },
    { label: 'Entertainment: Television', value: '14' },
    { label: 'Entertainment: Video Games', value: '15' },
    { label: 'Entertainment: Board Games', value: '16' },
    { label: 'Science & Nature', value: '17' },
    { label: 'Science: Computers', value: '18' },
    { label: 'Science: Mathematics', value: '19' },
    { label: 'Mythology', value: '20' },
    { label: 'Sports', value: '21' },
    { label: 'Geography', value: '22' },
    { label: 'History', value: '23' },
    { label: 'Politics', value: '24' },
    { label: 'Art', value: '25' },
    { label: 'Celebrities', value: '26' },
    { label: 'Animals', value: '27' },
    { label: 'Vehicles', value: '28' },
    { label: 'Entertainment: Comics', value: '29' },
    { label: 'Science: Gadgets', value: '30' },
    { label: 'Entertainment: Japanese Anime & Manga', value: '31' },
    { label: 'Entertainment: Cartoon & Animations', value: '32' },
  ];
  difficultyOptions: { label: string; value: string }[] = [
    { label: 'Any Difficulty', value: '' },
    { label: 'Facile', value: 'easy' },
    { label: 'Moyen', value: 'medium' },
    { label: 'Difficile', value: 'hard' },
  ];

  selectedType: string = '';
  selectedDifficulty: string = '';
  amount: number = 0;

  userData: { firstname: string; lastname: string } = {
    firstname: '',
    lastname: '',
  };
  constructor(
    private quizzService: QuizzService,
    private apiService: ApiService
  ) {
    this.userData = this.quizzService.getUserData;
  }

  async onSubmit(event: Event): Promise<void> {
    event.preventDefault();

    if (
      this.selectedDifficulty !== '' ||
      this.selectedType !== '' ||
      this.amount >= 5 ||
      this.amount <= 20
    ) {
      const response = await firstValueFrom(
        this.apiService.get({
          amount: this.amount,
          category: this.selectedType,
          difficulty: this.selectedDifficulty,
        })
      );

      if (response.response_code === 0) {
        const results = response.results;
        const questions: Question[] = results.map(
          (item: {
            question: string;
            correct_answer: string;
            incorrect_answers: string[];
          }) => ({
            question: atob(item.question),
            options: [
              ...item.incorrect_answers.map(atob),
              atob(item.correct_answer),
            ],
            correctAnswer: atob(item.correct_answer),
          })
        );
        this.quizzService.setQuestions(questions);
        this.quizzService.nextStep();
      } else {
        console.log('Error');
      }
    }
  }

  onPrevious(): void {
    this.quizzService.previousStep();
  }
}
