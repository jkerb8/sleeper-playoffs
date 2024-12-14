import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import {throwError as observableThrowError, lastValueFrom } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { leagueId } from '../models/config';
import { Roster } from '../models/roster';
import { Matchup } from '../models/matchup';

@Injectable({
  providedIn: 'root'
})
export class SleeperService {

	private readonly baseUrl: string = 'https://api.sleeper.app/v1/';

  constructor(
    private http: HttpClient
  ) { }
	

  getUsers(): Promise<User[]> {
    const url = `${this.baseUrl}league/${leagueId}/users`;

    return lastValueFrom(this.http.get<User[]>(url, { }).pipe(
      map(res => res),
      catchError(err => {
        console.log(err);
        return observableThrowError(err.message);
      }),));
  }

  getRosters(): Promise<Roster[]> {
    const url = `${this.baseUrl}league/${leagueId}/rosters`;

    return lastValueFrom(this.http.get<Roster[]>(url, { }).pipe(
      map(res => res),
      catchError(err => {
        console.log(err);
        return observableThrowError(err.message);
      }),));
  }

  getMatchups(week: number): Promise<Matchup[]> {
    const url = `${this.baseUrl}league/${leagueId}/matchups/${week}`;

    return lastValueFrom(this.http.get<Matchup[]>(url, { }).pipe(
      map(res => res),
      catchError(err => {
        console.log(err);
        return observableThrowError(err.message);
      }),));
  }
}