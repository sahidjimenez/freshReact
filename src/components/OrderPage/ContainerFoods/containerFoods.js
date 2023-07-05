import React, { useContext } from 'react';
import Food from './Food/food';
import css from './containerFoods.module.css';
import { DataContext } from '../../../context/DataContext';

const ContainerFoods = () => {

    const { data } = useContext(DataContext);
    const { menu } = data;
    return (
        <div className={css.container}>
            <div className={css.containerFoods}>
                {menu.map((element) => {

                    return (
                        <>
                            <Food props={element} />
                        </>
                    )
                    
                })}
                <Food />
            </div>
        </div>

    )
}

export default ContainerFoods
