import { Item } from 'src/app/home/list/list-item';
import { Items } from './list/list-item';
import { Observable } from 'rxjs';
import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  items$!: Observable<Items>;
  buscar: string = '';
  itemsFilter = this.items$;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.items$ = this.homeService.getList().pipe();
  }

  addSearchValue(newSearch: string) {
    this.buscar = newSearch;
  }

  listFilter(items: Items) {
    let result = items.filter((item: Item) =>
      item.title.toLowerCase().includes(this.buscar.toLowerCase())
    );
    return result;
  }
}
