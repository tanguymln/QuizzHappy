import { Injectable } from '@angular/core';

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

  public get getUserData(): { firstname: string; lastname: string } {
    return this.userData;
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
