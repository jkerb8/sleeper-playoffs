import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from '../../modules/material-module/material-module.module';
import { LeaderboardType } from '../../models/config';

@Component({
  selector: 'app-home',
  imports: [MaterialModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  readonly LeaderboardType = LeaderboardType;

  constructor(
    private router: Router
  ) {}

  gotoLeaderboard(type: LeaderboardType) {
    this.router.navigate([`/leaderboard/${type}`]);
  }

  
}
