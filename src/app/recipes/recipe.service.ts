import { Injectable } from '@angular/core';
import { Reci } from './res';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
recipes:Reci[]=[
  {
    id:'r1',
    Title:'Franc cake',
    imageUrl:'https://i.ibb.co/rdP5Dss/reci2.jpg',
    ingredients:['honey','banana']
},
{
  id:'r2',
  Title:'swizland pudim',
  imageUrl:'https://i.ibb.co/k86x1tM/recip1.jpg',
  ingredients:['suger','flow']
}
];
constructor(){

}
getAllRecipes(){
  return [...this.recipes];
}
getRecipe(recipeId:String){
  for(let a=0;a<this.recipes.length;a++){
    if(this.recipes[a].id===recipeId){
        return this.recipes[a];
    }
  }
}
}
