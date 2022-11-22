import React from 'react'

const ContainerHome = (props) => {

    const { isNavigation,name, isCarousel,img,route } = props

    const contenedorNavigation = isNavigation ? (
        <>
            <div className='flex justify-center h-40'>
                <button>
                    {name?name:null}
                </button>
            </div>
        </>
    ) : null
    return (
        <div>
            {contenedorNavigation}
        </div>
    )
}

export default ContainerHome