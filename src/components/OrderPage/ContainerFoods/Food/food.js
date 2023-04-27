import React from 'react'
import PropTypes from 'prop-types'
import css from './food.module.css'

const comida = {
    nombre: 'omelet',
    precio: 100,
    descripcion: 'Tortilla de huevo rellena de ingredientes al gusto.',
    url: 'static/omelet.jpg'
}

const { nombre, precio, descripcion, url } = comida;

const Food = props => {
    /*  console.log( props) */
    const { nombre:name, comidas:food } = props.props ? props.props:'';
   
    console.log(food)

    return (
        <div className='container flex py-2'>

            <div className={css.containerInfo}>
                <span className='font-bold uppercase'>{name}</span>
                <span className='text-xs'>$ {precio}</span>
                <span className='text-xs'>{descripcion}</span>
            </div>
            <div className={css.imagen}>
                <img alt='prueba' src={url}></img>
            </div>
        </div>
    )
}

export default Food
