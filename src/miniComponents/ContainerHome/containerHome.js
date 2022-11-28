import React from 'react'
import { Link } from 'react-router-dom'
const ContainerHome = (props) => {

    const { isNavigation, name, isCarousel, img, route } = props

    const contenedorNavigation = isNavigation ? (

        <div className='inline justify-center h-40'>
            <nav>
                <ul>
                    <li>
                        <div >
                            <img alt={name} src={img}/>

                        </div>
                        <Link to={route}> {name ? name : null}</Link>
                    </li>
                </ul>
            </nav>
        </div>

    ) : null
    return (
        <div>
            {/*  <img src='static/11.png' alt='no hay'/> */}
            {contenedorNavigation}
        </div>
    )
}

export default ContainerHome