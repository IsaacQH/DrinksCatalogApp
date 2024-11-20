
import { Outlet } from "react-router-dom"
import Header from "../components/Header"

export default function Layout() {
  return (
    <>
        <Header />

        <main className="container mx-auto py-16">   {/* Aqui estar[a el contenido prioncipal de cada pagina] */}
            <Outlet/>
        </main>


    </>
  )
}
