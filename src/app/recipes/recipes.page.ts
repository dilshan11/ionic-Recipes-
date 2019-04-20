import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Reci } from './res';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipe:Reci[];
  constructor(private myservise:RecipeService) { }

  ngOnInit() {
    this.recipe=this.myservise.getAllRecipes();
  }

}
