import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [ new Recipe("Mario", "He is a mario brother", "https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png"),
new Recipe("Luigi", "He is another mario brother", "https://upload.wikimedia.org/wikipedia/en/7/73/Luigi_NSMBUDX.png")];

  constructor() { }

  ngOnInit(): void {
  }

}
