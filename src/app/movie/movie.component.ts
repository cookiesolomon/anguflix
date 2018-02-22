import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Movie } from "./movie";
import { UserService } from "../user.service";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"]
})
export class MovieComponent implements OnInit {
  //   allMovies: Array<Movie>;
  //   myMovies: any[];
  movies: Movie[];
  @Input() movie: Movie = new Movie();
  @Input() btnText: string;
  @Output() movieButtonClick: EventEmitter<Movie> = new EventEmitter<Movie>();
  @Output() imgButtonClick: EventEmitter<Movie> = new EventEmitter<Movie>();
  constructor(private userService: UserService) {}

  ngOnInit() {
    console.log(this.movie);
  }

  clickFunc() {
    this.movieButtonClick.emit(this.movie);
  }

 imgClick(){

   this.imgButtonClick.emit(this.movie);
 }
}