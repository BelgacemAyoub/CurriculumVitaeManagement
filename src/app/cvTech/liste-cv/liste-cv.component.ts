import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';

@Component({
  selector: 'app-liste-cv',
  templateUrl: './liste-cv.component.html',
  styleUrls: ['./liste-cv.component.css']
})
export class ListeCvComponent implements OnInit {

  @Input() personnes: Personne[];
  @Output() sendRequestToData1 = new EventEmitter();
  pers : Personne [];

  constructor() { }

  ngOnInit(): void {
  }

  selectPers (per) {
    this.sendRequestToData1.emit(per);
  }

  // selectPersonne1() {
  //   this.sendRequestToData2.emit(this.pers);
  // }

}
