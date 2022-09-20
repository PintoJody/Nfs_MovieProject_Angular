import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  title = 'Détails';
  detailMovie:any;
  id:any;

  constructor(private movieS:MovieService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.movieS.getDetail(this.id).subscribe((data:any) => {
      this.detailMovie = data;
      console.log(data);
    })
  }

}
