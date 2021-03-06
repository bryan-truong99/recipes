import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [ new Ingredient('Mushrooms', 5), new Ingredient('Fire Flowers', 2)];

  constructor() { }

  ngOnInit(): void {
  }

  addToList(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
