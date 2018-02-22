import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../movie.service';
import { UserService } from '../user.service';
import { Movie } from '../movie/movie';
import { AllMoviesComponent } from '../all-movies/all-movies.component';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { User } from '../user';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.css']
})
export class MyMoviesComponent implements OnInit, OnChanges {
  myMovies: Movie[];
  title: string;
  users: User[];    
  // allMovies: any[];

  // movie: Movie;
  // // @Input() movie: Movie;
  // @Output() movieRemoved: EventEmitter<Movie> = new EventEmitter();
  constructor(private movieService: MovieService, private userService: UserService) {}

  ngOnInit() {

    this.title = 'My Movies';
    this.myMovies = this.userService.getMyMovies();
    this.users = this.userService.getUser();
    // this.allMovies = this.movieService.getAllMovies();

    // this.userService.addMovie(movie)
    // .subscribe(movie => {
    //   this.movie = movie;
    //   console.log(movie);
    // });
  }


 get budget() {
  return this.userService.getBudget();
 }
 
  ngOnChanges() {
  return this.userService.getBudget();

  }

  removeMovie(movie, id) {
  return this.userService.removeMovie(movie, id);

  }

}
