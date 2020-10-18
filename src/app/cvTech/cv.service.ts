import { Injectable } from '@angular/core';
import { Personne } from '../Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private personnes: Personne [];

  constructor() {

    this.personnes = [
      new Personne ( 1, 'ayoub', 'belgacem', 30, 'Ayoub.jpg', 55655555, 'Ingénieur'),
      new Personne ( 2, 'steve', 'jobs', 56 , 'stevejobs.jpg', 69887779, 'Fondateur d Apple'),
      new Personne ( 3, 'test', 'test', 40 , '', 22222222, 'test'),
  ];
   }
    getPersonne() : Personne[] {  
      return this.personnes;
    }

    getPersonneById(id$: number): Personne {
    const personne = this.personnes.find(personne => {
      return personne.id == id$
    });
    return personne;
   
} }
