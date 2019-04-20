import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Reci } from '../res';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
loadrecipe:Reci;
  constructor(private activatedRoute: ActivatedRoute,private recipesServise:RecipeService ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paraMap=>{
      const recipid=paraMap.get('recipe');
      this.loadrecipe=this.recipesServise.getRecipe(recipid);
    })
  }

}
