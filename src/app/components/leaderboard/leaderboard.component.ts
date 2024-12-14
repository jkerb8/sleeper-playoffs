import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MaterialModule } from '../../modules/material-module/material-module.module';
import * as _ from 'lodash';
import { SleeperService } from '../../services/sleeper.service';
import { User } from '../../models/user';
import { bottomUserids, LeaderboardType, playoffUserids, playoffWeeks } from '../../models/config';
import { Roster } from '../../models/roster';
import { Matchup } from '../../models/matchup';



@Component({
  selector: 'app-leaderboard',
  imports: [MaterialModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css'
})
export class LeaderboardComponent implements OnInit {
  
  type: LeaderboardType = LeaderboardType.top;
  users: User[] = [];
  loading: boolean = false;

  readonly LeaderboardType = LeaderboardType;

  constructor(
    private sleeperService: SleeperService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.type = this.activatedRoute.snapshot.params['type'] ?? LeaderboardType.all;
    this.getAllData();
  }
  
  gotoHome() {
    this.router.navigate(['']);
  }

  getAllData() {
    this.loading = true;
    Promise.all([
      this.sleeperService.getUsers(),
      this.sleeperService.getRosters()
    ])
    .then(([users, rosters]) => {
      this.users = users ?? [];
      _.forEach(this.users, user => {
        user.roster = _.find(rosters ?? [], (roster: Roster) => roster.owner_id === user.user_id);
      });
      if (this.type === LeaderboardType.top) {
        this.users = _.filter(this.users, user => _.includes(playoffUserids, user.user_id));
      }
      else if (this.type === LeaderboardType.bottom) {
        this.users = _.filter(this.users, user => _.includes(bottomUserids, user.user_id));
      }
      return this.getMatchupData();
    })
    .catch(err => console.log(err))
    .finally(() => this.loading = false);
  }

  getMatchupData() {
    this.loading = true;
    const promises: Promise<Matchup[]>[] = [];
    _.forEach(playoffWeeks, week => {
      promises.push(this.sleeperService.getMatchups(week));
    });
    return Promise.all(promises)
    .then(matchupArray => {
      if (matchupArray.length >= playoffWeeks.length) {
        _.forEach(this.users, user => {
          user.matchupData = [];
        });
        _.forEach(playoffWeeks, (week, index) => {
          const weekMatchups: Matchup[] = matchupArray[index];
          _.forEach(this.users, user => {
            user.matchupData ??= [];
            if (user?.roster?.roster_id) {
              const matchup = _.find(weekMatchups, {roster_id: user.roster?.roster_id});
              if (matchup) user.matchupData.push({week, matchup});
            }
          });
        })
      }

      _.forEach(this.users, user => {
        user.totalPoints = 0;
        _.forEach(user.matchupData ?? [], matchupObj => {
          user.totalPoints ??= 0;
          user.totalPoints += (matchupObj.matchup.custom_points ?? matchupObj.matchup.points ?? 0);
        });
      });
      this.users = _.orderBy(this.users, 'totalPoints', 'desc');
      _.remove(this.users, user => !user.matchupData?.length);
    })
    .catch(err => console.log(err))
    .finally(() => this.loading = false);
  }

}
