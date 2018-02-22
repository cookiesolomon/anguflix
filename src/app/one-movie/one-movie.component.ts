import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { MovieService } from '../movie.service';
import { Movie } from '../movie/movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-movie',
  templateUrl: './one-movie.component.html',
  styleUrls: ['./one-movie.component.css']
})

export class OneMovieComponent {
  movie: Movie = new Movie(); 

  // nginit with a get call to server (from server)....get obs and subscribe to obs
  constructor(
    private movieService: MovieService,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  viewMovie(id, movie) {
    // this.movie = this.userService.addMovie(movie);
    this.movieService.viewMovie(id, movie);
  }
}
