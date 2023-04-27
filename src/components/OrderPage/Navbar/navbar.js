import React from 'react'

const comidas = [
    'desayunos',
    'Entradas',
    'Ensaladas',
    'baguettes',
    'especialidades',
    'pastas',
    'bebidas'
]
const mapeo = comidas.map((comida, id) => {
    return (
        <div key={id} >
            <a className="navbar-brand capitalize" href="/"> {comida}</a>
        </div>
    )
})

const Navbar = () => {
    
    return (
        <div className="container py-1">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div  className="flex overflow-x-auto h-[50px] ">
                    {
                        mapeo
                    }
                </div>
            </nav>
        </div>
    )
}


export default Navbar
