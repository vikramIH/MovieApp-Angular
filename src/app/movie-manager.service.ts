import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMovie } from './movie';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/toPromise';
//import { findIndex } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class MovieManagerService {

  private moviesUrl: string = "http://localhost:8080/api/v1/movies";
  private addUrl: string = "http://localhost:8080/api/v1/movie";
  private updateUrl: string = "http://localhost:8080/api/v1/movie/";

  deleteUrl: string;
  movieByIdUrl: string;
  private headers = new Headers({'Content-Type' : 'application/json'});
  constructor( private http: HttpClient) {}
   
  movieObj : object = {};

   getMovies(): Observable<IMovie[]> {
      return this.http.get<IMovie[]>(this.moviesUrl);
   }

   getMovieById( inputId : number ): Observable<IMovie[]> {
      this.movieByIdUrl = "http://localhost:8080/api/v1/movieId/"+ inputId;
      return this.http.get<IMovie[]>(this.movieByIdUrl);
   }

   addNewMovie(movie) {
     this.movieObj = {
       "id"       : movie.id,
       "title"    : movie.title,
       "year"     : movie.year,
       "genre"    : movie.genre,
       "director" : movie.director
     }
      return this.http.post( this.addUrl, this.movieObj );
   }
   
   deleteMovie(id) {
    console.log(id);
     this.deleteUrl = "http://localhost:8080/api/v1/movie/" + id;
     console.log(this.deleteUrl);
     this.http.delete( this.deleteUrl )
              .toPromise().then( () => {this.getMovies();});
   }

   updateMovie ( movie, id ) {
    this.movieObj = {
      "id"       : movie.id,
      "title"    : movie.title,
      "year"     : movie.year,
      "genre"    : movie.genre,
      "director" : movie.director
    }
     return this.http.put( this.updateUrl + id , this.movieObj );
   } 

   getPostFromOmdb(title:String): Observable<any> {
    return this.http.get(`http://www.omdbapi.com/?t=${title}&apikey=ab6640cf`);
  }
  

}
