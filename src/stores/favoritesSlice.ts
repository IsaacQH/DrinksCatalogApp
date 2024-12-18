import { StateCreator } from "zustand";
import { Recipe } from "../types";
import { createNotificationSlice } from "./notificationSlice";
import { RecipesSliceType } from "./recipeSlice";
import { NotificationSliceType } from "./notificationSlice";

//Tipo de datos
export type FavoritesSliceType = {
    favorites: Recipe[],         //Sera un arregglo de recipes
    handleClickFavorite:(recipe: Recipe) => void,
    favoriteExists: (id: Recipe['idDrink']) => boolean,
    loadfromStorage: () => void
}


//Declarando states globales
export const createFavoritesSlice : StateCreator<FavoritesSliceType & RecipesSliceType & NotificationSliceType, [], [], FavoritesSliceType> = (set, get, api) => ({
    favorites:[],
    handleClickFavorite: (recipe) => {
        if(get().favorites.some(favorite => favorite.idDrink === recipe.idDrink)){
            //console.log('id si existe') Eliminaremos el favorito
            set((state) => ({
                favorites:state.favorites.filter( favorite => favorite.idDrink !== recipe.idDrink) 
            }))
            createNotificationSlice(set, get, api).showNotification({ 
                text: 'Se eliminó de favoritos', 
                error: false,
            })

        } else {
            // console.log('no existe')
            set((state) => ({
                favorites:[...state.favorites, recipe] //Accedes a la copia del state apsado y le anades la nueva receta
            }))
            createNotificationSlice(set, get, api).showNotification({ 
                text: 'Se agregó de favoritos', 
                error: true
            })
        }

        localStorage.setItem('favorites', JSON.stringify(get().favorites))  //Gurdamos en local storage
    },
    favoriteExists: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    },
    loadfromStorage: () => {       //Revisa el local storage y obtiene lo que este guardado
        const storedFavorites = localStorage.getItem('favorites')
        if(storedFavorites){
            set({
                favorites: JSON.parse(storedFavorites)
            })
        }
    }
})
