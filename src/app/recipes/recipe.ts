import { Ingredient } from "../shared";

export class Recipe {
  constructor(public name, public description, public imagePath, public ingredients: Ingredient[]) {}
}
