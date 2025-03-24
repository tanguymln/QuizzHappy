import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

@Injectable({
  providedIn: 'root',
})
export class QuizzService {
  userData: { firstname: string; lastname: string } = {
    firstname: '',
    lastname: '',
  };
  quizParameters: { numberOfQuestions: number } = { numberOfQuestions: 5 };
  questions: Question[] = [];
  userAnswers: string[] = [];
  currentQuestionIndex: number = 0;
  score: number = 0;
  currentStep: number = 1;

  private stepSubject = new BehaviorSubject<number>(this.currentStep);
  public step$ = this.stepSubject.asObservable();

  public get getUserData(): { firstname: string; lastname: string } {
    return this.userData;
  }

  public nextStep(): void {
    this.currentStep++;
    this.stepSubject.next(this.currentStep);
  }

  public setUserData(
    firstname: string,
    lastname: string
  ): { firstname: string; lastname: string } {
    this.userData = { firstname, lastname };
    return this.userData;
  }

  public get getCurrentStep(): number {
    return this.currentStep;
  }

  public resetQuiz(): void {
    this.userData = { firstname: '', lastname: '' };
    this.quizParameters = { numberOfQuestions: 5 };
    this.questions = [];
    this.userAnswers = [];
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.currentStep = 1;
  }
}
