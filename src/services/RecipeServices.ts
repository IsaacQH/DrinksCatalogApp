
import axios from "axios";
import { CategoriesAPIResponsableSchema, DrinksAPIResponse, RecipeAPIResponseSchema } from "../utils/recipes-schemas";
import { Drink, SearchFilter } from "../types";

export async function getCategories() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    const {data} =  await axios(url)  // Destructuramos data y obtenemos el array
    const result = CategoriesAPIResponsableSchema.safeParse(data)  //Guarda el resultado ya con el tipado
    if (result.success){
        return result.data  //Regresa directamente el resultado de drinks de categories
    }    
}

export async function getRecipes(filters: SearchFilter){
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`
    const {data} =  await axios(url)  // Destructuramos data y obtenemos el array
    const result = DrinksAPIResponse.safeParse(data)  //Guarda el resultado ya con el tipado
    if (result.success){
        return result.data  //Regresa directamenteel resultado de recipe del category
    }    
}

export async function getRecipeById(id: Drink['idDrink'] ){
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    const {data} =  await axios(url)  // Destructuramos data y obtenemos el array
    const result = RecipeAPIResponseSchema.safeParse(data.drinks[0])  //Guarda el resultado ya con el tipado
    if (result.success){
        return result.data  //Regresa directamenteel resultado de recipe del category
    }    
}






