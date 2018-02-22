import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie/movie';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { FilterPipe } from '../filter.pipe';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { User } from '../user';

 @Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
 allMovies: Movie[];
  title: string;
 searchText: string;
 user: User = new User();
 @Output() movieAdded: EventEmitter<Movie> = new EventEmitter();
 constructor(private movieService: MovieService, private userService: UserService, private http: HttpClient) { }


 ngOnInit() { 
  this.user = this.userService.getUser();
  this.title = 'All Movies';
  this.movieService.getAllMovies()
  .subscribe(data => {
    this.allMovies = data;
    console.log(data);
  });
}

addMovie(movie: Movie) {
      // this.movieAdded.emit(movie);
      return this.userService.addMovie(movie);

  }

  // viewMovie(id, movie){
  //   console.log(this.allMovies);
  //   return this.movieService.viewMovie(id, movie);
  // }
}
