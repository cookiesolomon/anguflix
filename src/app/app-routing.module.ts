import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OneMovieComponent } from './one-movie/one-movie.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { MyMoviesComponent } from './my-movies/my-movies.component';

const routes: Routes = [
  { path: '', component: AllMoviesComponent},
  { path: 'movie', component: OneMovieComponent},
  { path: 'my-movies', component: MyMoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
