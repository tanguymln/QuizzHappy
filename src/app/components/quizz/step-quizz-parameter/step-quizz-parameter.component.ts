import { CommonModule } from '@angular/common';
import { QuizzService } from './../../../../service/quizz.service';

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../ui/button/button.component';
import { TextInputComponent } from '../../ui/text-input/text-input.component';
import { NumberInputComponent } from '../../ui/number-input/number-input.component';
import { SelectComponent } from '../../ui/select/select.component';

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
  amount: number = 0;

  typeOptions: string[] = ['Type A', 'Type B', 'Type C'];
  difficultyOptions: string[] = ['Facile', 'Moyen', 'Difficile'];

  selectedType: string = '';
  selectedDifficulty: string = '';

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log('Type sélectionné :', this.selectedType);
    console.log('Difficulté sélectionnée :', this.selectedDifficulty);
    console.log('Nombre de questions :', this.amount);
  }
}
