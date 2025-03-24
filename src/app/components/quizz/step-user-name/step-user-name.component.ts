import { Component } from '@angular/core';
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

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log('onSubmit appelé');
    console.log('Nom:', this.lastname, 'Prénom:', this.firstname);
  }

  // on appelle le service pour enregistrer le nom et prénom
}
