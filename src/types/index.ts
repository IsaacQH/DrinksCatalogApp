import {z} from 'zod'
import { CategoriesAPIResponsableSchema } from '../utils/recipes-schemas'

export type Categories = z.infer<typeof CategoriesAPIResponsableSchema>