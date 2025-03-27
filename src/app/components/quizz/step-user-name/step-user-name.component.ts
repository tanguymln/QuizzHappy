import { QuizzService } from './../../../../service/quizz.service';
import { Component, HostListener } from '@angular/core';
import { TextInputComponent } from '../../ui/text-input/text-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../ui/button/button.component';

@Component({
  selector: 'app-step-user-name',
  imports: [CommonModule, TextInputComponent, ButtonComponent, FormsModule],
  templateUrl: './step-user-name.component.html',
  styleUrl: './step-user-name.component.css',
})
export class StepUserNameComponent {
  firstname: string = '';
  lastname: string = '';
  errorMessage: string = '';

  isLargeScreen = window.innerWidth >= 768;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isLargeScreen = event.target.innerWidth >= 768;
  }

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
