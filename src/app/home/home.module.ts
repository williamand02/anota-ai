import { CardModule } from './../shared/components/card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchComponent } from './search/search.component';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ListComponent } from './list/list.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    ListComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, FormsModule, CardModule],
  exports: [HomeComponent],
})
export class HomeModule {}
