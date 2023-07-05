import React, { useContext, useMemo, useState } from 'react';
import Food from './Food/food';
import css from './containerFoods.module.css';
import { DataContext } from '../../../context/DataContext';
import Modal from './Modal/modal';
import { useEffect } from 'react';

const ContainerFoods = () => {

    const { data, setData } = useContext(DataContext);
    const { menu } = data;
    const [open, setOpen] = useState(false)
    const [selectedFood, setSelectedFood] = useState({})


    const handleClickOpen = () => {
        setOpen(true);
    };


    const handleClose = () => {
        setOpen(false);
    };

    const sahid = (item) => {
        handleClickOpen()
        setData({
            ...data,
            total: "10"
        })
    }

    return (
        <div className={css.container}>
            <div className={css.containerFoods}>
                {menu.map((element, i) => {

                    return (
                        <div key={i}>

                            <div >
                                <Food
                                    props={element}
                                    handleClickOpen={handleClickOpen}
                                    setSelectedFood={setSelectedFood}
                                    selectedFood={selectedFood}
                                    open={open}
                                    handleClose={handleClose}
                             

                                />
                            </div>

                        </div>
                    )
                })}

            </div>
        </div>

    )
}

export default ContainerFoods
