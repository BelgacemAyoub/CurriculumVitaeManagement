import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorComponent } from './color/color.component';
import { AddCvComponent } from './cvTech/add-cv/add-cv.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { DeleteCvComponent } from './cvTech/delete-cv/delete-cv.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path : 'cv', children: [     // le component CvComponent afficher par défaut
      {
        path : '', component: CvComponent,
      },
      {
        path: 'delete/:id' , component: DeleteCvComponent,
      },
      {
        path: 'add' , component: AddCvComponent,
      },
      {
        path: ':id' , component: DetailComponent
      },

    ]},
  

  // {
  //   path: 'cv', redirectTo: '/', pathMatch:'full', 
  // },
  {
    path : '', component: CvComponent,
  },
  {
    path : 'color/:default', component: ColorComponent,
  },
  {
    path : 'login', component: LoginComponent,
  },
  {
    path : '**', component: ErrorComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
