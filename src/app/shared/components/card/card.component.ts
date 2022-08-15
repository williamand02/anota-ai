import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/home/list/list-item';
import types from 'src/app/helpers/data.json';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
})
export class CardComponent implements OnInit {
  @Input() item: Item | undefined;

  constructor() {}
  ngOnInit(): void {}

  getName(id: string) {
    let idNumber = parseInt(id);
    return types.find((type: any) => type.id == idNumber)?.name;
  }
}
