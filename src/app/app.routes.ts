import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';


export const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'leaderboard', component: LeaderboardComponent},
	{path: 'leaderboard/:type', component: LeaderboardComponent},
];
