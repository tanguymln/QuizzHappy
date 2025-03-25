import { QuizzService } from './../../../../service/quizz.service';
import { Component } from '@angular/core';
import { TextInputComponent } from '../../ui/text-input/text-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../ui/button/button.component';
import { RadioInputComponent } from '../../ui/radio-input/radio-input.component';

@Component({
  selector: 'app-step-user-name',
  imports: [
    CommonModule,
    TextInputComponent,
    ButtonComponent,
    RadioInputComponent,
    FormsModule,
  ],
  templateUrl: './step-user-name.component.html',
  styleUrl: './step-user-name.component.css',
})
export class StepUserNameComponent {
  firstname: string = '';
  lastname: string = '';
  errorMessage: string = '';

  constructor(private quizzService: QuizzService) {}

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.firstname !== '' && this.lastname !== '') {
      this.quizzService.setUserData(this.firstname, this.lastname);
      this.quizzService.nextStep();
    } else {
      this.errorMessage = 'Veuillez remplir tous les champs';
    }
  }
}
