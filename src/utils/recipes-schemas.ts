
import { z } from 'zod'


// Esquema de la API de https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list. 
// Basicamente es el tipado usando zod


export const CategoriesAPIResponsableSchema = z.object  ({
    drinks: z.array(z.object({
        strCategory: z.string()
    }))
})