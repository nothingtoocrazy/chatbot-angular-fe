import { Component } from '@angular/core';

import { LeaguesService } from './leagues.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private leaguesData : Observable<object>;
  title = 'Soccer chatbot';

  constructor(private leaguesService: LeaguesService) { }

  public getLeagues($event) {
    console.log('in parent in getLeagues', this.leaguesData);
    if ($event === 'leagues') {
      this.leaguesData = this.leaguesService.getLeagues();
    } else {
      this.leaguesData = undefined; // this seems like a really weird way to reset the value, but [] doesnt work cause its an observable.
    }
  }
}
