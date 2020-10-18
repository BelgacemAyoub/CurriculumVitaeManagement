import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PremierService } from '../premier.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
  providers: [PremierService]
})
export class ColorComponent implements OnInit {

  color = 'red';

  constructor(private premierService: PremierService,
              private router: Router,
              private activatedRoute: ActivatedRoute
              ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe (    // activatedRoute: permet de récupérer les paramètres de la root
        (params ) => {
        this.color = params['default'];
        
      }
    );
    
  }

  loggerMesData () {

    this.premierService.logger("test");
    
  }

  goToCv() {
    const link = ['cv'];
    this.router.navigate(link);
  }

}
