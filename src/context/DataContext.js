import React, { createContext, useState } from "react";

export const DataContext = createContext();

const dataFixed = {
    nombre: 'sahid',
    total: 0,
    orden: {},
    menu: [
        {
            nombre: 'Ensaldas',
            comidas: [
                {
                    nombre: 'ensalada',
                    precio: 100,
                    descripcion: 'Ensalada de lechuga fresca con 18 ingredientes a elegir un aderezo y un complemento.',
                    urlImage: 'static/ensaladagrande.jpg',
                    typeInput: 'normal',
                    input: {
                        tipo: 'multi',
                        opciones: [

                            {
                                nombreOpcion: 'tamaño',
                                opciones: [
                                    'chico',
                                    'mediano',
                                    'grande'
                                ]
                            }
                            ,

                            {
                                nombreOpcion: 'proteina',
                                opciones: [
                                    'pollo natural',
                                    'pollo bbq',
                                    'jamón',
                                    'pollo frito',
                                    'pollo especies',
                                    'atún'
                                ]
                            }
                            ,

                            {
                                nombreOpcion: 'ingredientes',
                                opciones: [
                                    'zanahoria',
                                    'tomate',
                                    'betabel',
                                    'champiñón',
                                    'jalapeño',
                                    'cebolla',
                                    'aceituna',
                                    'piña',
                                    'morrón',
                                    'panela',
                                    'pasta',
                                    'apio',
                                    'col morado',
                                    'pepino',
                                    'espinaca',
                                    'germinado',
                                    'elote',
                                    'brócoli',
                                    'jamón',
                                    'chorizo',
                                    'queso manchego'
                                ]
                            }
                            ,

                            {
                                nombreOpcion: 'aderezo',
                                opciones: [
                                    'ranch',
                                    'mil islas',
                                    'cesar',
                                    'italiano',
                                    'mostaza miel',
                                    'chimichurry'
                                ]
                            }
                            ,

                            {
                                nombreOpcion: 'complemento',
                                opciones: [
                                    'parmesano',
                                    'crotones',
                                    'chile',
                                    'almendras',
                                    'aceitunas'
                                ]
                            }

                        ]
                    }

                },
            ]

        },
        {
            nombre: 'desayunos',
            comidas: [
                {
                    nombre: 'omelet',
                    precio: 100,
                    descripcion: 'Tortilla de huevo rellena de ingredientes al gusto.',
                    urlImage: 'static/omelet.jpg',
                    typeInput: 'normal',
                    input: {
                        tipo: 'select',
                        opciones: [
                            'zanahoria',
                            'tomate',
                            'betabel',
                            'champiñón',
                            'jalapeño',
                            'cebolla',
                            'aceituna',
                            'piña',
                            'morrón',
                            'panela',
                            'pasta',
                            'apio',
                            'col morado',
                            'pepino',
                            'espinaca',
                            'germinado',
                            'elote',
                            'brócoli',
                            'jamón',
                            'chorizo',
                            'queso manchego'
                        ]
                    }

                },
                {
                    nombre: 'chilaquiles',
                    precio: 110,
                    descripcion: 'Totopos dorados con pollo o huevo bañado en salsa de su elección.',
                    urlImage: 'static/chilaquiles.jpg',
                    typeInput: 'normal',
                    input: {
                        tipo: 'optional',
                        opciones: [
                            'Verde',
                            'Rojo',
                            'Mole'
                        ]

                    }
                },
                {
                    nombre: 'hot cakes',
                    precio: 120,
                    descripcion: 'Mezcla de harina de hot cakes de la casa con plátano.',
                    urlImage: 'static/hotcakes.jpg',
                    typeInput: 'normal',
                    input: {
                        tipo: 'multiple'

                    }
                }
            ]

        },
        {
            nombre: 'entradas',
            comidas: [
                {
                    nombre: 'guacamole',
                    precio: 90,
                    descripcion: 'Aguacate machacado acompañado con jitomate, limón, cebolla, cilantro, aceite de oliva y totopos.',
                    urlImage: 'static/guacamole.jpg',
                    typeInput: 'normal',
                },
                {
                    nombre: 'tostada francesa',
                    precio: 80,
                    descripcion: 'Pan mojado con una mezcla de huevo y leche, frito acompañado con lechera o miel.',
                    urlImage: 'static/tostadasfrancesas.jpg',
                    typeInput: 'normal'
                },
                {
                    nombre: 'orden de pan tostado',
                    precio: 100,
                    descripcion: 'Pan perfectamente tostado con mermelada de fresa y mantequilla para acompañar. ',
                    urlImage: 'static/pantostado.jpg',
                    typeInput: 'normal'
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
