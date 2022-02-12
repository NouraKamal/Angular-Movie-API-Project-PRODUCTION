import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }
  getTerndinding(mediaType:string):Observable<any>{
    return this ._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=298a9d7e45243c18797ec4d6fe3de417`)
  }
  getMovieDetails(id:string):Observable<any>{
    return this ._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=298a9d7e45243c18797ec4d6fe3de417&language=en-US`)
  }
}
