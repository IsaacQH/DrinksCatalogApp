
import { Outlet } from "react-router-dom"
import Header from "../components/Header"

export default function Layout() {
  return (
    <>
        <Header />   {/* Se queda estatico */}

        <main className="container mx-auto py-16">   {/* Aqui estar[a el contenido prioncipal de cada pagina] */}
            <Outlet/> {/* Aqui estara o lo de IndePage o lo de FavoritesPage */}
        </main>


    </>
  )
}
