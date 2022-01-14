import React, {useContext, useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import { PayContext } from '../context/payContext';
import {FormConfirmation} from '../components/MiCuentaWeb/FormIncrustado/FormConfirmation';
import '../components/css/Confirmation.css'; 

export const ConfirmationView = () => { 
    const { order, limpiarOrder } = useContext(PayContext); 
  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState(''); 
    const [total, setTotal] = useState(0);

    const getData = () =>{  
    
        limpiarOrder(); 
    }
  
    useEffect(() => {
        getData();
    }, [])
 
    return (
        <div className="d-flex justify-content-center">
            <div style={{width: '600px', marginTop: '5rem', marginBottom: '1rem'}}>

            <div className="card mt-3">
                <div className="d-flex justify-content-center clogo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Check_green_icon.svg" alt="..." className="confirmation"/>
                </div>
                <div className="card-body">
                    <h3 className="card-title">
                        Gracias por su pedido!
                    </h3>

                    <div>
                        {/* <h5>Hola {name}</h5> */}
                        {/* <p>Gracias por comprar con nosotros. Te enviaremos una confirmación a {email} cuando tus artículos se envíen.</p> */}
                        <p>Gracias por comprar con nosotros. Te enviaremos una confirmación cuando tus artículos se envíen.</p>
                    </div>
  

                    <div>
                        <p>Esperamos volver a verte pronto.</p>
                    </div>

                    <Link className="btn btn-primary btn-block" to="/home">Seguir Comprando</Link>
                    <br></br>

                    <FormConfirmation/>
                    
                </div>
            </div>

            <div className="d-flex justify-content-center clogo">
                <img src="https://www.izipay.pe/_nuxt/dist/img/logo.8e6aa05.png" alt="..."  className="logo"/> 
            </div>

            </div>
        </div>
    )
    
}

 