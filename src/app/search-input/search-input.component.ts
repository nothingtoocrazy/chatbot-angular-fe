import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  @Output() getLeaguesData = new EventEmitter<string>();

  searchInput : string;

  constructor() { }
  ngOnInit() { }

  log(val) { console.log(val); }

  getLeagues() {
    console.log('in child in getLeagues, emitting getLeaguesData');
    this.getLeaguesData.emit(this.searchInput);
  }
}
