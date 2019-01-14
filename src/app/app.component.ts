import { Component } from '@angular/core';

import { SearchQueryService } from './searchQuery.service';
import { Matches } from './Classes/matches';
import { Teams } from './Classes/teams';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  leaguesData : any[] = [];
  matchesData : any[] = [];
  teamsData : any[] = [];
  title = '';

  constructor(private searchQueryService: SearchQueryService) { }

  public search($event) {
    console.log('in parent in search', this.leaguesData);
    console.log('in parent in search', this.matchesData);
    console.log('in parent in search', this.teamsData);
    switch ($event) {
      case 'league':
        this.searchQueryService.getLeagues()
          .subscribe((res : any[]) => {
            console.log(res);
            this.leaguesData = res;
          });
        break;
      case 'today':
        this.searchQueryService.getMatches()
          .subscribe((res : Matches) => {
            console.log(res);
            this.matchesData = res.matches;
          });
        break;
      case 'team':
        this.searchQueryService.getTeams()
          .subscribe((res : Teams) => {
            console.log(res);
            this.teamsData = res.teams;
          });
        break;
      default:
        this.leaguesData = [];
        this.matchesData = [];
        this.teamsData = [];
        break;
    }
  }
}
