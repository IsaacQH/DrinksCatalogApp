import {z} from 'zod'
import { CategoriesAPIResponsableSchema, DrinksAPIResponse, SearchFilterSchema } from '../utils/recipes-schemas'

export type Categories = z.infer<typeof CategoriesAPIResponsableSchema> 

export type SearchFilter = z.infer<typeof SearchFilterSchema> 

export type Drinks = z.infer<typeof DrinksAPIResponse>