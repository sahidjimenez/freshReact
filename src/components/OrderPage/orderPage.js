import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import Header from '../Header/header';
import ContainerFoods from './ContainerFoods/containerFoods';
import Navbar from './Navbar/navbar';
import Resume from './Resume/resume';
const OrderPage = () => {

  const { data, useData } = useContext(DataContext)

/*   console.log(data) */

  const { nombre } = data;
  return (
    <>

      <Header />
      <div className='container p-3'>
        <p  className='text-center text-[24px]' > Fast'n Green Campeche</p>
      </div>
      <Resume />
      <Navbar />
      <ContainerFoods/>

    </>

  )
}

export default OrderPage;