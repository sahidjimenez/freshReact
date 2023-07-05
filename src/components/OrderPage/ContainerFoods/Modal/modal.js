import React, { useState, useContext } from 'react'
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { DataContext } from '../../../../context/DataContext';
const Modal = (props) => {
    const {
        open,
        handleClose,
        handleClickOpen,
        valores
    } = props;

    const {
        input,
        nombre
    } = valores ? valores : '';

    const {
        tipo,
        opciones
    } = input ? input : ''

    /*  console.log('valores desde modal', valores) */

    const { data, setData } = useContext(DataContext);

    /* Control Radio Buttons */

    const [value, setValue] = React.useState('');

    const handleChange = (event) => {

        setValue(event.target.value);
    };
    /* ---------------------------- */
    const [valueTamano, setValueTamano] = React.useState('');

    const handleChangeTamano = (event) => {

        setValueTamano(event.target.value);
    };

    /* ---------------------------- */

    const [valueProteina, setValueProteina] = React.useState('');

    const handleChangeProteina = (event) => {

        setValueProteina(event.target.value);
    };

    /* ---------------------------- */
    const [valueAderezo, setValueAderezo] = React.useState('');

    const handleChangeAderezo = (event) => {

        setValueAderezo(event.target.value);
    };

    /* ---------------------------- */
    const [valueComplemento, setValueComplemento] = React.useState('');

    const handleChangeComplemento = (event) => {

        setValueComplemento(event.target.value);
    };

    /* ---------------------------- */


    const [boxesValues, setBoxesValues] = React.useState([]);

    const handleChangeCheckBox = (event) => {
        const index = boxesValues.indexOf(event.target.value)
        if (index === -1) {
            setBoxesValues([...boxesValues, event.target.value])
        } else {
            setBoxesValues(boxesValues.filter((value) => value !== event.target.value))
        }
    };


    const [checked, setChecked] = useState(true);

    const handleChanges = (event) => {
        setChecked(event.target.checked);

    };

    const handleCancel = () => {
        handleClose()
    };

    return (

        <Dialog open={open}   >

            <DialogTitle>{nombre}</DialogTitle>
            <DialogContent>

                {tipo === "multi"
                    ? <FormControl>
                        <FormLabel>Opciones</FormLabel>
                        <FormGroup row>
                            {open ? opciones.map((element, i) => {

                                if (element.nombreOpcion === "tamaño") {
                                    return (

                                        <FormControl key={i}>
                                            <p>{element.nombreOpcion}</p>
                                            <RadioGroup
                                                aria-labelledby="demo-controlled-radio-buttons-group"
                                                name="controlled-radio-buttons-group"
                                                value={valueTamano}
                                                onChange={handleChangeTamano}
                                                row
                                            >

                                                {element.opciones.map((element, i) => {

                                                    return (
                                                        <FormControlLabel key={i} value={element} control={<Radio />} label={element} />
                                                    )
                                                })}

                                            </RadioGroup>
                                        </FormControl>


                                    )
                                }


                                if (element.nombreOpcion === "proteina") {
                                    return (

                                        <FormControl key={i}>
                                            <p>{element.nombreOpcion}</p>
                                            <RadioGroup
                                                aria-labelledby="demo-controlled-radio-buttons-group"
                                                name="controlled-radio-buttons-group"
                                                value={valueProteina}
                                                onChange={handleChangeProteina}
                                                row
                                            >

                                                {element.opciones.map((element, i) => {

                                                    return (
                                                        <FormControlLabel key={i} value={element} control={<Radio />} label={element} />
                                                    )
                                                })}

                                            </RadioGroup>
                                        </FormControl>


                                    )
                                }
                                if (element.nombreOpcion === "aderezo") {
                                    return (

                                        <FormControl key={i}>
                                            <p>{element.nombreOpcion}</p>
                                            <RadioGroup
                                                aria-labelledby="demo-controlled-radio-buttons-group"
                                                name="controlled-radio-buttons-group"
                                                value={valueAderezo}
                                                onChange={handleChangeAderezo}
                                                row
                                            >

                                                {element.opciones.map((element, i) => {

                                                    return (
                                                        <FormControlLabel key={i} value={element} control={<Radio />} label={element} />
                                                    )
                                                })}

                                            </RadioGroup>
                                        </FormControl>


                                    )
                                }

                                if (element.nombreOpcion === "complemento") {
                                    return (

                                        <FormControl key={i}>
                                            <p>{element.nombreOpcion}</p>
                                            <RadioGroup
                                                aria-labelledby="demo-controlled-radio-buttons-group"
                                                name="controlled-radio-buttons-group"
                                                value={valueComplemento}
                                                onChange={handleChangeComplemento}
                                                row
                                            >

                                                {element.opciones.map((element, i) => {

                                                    return (
                                                        <FormControlLabel key={i} value={element} control={<Radio />} label={element} />
                                                    )
                                                })}

                                            </RadioGroup>
                                        </FormControl>


                                    )
                                }



                                return (
                                    <div key={i}>
                                        <p>{element.nombreOpcion}</p>
                                        <RadioGroup
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group"
                                            value={value}
                                            onChange={handleChange}
                                            row
                                        >
                                            {element.opciones.map((element, i) => {

                                                return (

                                                    <FormControlLabel
                                                        key={i}
                                                        label={element}
                                                        value={element}
                                                        control={<Checkbox checked={boxesValues.includes(element)} onChange={handleChangeCheckBox} />}
                                                    />

                                                )
                                            })}
                                        </RadioGroup>

                                    </div>
                                )
                            }) : null}


                        </FormGroup>
                    </FormControl>
                    : null
                }
                {tipo === "select"
                    ? <FormControl>
                        <FormLabel>Opciones</FormLabel>
                        <FormGroup row>
                            {open ? valores.input.opciones.map((element, i) => {

                                return (
                                    <FormControlLabel
                                        key={i}
                                        label={element}
                                        value={element}
                                        control={<Checkbox checked={boxesValues.includes(element)} onChange={handleChangeCheckBox} />} />
                                )
                            }) : null}

                        </FormGroup>
                    </FormControl>
                    : null

                }

                {tipo === "optional"
                    ? <FormControl>
                        <FormLabel>Opciones</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={value}
                            onChange={handleChange}
                            row
                        >
                            {open ? valores.input.opciones.map((element, i) => {

                                return (
                                    <FormControlLabel key={i} value={element} control={<Radio />} label={element} />
                                )
                            }) : null}

                        </RadioGroup>
                    </FormControl>
                    : null
                }

            </DialogContent>
            <DialogActions>

                <Button onClick={handleCancel}>Cancel</Button>
                <Button onClick={handleCancel}>Subscribe</Button>
            </DialogActions>
        </Dialog>

    )
}


export default Modal
