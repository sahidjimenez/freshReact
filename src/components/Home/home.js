import React from 'react'
import ContainerHome from '../../miniComponents/ContainerHome'

const valores = [
    { name: "haz tu pedido", img: "", route: "/order" },
    { name: "menu", img: "", route: "/Menu" },
    { name: "nosotros", img: "", route: "/Nosotros" },
    { name: "contacto", img: "", route: "/Contact" },
    { name: "extra", img: "", route: "/extra" }
]

const Home = () => {

    return (
        <>
            {valores.map((item, id) => {
                return <ContainerHome
                    key={id}
                    value={valores}
                    isNavigation={true}
                    name={item.name}
                    route={item.route} />

            })}

        </>
    )

}

export default Home