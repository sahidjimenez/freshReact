import React from 'react'
import { Link } from 'react-router-dom'
const ContainerHome = (props) => {

    const { isNavigation, name, isCarousel, img, route } = props

    const contenedorNavigation = isNavigation ? (

        <div className='flex justify-center h-40'>
            <nav>
                <ul>
                    <li>
                        <Link to={route}> {name ? name : null}</Link>
                    </li>
                </ul>
            </nav>
        </div>

    ) : null
    return (
        <div>
            {contenedorNavigation}
        </div>
    )
}

export default ContainerHome