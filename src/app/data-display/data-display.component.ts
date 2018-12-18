import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {
  @Input() leagues : any[];
  @Input() teams : any[];
  private _matches;
  // @Input() matches : any[];

  // use getter setter to define the property
  get matches(): any {
    return this._matches;
  }
  @Input() set matches(val: any) {
    console.log('previous item = ', this._matches);
    console.log('currently selected item=', val);
    this._matches = val;
    this.updateRowGroupMetaData();
  }

  rowGroupMetadata: any;

  customSort(e) {
    this.matches.sort((a, b) => {
      const aGroup = a.name.toLowerCase();
      const bGroup = b.name.toLowerCase();
      if (aGroup > bGroup) { return 1; }
      if (aGroup < bGroup) { return -1; }
      const aSort = a.color;
      const bSort = b.color;
      if (aSort > bSort) { return 1; }
      if (aSort < bSort) { return -1; }
      return 0;
    });
  }

  constructor() { }
  ngOnInit() { }

  onSort() {
    this.updateRowGroupMetaData();
  }

  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};
    console.log('->', this.matches);
    if (this.matches) {
      for (let i = 0; i < this.matches.length; i++) {
        let rowData = this.matches[i];
        let competition_id = rowData.competition_id;
        if (i == 0) {
          this.rowGroupMetadata[competition_id] = { index: 0, size: 1 };
        }
        else {
          let previousRowData = this.matches[i - 1];
          let previousRowGroup = previousRowData.competition_id;
          if (competition_id === previousRowGroup)
            this.rowGroupMetadata[competition_id].size++;
          else
            this.rowGroupMetadata[competition_id] = { index: i, size: 1 };
        }
      }
    }
  }

  log(val) { console.log(val); }
}
