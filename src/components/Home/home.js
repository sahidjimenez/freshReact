import React from 'react'
import ContainerHome from '../../miniComponents/ContainerHome'

const valores = [
    { name: "haz tu pedido", img: "", route: "/haz-tu-pedido" },
    { name: "menu", img: "", route: "/menu" },
    { name: "nosotros", img: "", route: "/nosotros" },
    { name: "contacto", img: "", route: "/contacto" },
    { name: "extra", img: "", route: "/extra" }
]

const Home = () => {

    return (
        <>
            {valores.map(item => {
                return <ContainerHome isNavigation={true} name={item.name} />
                
            })}


        </>
    )

}

export default Home