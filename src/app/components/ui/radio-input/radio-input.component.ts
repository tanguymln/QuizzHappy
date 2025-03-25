import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-radio-input',
  templateUrl: './radio-input.component.html',
  styleUrl: './radio-input.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class RadioInputComponent {
  @Input() label: string = '';
  @Input() name: string = '';
  @Input() options: string[] = [];
  @Input() correctAnswer: string = '';
  @Input() isAnswer: boolean = false;

  @Output() selectedValueChange = new EventEmitter<string>();

  selectedValue: string = '';
  onSelectChange() {
    this.selectedValueChange.emit(this.selectedValue);
  }

  getOptionClass(option: string) {
    if (!this.isAnswer) return 'border-cyan-700';

    if (option === this.correctAnswer) {
      return 'border-green-500';
    }

    if (option === this.selectedValue && option !== this.correctAnswer) {
      return 'border-red-500';
    }

    return 'border-cyan-700';
  }
}
