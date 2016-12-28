import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Lasagne', 'plate', 'http://kingofwallpapers.com/lasagne/lasagne-002.jpg', []),
    new Recipe('Pizza', 'margherita', 'https://upload.wikimedia.org/wikipedia/it/d/d8/Pizza_margherita.png', []),
    new Recipe('Kebab', 'sandwich', 'http://static.wixstatic.com/media/efa988_f77bf3153d4640928c2171ab5399df20.jpg_srz_980_648_85_22_0.50_1.20_0.00_jpg_srz', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();


  constructor() { }

  ngOnInit() { }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }
}
