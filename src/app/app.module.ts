import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { MovieComponent } from './movie/movie.component';
import { MyMoviesComponent } from './my-movies/my-movies.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { SearchHeaderComponent } from './search-header/search-header.component';
import { MovieService } from './movie.service';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './/app-routing.module';
import { OneMovieComponent } from './one-movie/one-movie.component';



@NgModule({
  declarations: [
    AppComponent,
    MyMoviesComponent,
    AllMoviesComponent,
    SearchHeaderComponent,
    FilterPipe,
    OneMovieComponent,
    MovieComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [MovieService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
