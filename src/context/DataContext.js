import React, { createContext, useState } from "react";

export const DataContext = createContext();

const dataFixed = {
    nombre: 'sahid',
    total: 0,
    orden:'',
    menu:[
        {
            nombre: 'desayunos',
            comidas: [
                {
                    nombre: 'omelet',
                    precio: 100
                },
                {
                    nombre: 'chilaquiles',
                    precio: 110
                },
                {
                    nombre: 'hot cakes',
                    precio: 120
                }
            ]

        },
        {
            nombre: 'entradas',
            comidas: [
                {
                    nombre: 'guacamole',
                    precio: 90
                },
                {
                    nombre: 'tostada francesa',
                    precio: 80
                },
                {
                    nombre: 'orden de pan tostado',
                    precio: 100
                }
            ]

        }
    ]
}


export const DataProvider = ({ children }) => {

    const [data, setData] = useState(dataFixed)

    return (
        <DataContext.Provider value={{
            data, setData
        }}>
            {children}
        </DataContext.Provider>
    )
}
