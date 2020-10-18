import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from 'src/app/Model/Personne';
import { EmbaucheService } from '../embauche.service';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {

 @Input() person : Personne;

  constructor( private embaucheSrvice: EmbaucheService, 
               private router : Router ) { }

  ngOnInit(): void {
  }

  EmbauchePersonne() {
    this.embaucheSrvice.embaucher(this.person);
  }

  moreInfo() {
    const link = ['cv' , this.person.id];
    this.router.navigate(link);
  }

}
