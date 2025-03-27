import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  difficulty: string;
}

@Injectable({
  providedIn: 'root',
})
export class QuizzService {
  userData: { firstname: string; lastname: string } = {
    firstname: '',
    lastname: '',
  };
  quizParameters: {
    numberOfQuestions: number;
    categoryType: string;
    difficulty: string;
  } = {
    numberOfQuestions: 5,
    categoryType: '',
    difficulty: '',
  };
  questions: Question[] = [];
  userAnswers: string[] = [];
  currentQuestionIndex: number = 1;
  currentStep: number = 1;
  score: number = 0;

  private stepSubject = new BehaviorSubject<number>(this.currentStep);
  public step$ = this.stepSubject.asObservable();

  public get getUserData(): { firstname: string; lastname: string } {
    return this.userData;
  }

  public nextStep(): void {
    if (this.currentStep <= 4) {
      this.currentStep++;
      this.stepSubject.next(this.currentStep);
    }
  }

  public previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
      this.stepSubject.next(this.currentStep);
    }
  }

  public setUserData(
    firstname: string,
    lastname: string
  ): { firstname: string; lastname: string } {
    this.userData = { firstname, lastname };
    return this.userData;
  }

  public setQuizzParameter(
    numberOfQuestions: number,
    categoryType: string,
    difficulty: string
  ): { numberOfQuestions: number; categoryType: string; difficulty: string } {
    this.quizParameters = { numberOfQuestions, categoryType, difficulty };
    return this.quizParameters;
  }

  public setCurrentQuestionIndex(index: number): number {
    this.currentQuestionIndex = index;
    return this.currentQuestionIndex;
  }

  public setQuestions(questions: Question[]): Question[] {
    this.questions = questions;
    return this.questions;
  }

  public get getCurrentStep(): number {
    return this.currentStep;
  }

  public get getCurrentQuestionIndex(): number {
    return this.currentQuestionIndex;
  }

  public get getNumberOfQuestions(): number {
    return this.quizParameters.numberOfQuestions;
  }

  public get getQuestions(): Question[] {
    return this.questions;
  }

  public get incrementScore(): number {
    this.score += 1;
    return this.score;
  }

  public get getScore(): number {
    return this.score;
  }

  public resetQuizz(): void {
    this.userData = { firstname: '', lastname: '' };
    this.quizParameters = {
      numberOfQuestions: 5,
      categoryType: '',
      difficulty: '',
    };
    this.questions = [];
    this.userAnswers = [];
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.currentStep = 1;
    this.stepSubject.next(this.currentStep);
  }
}
