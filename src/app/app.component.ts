import { Component } from '@angular/core';

import { SearchQueryService } from './searchQuery.service';
import { Matches } from './Classes/matches';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  leaguesData : any[] = [];
  matchesData : any[] = [];
  title = '';

  constructor(private searchQueryService: SearchQueryService) { }

  public search($event) {
    console.log('in parent in search', this.leaguesData);
    console.log('in parent in search', this.matchesData);
    switch ($event) {
      case 'leagues':
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
      default:
        this.leaguesData = undefined;
        this.matchesData = undefined;
        break;
    }
  }
}
