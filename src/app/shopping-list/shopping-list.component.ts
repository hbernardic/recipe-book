import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';

import { Ingredient } from '../recipes/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.items = this.shoppingListService.getItems();
  }

}
