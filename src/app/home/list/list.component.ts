import { Items } from './list-item';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
})
export class ListComponent implements OnInit {
  @Input() items!: Items;

  constructor() {}

  ngOnInit(): void {}
}
