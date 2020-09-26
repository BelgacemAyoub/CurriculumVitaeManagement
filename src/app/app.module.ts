import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { DetailCvComponent } from './cvTech/detail-cv/detail-cv.component';
import { ItemCvComponent } from './cvTech/item-cv/item-cv.component';
import { ListeCvComponent } from './cvTech/liste-cv/liste-cv.component';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    DetailCvComponent,
    ItemCvComponent,
    ListeCvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
