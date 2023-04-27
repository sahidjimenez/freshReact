import React, { useState } from 'react'
import css from "./navigationButton.module.css";
import Icons from '../Icons/icons';
import { Drawer } from '@mui/material';

const NavigationButton = (props) => {

    const { location } = props;

    const [state, setState] = useState(false)

    const toggleDrawer = (open) => (event) => {
        setState(open)
    }

    const list = () => (
        <div onClick={toggleDrawer(false)}>

            <ul className={css.navegacion}>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/menu">Menú</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/order">Ordenar</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href="/Nosotros">Nosotros</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href="/sucursales">Sucursales</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href="/Contact">Contacto</a>
                </li>

            </ul>
            <hr></hr>
            <div className={css.facebook}>
                <a href="https://www.facebook.com/freshngreencampeche.centrocampeche">
                    <Icons selectedIcon={6} />
                </a>
                <a href="https://api.whatsapp.com/send?phone=529812072331&text=Hola,%20deseó%20ordenar">
                    <Icons selectedIcon={7} />
                </a>
            </div>
        </div>
    )

    return (
        <div className={css.main}>
            <div className={css.button}>
                <button onClick={toggleDrawer(true)}> <Icons selectedIcon={5} /></button>
            </div>
            <Drawer
                anchor='left'
                open={state}
                onClose={toggleDrawer(false)}
                classes={{ paper: css.holi }}
            >
                {list()}
            </Drawer>
        </div>
    )
}

export default NavigationButton
