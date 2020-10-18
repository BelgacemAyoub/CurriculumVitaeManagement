import { Component, Input, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';
import { PremierService } from 'src/app/premier.service';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  personnes: Personne [];  // ensemble de personnes
  sendRequestToData2   : Personne;
  /* constructor(private premierService : PremierService) { } */
     constructor(private cvService : CvService) {}

  ngOnInit(): void {

    this.personnes = this.cvService.getPersonne();
    
    /* = [
      new Personne ( 1, 'ayoub', 'belgacem', 30, 'Ayoub.jpg', 55655555, 'Ingénieur'),
      new Personne ( 2, 'steve', 'jobs', 56 , 'stevejobs.jpg', 69887779, 'Fondateur d Apple'),
      new Personne ( 3, 'test', 'test', 40 , '', 22222222, 'test'),
    ]; */

    // this.premierService.addData ('data from cv component');
    // this.premierService.logger(this.personnes);
    
  }

  sendRequest(perso) { 
    this.sendRequestToData2 = perso;
   // console.log(perso);
    
  }


}
