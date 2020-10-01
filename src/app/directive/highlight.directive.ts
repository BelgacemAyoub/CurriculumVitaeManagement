import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  // créer sa propre « attribut directive » il faut utiliser un HostBinding sur la propriété que vous voulez binder. 
  @HostBinding ('style.backgroundColor') bg = 'red';  // je associ ce style.background à une propriété qui est bg 

  constructor() { }

  @HostListener('mouseenter') mouseenter() {   // @HostListener : Décorateur qui déclare un événement DOM à écouter et fournit une méthode de gestionnaire à exécuter lorsque cet événement se produit.

    this.bg = 'yellow';             
  }
  @HostListener('mouseleave') mouseleave() {               
    this.bg = 'red';
  }

}
