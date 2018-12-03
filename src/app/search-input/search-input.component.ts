import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  @Output() searchQueryInput = new EventEmitter<string>();

  searchInput : string;

  constructor() { }
  ngOnInit() { }

  log(val) { console.log(val); }

  search() {
    console.log('in child in searchQueryInput, emitting searchInput');
    this.searchQueryInput.emit(this.searchInput);
  }
}
