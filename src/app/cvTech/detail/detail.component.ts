import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/Model/Personne';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  personne: Personne;
  constructor( private cvService : CvService,
               private activatedRouter : ActivatedRoute
                         ) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe (
      (params) => {
        console.log(params.id);
        
      this.personne = this.cvService.getPersonneById(params.id);
      console.log(this.personne);
      
      }
    );
  }


}
