import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from './../../Model/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  loop: any;
  gamesList: any;
  isLoading = false;
  constructor(private router: Router, private gameService: GameService) {}

  ngOnInit(): void {
    this.loop = Array(20);
    this.gameService.getAllGames();
    this.getGameList();
  }

  getGameList(): void {
    this.isLoading = true;
    this.gameService.getAllGames().subscribe((res) => {
      this.gameService.allGamesList = res.results;
      this.gamesList = this.gameService.allGamesList;
      this.isLoading = false;
    });
  }

  viewGame(id): void {
    const gameId = id;
    this.router.navigate(['/game/' + gameId]);
  }
}
