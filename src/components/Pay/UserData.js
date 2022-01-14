import React, { useState, useEffect, useContext } from 'react';
import { PayContext } from '../../context/payContext';  
import { useForm } from "react-hook-form";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function UserData({handleNext}) { 
    const { carrito, order,setOrderUser } = useContext(PayContext); 

    let { register, handleSubmit, errors} = useForm();

    const [correo, setCorreo] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [documento, setDocumento] = useState("");
    const [telefono, setTelefono] = useState(""); 

    
    const CalcularTotal = () => { 
        let sub = 0;
        carrito.forEach((car) => { 
            sub += car.productTotal;
        }) 
        sub = redondear(sub); 
        return sub; 
    }

    const getUserData = async () => { 
        if(order != null){
            setCorreo(order.user_email); 
            setNombre(order.user_name);
            setApellido(order.user_ape);
            setDocumento(order.user_doc);
            setTelefono(order.user_phone);  
            console.log("ingresó")
        } 
    }  

    const redondear = (num) => {
        return parseFloat(num).toFixed(2);
    }

    const manejarSubmit  = async (data) => {    
        setOrderUser(correo,nombre, apellido, documento, telefono, CalcularTotal()); 
        CalcularTotal(); 
        handleNext();
    }

    useEffect(() => {
        getUserData();
    }, [])
  
    return (
        <div className="d-flex justify-content-center">
            <div style={{width: '600px'}}>
                <div className="card mt-3">
                    <div className="card-body">
                        <h2 className="card-title">
                            Registro
                        </h2>
                        <form onSubmit={handleSubmit(manejarSubmit)}>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '62ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            >
                                <div>
                                    <TextField
                                    required
                                    id="outlined-required"
                                    label="Correo"
                                    defaultValue=""
                                    onChange={(ev) => {setCorreo(ev.target.value)}} 
                                    size="small"
                                    /> 
                                </div> 
                            </Box>

                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '30ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            > 
                            <div>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Nombre"
                                    defaultValue=""
                                    onChange={(ev) => {setNombre(ev.target.value)}}
                                    size="small"
                                /> 
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Apellido"
                                    defaultValue=""
                                    onChange={(ev) => {setApellido(ev.target.value)}}
                                    size="small"
                                /> 
                            </div>
                            <div>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Documento de Identidad"
                                    defaultValue=""
                                    onChange={(ev) => {setDocumento(ev.target.value)}}
                                    size="small"
                                /> 
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Teléfono/Móvil"
                                    defaultValue=""
                                    onChange={(ev) => {setTelefono(ev.target.value)}}
                                    size="small"
                                /> 
                            </div>
                            </Box>
                            <button type="submit" style={{ background: '#ff1e16'}} className="btn btn-danger btn-lg btn-block">
                                Siguiente
                            </button>
                        </form>
 
                    </div>
                </div>
            </div>
        </div>
    )
}
