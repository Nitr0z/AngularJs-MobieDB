import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie-interface';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  api_key = "52e92e0532d42a49bfd344b5cdc123e8";
  language = "fr-FR";
  url = "https://api.themoviedb.org/3/movie/455551/recommendations?api_key=" + this.api_key + "&language=" + this.language + "&page=1";
  constructor(private http: HttpClient) {
  }
 
  getAll(): Observable<Movie> {
    return this.http.get<Movie>((this.url));
  }
}
