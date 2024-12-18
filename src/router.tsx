import { lazy, Suspense } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Layout from './layouts/Layout'

// import FavoritesPage from './views/FavoritesPage'
const FavoritesPage = lazy(() => import('./views/FavoritesPage'))
///import IndexPage from './views/IndexPage'
const IndexPage = lazy(() => import('./views/IndexPage'))


export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}> {/* Este permite anadir el layout para cargar componentes que se repetiran */}
                <Route path='/' element={
                    <Suspense fallback="Cargando"> {/* Permite mostrar esto mientras carga o un spinner */}
                        <IndexPage/>
                    </Suspense>
                } />
                <Route path='/favorites' element={
                    <Suspense fallback="Cargando"> {/* Permite mostrar esto mientras carga o un spinner */}
                        <FavoritesPage/>
                    </Suspense>
                } />

            </Route>
        </Routes>
    </BrowserRouter>
  )
}
