import React from 'react'
import Icons from '../Icons/icons'
import css from './containerExtra.module.css'
const containerExtra = () => {
    return (
        <div className={css.container}>
            <div className={css.header}>
                <p className={css.titulo}>titulo</p>
                <div className={css.iconosOpciones}>

                    <Icons selectedIcon={2} />
                    <Icons selectedIcon={2} />
                    <Icons selectedIcon={2} />
                </div>
                <div className={css.image}>
                    <img alt={'asdasd'} src={'static/f4Reducida1.png'} />

                </div>
            </div>
            <div className='p-2'>
                <p >nombre producto</p>
                <div className='flex'>
                <Icons selectedIcon={4} />
                <Icons selectedIcon={4} />
                <Icons selectedIcon={4} />
                <Icons selectedIcon={4} />
                <Icons selectedIcon={3} />
                </div>
                <p>$10.00</p>
            </div>



            <button className={css.boton}>Añadir al carrito</button>
        </div>
    )
}

export default containerExtra
