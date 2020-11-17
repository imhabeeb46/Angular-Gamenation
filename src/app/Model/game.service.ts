import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GameService {
  private url = 'https://rawg-video-games-database.p.rapidapi.com/games';
  allGamesList: any;
  constructor(private http: HttpClient) { }

  // headerOptions
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-rapidapi-key': '305afaa970msh48289e710803370p15a709jsn88bd3bbc68c6'
    })
  };

  getAllGames(): Observable<any> {
    return this.http.get(this.url, this.httpOptions);
  }
}
