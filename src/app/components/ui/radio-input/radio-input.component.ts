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
  @Input() options: { label: string; value: string }[] = [];

  @Output() selectedValueChange = new EventEmitter<string>();

  selectedValue: string = '';
  onSelectChange() {
    this.selectedValueChange.emit(this.selectedValue);
  }
}
