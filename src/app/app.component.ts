import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StepUserNameComponent } from './components/quizz/step-user-name/step-user-name.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StepUserNameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Quizz Happy';
}
