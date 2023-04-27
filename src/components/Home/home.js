import React from 'react'
import ContainerHome from '../../miniComponents/ContainerHome'
import { useUsPage } from '../UsPage/hooks/useUsPage'
import NavigationButton from '../../miniComponents/NavigationButton/navigationButton'
import css from './home.module.css'
import Header from '../Header/header'

const valores = [
    { name: "haz tu pedido", img: "static/f4Reducida1.png", route: "/order" },
    { name: "menu", img: "static/f5Reducida1.png", route: "/Menu" },
    { name: "nosotros", img: "static/freshpersonas11.png", route: "/Nosotros" },
    { name: "contacto", img: "static/f6Reducida3.png", route: "/Contact" }
]

const Home = () => {

    const talonProps = useUsPage()
    const { nameLocation } = talonProps
   /*  console.log(nameLocation()) */
    return (
        <>
            <Header />

            {valores.map((item, id) => {
                return <div key={id} className={'py-2'}>
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