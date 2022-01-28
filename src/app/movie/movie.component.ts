import { Component, OnInit } from '@angular/core';
import { Movie, Result } from '../movie-interface';
import { MoviesService } from '../movie.service';
 
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
 
  movies: Array <Result> = [];
 
  constructor(private movieService: MoviesService) { }
  ngOnInit(): void {
      this.movieService.getAll().subscribe(res => {
        console.log(res);
        this.movies = res.results;
      });
  }
 
}
