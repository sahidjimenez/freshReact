import React from 'react'
import ContainerHome from '../../miniComponents/ContainerHome'

const valores = [
    { name: "haz tu pedido", img: "static/f4Reducida1.png", route: "/order" },
    { name: "menu", img: "static/f5Reducida1.png", route: "/Menu" },
    { name: "nosotros", img: "static/freshpersonas11.png", route: "/Nosotros" },
    { name: "contacto", img: "static/f6Reducida3.png", route: "/Contact" },
    { name: "extra", img: "", route: "/extra" }
]

const Home = () => {

    return (
        <>
            {valores.map((item, id) => {

                return <div className={'py-2'}>
                    <ContainerHome
                        key={id}
                        value={valores}
                        isNavigation={true}
                        name={item.name}
                        img={item.img}
                        route={item.route}
                    />
                </div>


            })}


        </>
    )

}

export default Home