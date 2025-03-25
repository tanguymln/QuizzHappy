import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-number-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.css'],
  standalone: true,
})
export class NumberInputComponent {
  @Input() label: string = '';
  @Input() value: number = 5;
  @Input() minValue: string = '1';
  @Input() maxValue: string = '100';

  @Output() valueChange = new EventEmitter<number>();

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.valueChange.emit(Number(input.value));
  }
}
