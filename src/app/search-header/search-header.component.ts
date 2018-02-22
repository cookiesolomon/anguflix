import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { FilterPipe } from '../filter.pipe';
import { UserService} from '../user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.css']
})
export class SearchHeaderComponent implements OnInit {
title: string;
searchText: string;
str: string;
  constructor(private movieService: MovieService, private userService: UserService) { }

  get budget() {
    return this.userService.getBudget();
  }

  ngOnInit() {
    this.title = 'Search Collection';

    this.userService.budget = 0;
  }

  searchMovies(str){
    console.log(this.str);
    return this.movieService.searchMovies(str);

  }

}
