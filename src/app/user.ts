import { Movie } from './movie/movie';

export class User {
  id: number;
  name: string;
  budget: number;
  myMovies: Movie[];

  constructor(budget: number=0, name: string="anonymous") {
    this.budget = budget ;
    this.name = name ;
    this.myMovies = [];
  }
}