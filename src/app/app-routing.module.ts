import { MovieComponent } from './movie/movie.component';
import { DetailsComponent } from './details/details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'list',
    component: MovieComponent
  },
  {
    path: 'app-details/:id',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
