import { Injectable } from '@angular/core';
import { Personne } from '../Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  private personnes : Personne[];  // liste des personnes embaucher 

  constructor() { 
    this.personnes = [] // aucune personne embaucher (par défaut)
  }

  getEmbauhees() :Personne []   {
    return this.personnes;  
  }

  embaucher (personne: Personne) : void {

    const index = this.personnes.indexOf(personne);
    
    if (index < 0) {
      this.personnes.push(personne);
    } else
      alert(`${personne.name} est déjà selectionneé`);

  }

  debaucher (personne : Personne): void {
    const index = this.personnes.indexOf(personne);
    if (index >= 0) {
      this.personnes.splice(index, 1);
    }
  }
}
