import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class SelectComponent {
  @Input() options: { label: string; value: string }[] = [];
  @Input() label: string = '';
  @Output() selectionChange = new EventEmitter<string>();

  selectedValue: string = '';

  onSelectChange() {
    this.selectionChange.emit(this.selectedValue);
  }
}
