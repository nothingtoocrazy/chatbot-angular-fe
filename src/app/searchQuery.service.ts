import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })

export class SearchQueryService {
  baseUrl : string = environment.api_base_url;

  constructor(
    private http: HttpClient,
    private searchQueryService: SearchQueryService
  ) { }

  getLeagues() {
    console.log('in getLeagues in leagues service');
    return this.http.get(`${this.baseUrl}/league`)
  }
  getMatches() {
    console.log('in getMatches in search service');
    return this.http.get(`${this.baseUrl}/match`)
  }
  getTeams() {
    console.log('in getTeams in search service');
    return this.http.get(`${this.baseUrl}/team`)
  }
}
