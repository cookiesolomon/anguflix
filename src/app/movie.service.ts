import { Injectable } from '@angular/core';
import { Movie } from './movie/movie';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class MovieService {
allMovies: Array<Movie>;
str: string;

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]> ('https://anguflix-api.herokuapp.com/api/movies');
  }

  // viewMovie(id, movie) {
  // }

  searchMovies(str) {
    console.log(str);
    return this.http.get('https://anguflix-api.herokuapp.com/api/movies?title=' + str);
  }
}
