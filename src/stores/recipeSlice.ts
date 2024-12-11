import { SearchFilter, Drink } from './../types/index';
//Store usando Slice que albergara las recetas

import { StateCreator } from "zustand"
import { getCategories, getRecipeById, getRecipes } from "../services/RecipeServices"
import type { Categories, Drinks, Recipe } from "../types"

export type RecipesSliceType = {
    categories:Categories,
    drinks:Drinks,
    selectedRecipe: Recipe
    fetchCategories: () => Promise<void>,  //Promesa para obetner el categorias de la API
    searchRecipes: (SearchFilter: SearchFilter) => Promise<void>,  //Promesa para obener recetas, recibe category para buscar
    selectRecipe: (id: Drink['idDrink']) => Promise<void>
}

export const createRecipesSlice : StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks:[]
    },
    drinks:{
        drinks: []
    },
    selectedRecipe: {} as Recipe,
    fetchCategories: async()=> {
        const categories = await getCategories()        //Llama a la API desde el servicio en getCategories
        set({
            categories})    //Setea el valor de la API o fetch en el state global
    },
    searchRecipes: async(filters) => {  //Funcioni asincrona que llamara a tener las recetas de la api
        const drinks = await getRecipes(filters)
        set({
            drinks
        })
    },
    selectRecipe: async(id) => {
        const selectedRecipe = await getRecipeById(id)
        set({
            selectedRecipe
        })
    }
})