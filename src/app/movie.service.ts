import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url = 'https://api.themoviedb.org/3/';
  apiKey = "?api_key=4e039b4ce58370b07f5af5036fee8c65";

  constructor(private http:HttpClient) { }

  getMovies(){
    return this.http.get(this.url + 'discover/movie' + this.apiKey);
  }

  getDetail(id:number){
    return this.http.get(this.url + 'movie/' + id + this.apiKey);
  }

}
