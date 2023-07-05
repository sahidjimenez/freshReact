import React, { useContext, useState, useCallback } from 'react'
import css from './food.module.css'
import { DataContext } from '../../../../context/DataContext';
import Modal from '../Modal/modal';
import { useOrderPage } from '../../Hooks/useOrderPage';
import { Button } from '@mui/material';
const Food = props => {

    const {
        handleClickOpen,
        setSelectedFood,
        selectedFood,
        open,
        handleClose,

    } = props

    const { nombre: name, comidas: food } = props.props ? props.props : '';

    const containerFood = (
        food.map((element, i) => {

            return (

                <div key={i} onClick={() => {
                    setSelectedFood(element)
                    handleClickOpen()
                }} className='container flex py-2'>

                    <div className={css.containerInfo}>
                        <span className='font-bold uppercase'>{element.nombre}</span>
                        <span className='text-xs'>$ {element.precio}</span>
                        <span className='text-xs'>{element.descripcion}</span>
                    </div>
                    <div className={css.imagen}>
                        <img alt='prueba' src={element.urlImage}></img>
                    </div>

                </div>

            )
        })
    )
    return (
        <div >
            <div className={css.containerInfo}>
                <span className='font-bold uppercase'>{name}</span>
            </div>
            {containerFood}
            <Modal
                valores={selectedFood}
                handleClickOpen={handleClickOpen}
                open={open}
                handleClose={handleClose}
            />
           
        </div>
    )
}

export default Food
