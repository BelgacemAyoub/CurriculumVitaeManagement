import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent implements OnInit {

  @Input() pers  : Personne;
  @Output() sendRequestToData0 = new EventEmitter ();
  constructor() { }

  ngOnInit(): void {
  }

  selectPersonne(){
    // Todo emmetre un evenement et y injecter la personne
    this.sendRequestToData0.emit(this.pers); 
  }

}
