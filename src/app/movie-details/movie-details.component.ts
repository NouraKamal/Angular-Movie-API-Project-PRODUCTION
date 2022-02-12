import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
id:string="";
imgPerfix:string="https://image.tmdb.org/t/p/w500/"
movieDetails:any={};
  constructor(private _ActivatedRoute:ActivatedRoute,private _MoviesService:MoviesService) { 
    this.id=_ActivatedRoute.snapshot.params.id
    _MoviesService.getMovieDetails(this.id).subscribe((data)=>{
this.movieDetails=data;
    })
  }

  ngOnInit(): void {
  }

}
