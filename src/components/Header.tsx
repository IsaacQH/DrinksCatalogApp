


export default function Header() {

  return (
    <header className=" bg-slate-800">  {/* backgroun header*/}
        <div className="mx-auto container px-5 py-16"> {/* contenedor y alineacion en x*/}
            <div className="flex justify-between items-center"> {/* Division de la barra centrada y justificada*/}
                <div> {/* div del logo*/}
                    <img className="w-32" src="/logo.svg" alt="logo"/>
                </div>

                <nav> {/* Barra de nav div*/}

                </nav>
            </div>
        </div>
    </header>
  )
}
