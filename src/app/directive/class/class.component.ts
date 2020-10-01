import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  teams = [
    'Ca',
    'Barca',
    'Om',
    'River'
  ]

  yes = false;

  Ca = false;
  Barca = true;
  Milan = false;
 
  constructor() { }

  ngOnInit(): void {
  }

  changeTeam () {
    this.Ca = true;
    this.Barca = false;
    this.Milan = false;
  }}
