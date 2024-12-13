import { StateCreator } from "zustand";
import { Recipe } from "../types";

//Tipo de datos
export type FavoritesSliceType = {
    favorites: Recipe[],         //Sera un arregglo de recipes
    handleClickFavorite:(recipe: Recipe) => void,
    favoriteExists: (id: Recipe['idDrink']) => boolean
}


//Declarando states globales
export const createFavoritesSlice : StateCreator<FavoritesSliceType> = (set, get) => ({
    favorites:[],
    handleClickFavorite: (recipe) => {
        if(get().favorites.some(favorite => favorite.idDrink === recipe.idDrink)){
            //console.log('id si existe') Eliminaremos el favorito
            set((state) => ({
                favorites:state.favorites.filter( favorite => favorite.idDrink !== recipe.idDrink) 
            }))
        } else {
            // console.log('no existe')
            set((state) => ({
                favorites:[...state.favorites, recipe] //Accedes a la copia del state apsado y le anades la nueva receta
            }))
        }
    },
    favoriteExists: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    }
})
