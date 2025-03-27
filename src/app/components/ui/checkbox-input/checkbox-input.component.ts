import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkbox-input',
  templateUrl: './checkbox-input.component.html',
  styleUrl: './checkbox-input.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class CheckboxInputComponent {
  @Input() label: string = '';
  @Input() name: string = '';
  @Input() options: string[] = [];
  @Input() correctAnswer: string = '';
  @Input() isAnswer: boolean = false;

  @Output() selectedValueChange = new EventEmitter<string[]>();

  selectedValues: string[] = [];

  onSelectChange(option: string) {
    if (this.selectedValues.includes(option)) {
      this.selectedValues = this.selectedValues.filter((val) => val !== option);
    } else {
      this.selectedValues.push(option);
    }
    this.selectedValueChange.emit(this.selectedValues);
  }

  getOptionClass(option: string) {
    if (!this.isAnswer) return 'border-cyan-700';

    if (option === this.correctAnswer) {
      return 'border-green-500';
    }

    return 'border-red-500';
  }
}
