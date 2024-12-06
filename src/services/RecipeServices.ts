
import axios from "axios";
import { CategoriesAPIResponsableSchema } from "../utils/recipes-schemas";

export async function getCategories() {

    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

    const {data} =  await axios(url)  // Destructuramos data y obtenemos el array

    const result = CategoriesAPIResponsableSchema.safeParse(data)  //Guarda el resultado ya con el tipado

    console.log(result)
    
}