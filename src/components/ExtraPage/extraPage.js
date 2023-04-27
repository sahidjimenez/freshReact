import React from 'react';
import css from './extraPage.module.css'
import Icons from '../../miniComponents/Icons/icons';
import ContainerExtra from '../../miniComponents/ContainerExtra';
const ExtraPage = () => {
  return (
    <div className='p-5'>
      <div className={css.contenedor}>
        <ul className={css.lista}>
          <li><p >Coffe</p></li>
          <li><p >Espresso</p></li>
          <li><p >Eiskaffee</p></li>
        </ul>
        <div className={css.iconos}>
          <Icons selectedIcon={1} />
          <Icons selectedIcon={2} />
        </div>
      </div>
      <div className='flex gap-3'>
        <ContainerExtra></ContainerExtra>
        <ContainerExtra></ContainerExtra>
        <ContainerExtra></ContainerExtra>
      </div>
    </div>
  )
}

export default ExtraPage;