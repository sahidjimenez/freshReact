import React, { useState } from 'react'
import Icons from '../../../miniComponents/Icons/icons'
import css from './resume.module.css'

const Resume = () => {

    const [cantidad, setCantidad] = useState(0)

    return (
        <div className='container text-center flex gap-3 py-2'>
            <div className='flex'>
                <div className={css.dollarIcon}>
                    <Icons selectedIcon={10} />
                </div>
                <span>{cantidad}</span>
            </div>
            <div className={css.dollarIcon}>
                <Icons selectedIcon={9} />
            </div>
        </div>
    )
}


export default Resume
