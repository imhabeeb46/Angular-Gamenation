import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GameService } from './../../Model/game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
  gameId: any;
  gameDetails: any;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    this.gameId = this.activatedRoute.snapshot.paramMap.get('id');
    this.getGameDetails(this.gameId);
  }

  getGameDetails(gameId): void {
    if (!this.gameService.allGamesList) {
      console.log('Some issue with GameDetails');
      console.error('GameDetails', this.gameService.allGamesList);
    }
    gameId && this.gameService.allGamesList
      ? this.fetchCurrentGameData()
      : this.router.navigate(['/home']);
  }

  fetchCurrentGameData(): void {
    this.gameDetails = this.gameService.allGamesList.find(
      // tslint:disable-next-line:radix
      (res) => res.id === parseInt(this.gameId)
    );
  }

  redirectToStore(url): void {
    const storeUrl = url;
    window.open(storeUrl, '_blank');
  }
}
