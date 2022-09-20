import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  title = 'Liste de film';
  listMovies:any;

  constructor(private movieS:MovieService) { }

  getListMovies(){}

  getListMoviesDesc(){
    this.movieS.getMovies().subscribe((data:any) => {
      this.listMovies = data.results;
      this.listMovies = this.listMovies.sort((a: any, b: any) => {
        return <any>new Date(b.release_date) - <any>new Date(a.release_date);
      });
    })
  }

  ngOnInit(): void {
    this.getListMoviesDesc();
  }

}
