import React from 'react'
import { Link } from 'react-router-dom'
import css from "./containerHome.module.css"
const ContainerHome = (props) => {

    const { isNavigation, name, img, route } = props

    const contenedorNavigation = isNavigation ? (

        <div className='inline justify-center '>
            <nav>
                <ul>
                    <li>
                        <div className='relative'>
                            <div className={css.image}>
                                <img alt={name} src={img} />

                            </div>
                            <div className={css.textNavegation}>
                                <div className={css.button}>
                                    <Link className=' text-white text-[30px]' to={route}> {name ? name : null}</Link>

                                </div>

                            </div>

                        </div>

                    </li>
                </ul>
            </nav>
        </div>

    ) : <>
       
    </>

    return (
        <div>
            {/*  <img src='static/11.png' alt='no hay'/> */}
            {contenedorNavigation}
        </div>
    )
}

export default ContainerHome