import React from 'react';
import Header from '../Header/header';
import ContainerFoods from './ContainerFoods/containerFoods';
import Navbar from './Navbar/navbar';
import Resume from './Resume/resume';
const OrderPage = () => {

/*   console.log(data) */

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