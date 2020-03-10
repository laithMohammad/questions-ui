import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-component',
  templateUrl: './question-component.component.html',
  styleUrls: ['./question-component.component.css']
})
export class QuestionComponentComponent implements OnInit {

  questionTitle: string;
  questionContent: string;
  userAsked: string;
  votes: number;
  answers: any[];
  arrow: string;
  answersOptionCaption: string;

  constructor() { }

  ngOnInit(): void {
    this.questionTitle = 'What is Mont. problem ? ';
    this.questionContent = 'Mont Always Crying, Sleeping, and Na5meeshting, what shall i do ?';
    this.userAsked = 'Laith Abat';
    this.votes = 10;
    this.arrow = 'down';
    this.answersOptionCaption = 'View';
    this.answers = [
      {user: 1, content: 'Nothing!!!', votes: 10},
      {user: 1, content: 'Go Home!!!', votes: 100},
      {user: 1, content: 'Give him Money, then go home!!!', votes: 1000}
    ];
  }

  showAnswers() {
    this.answersOptionCaption = (this.answersOptionCaption === 'Hide') ? 'View' : 'Hide' ;
    this.arrow = (this.arrow === 'up') ? 'down' : 'up';
  }
}
