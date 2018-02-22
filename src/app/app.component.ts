import { Component } from '@angular/core';
import { MovieService } from './movie.service';
import { UserService } from './user.service';
import { Movie } from './movie/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AnguFlix';
  // allMovies = this.movieService.getAllMovies();
  // myMovies = this.userService.getMyMovies();
  constructor(private movieService: MovieService, private userService: UserService) {}
}
