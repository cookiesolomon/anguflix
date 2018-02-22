import { Injectable } from '@angular/core';
import { Movie } from './movie/movie';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
 

@Injectable()
export class UserService {
  private user: User = new User(0, "Cookie");

  constructor(private http: HttpClient) {}

  addMovie(movie) {
    if (!this.movieExists(movie)) { 
      this.user.myMovies.push(movie);
      this.user.budget += movie.price;
    }
  }
  movieExists(movie: Movie): boolean {

    const index = this.user.myMovies.findIndex(item => item._id === movie._id);
    return index > -1;
  }

  removeMovie(movie, id) {
    this.user.budget -= movie.price;
    console.log(this.user.budget);
    this.user.myMovies.splice(id, 1);
    // this.allMovies.push(movie);
  }


  getMyMovies() {
    return this.user.myMovies;
  }

  // getBudget() {
  //   return this.user.budget;
  // }

 getUser() {
 return this.user;
 }
}
