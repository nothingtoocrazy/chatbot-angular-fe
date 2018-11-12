import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })

export class LeaguesService {
  baseUrl : string = environment.api_base_url;

  constructor(
    private http: HttpClient,
    private leaguesService: LeaguesService
  ) { }

  getLeagues() {
    console.log('in getLeagues in leagues service');
    return this.http.get(`${this.baseUrl}/league`)
      // .subscribe((res:any[]) => {
      //   console.log(res);
      //   return res;
      // });
  }
}
