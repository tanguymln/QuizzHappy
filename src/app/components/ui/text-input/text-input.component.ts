import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class TextInputComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() name: string = '';
  @Input() value: string = ''; // La valeur de l'input

  @Output() valueChange = new EventEmitter<string>(); // EventEmitter pour émettre la nouvelle valeur

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.valueChange.emit(input.value); // Émettre la nouvelle valeur au parent
  }
}
