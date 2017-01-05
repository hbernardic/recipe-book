import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from './ingredient';

@Injectable()
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe('Lasagne', 'plate', 'http://kingofwallpapers.com/lasagne/lasagne-002.jpg', [
      new Ingredient('Cheese', 3),
      new Ingredient('Meat', 5)
    ]),
    new Recipe('Pizza', 'margherita', 'https://upload.wikimedia.org/wikipedia/it/d/d8/Pizza_margherita.png', [
      new Ingredient('Mushrooms', 2),
      new Ingredient('Ham', 6)
    ]),
    new Recipe('Kebab', 'sandwich', 'http://static.wixstatic.com/media/efa988_f77bf3153d4640928c2171ab5399df20.jpg_srz_980_648_85_22_0.50_1.20_0.00_jpg_srz', [
      new Ingredient('Sauce', 1),
      new Ingredient('Kebab Meat', 7)
    ])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  addRecipe(value: Recipe) {
    this.recipes.push(value);
  }

}
