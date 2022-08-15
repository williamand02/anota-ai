import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
})
export class SearchComponent implements OnInit {
  constructor() {}

  @Output() searchValue = new EventEmitter();

  buscar = '';
  ngOnInit(): void {}

  addNewItem(value: string) {
    this.searchValue.emit(value);
  }
}
