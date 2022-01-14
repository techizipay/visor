import React, { useState, useEffect, useContext } from 'react'; 
import { PayContext } from '../../context/payContext';
import Card from 'react-bootstrap/Card';
import '../css/Confirmation.css';
import  { Redirect } from 'react-router-dom'  
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form";


export default function ConfirmData({handleNext}) { 
    const { order } = useContext(PayContext); 
    const [ myorder, setMyOrder] = useState([]);  
    let { register, handleSubmit, errors} = useForm();


    console.log(order);
 
    const showData = () =>{  
        setMyOrder(order); 
    }
     
    const manejarSubmit  = async (data) => {     
        handleNext();
    }

    useEffect( async() => { 
        showData();
    }, [])

    return (
        <div className="d-flex justify-content-center">
            <div className="d-flex flex-column" style={{width: '800px'}}>
                    <br></br>
                   
                    <div>
                        <h4 className="card-title">Revisar tu pedido</h4>
                    </div>

                    <form onSubmit={handleSubmit(manejarSubmit)}> 
                
                        <div className="card d-flex justify-content-center flex-row">
                            <div className="card-body">
                                <h6 className="card-title">Datos del Usuario</h6>
                                <div className="form-group">
                                    <p className="texto">{myorder.user_name}</p>
                                    <p className="texto">{myorder.user_email}</p>
                                    <p className="texto">{myorder.user_phone}</p>
                                </div> 
                            </div>
                            <div className="card-body">
                                <h6 className="card-title">Resumen del Pedido</h6>
                                <div className="form-group">
                                    <table className="table"> 
                                        <tbody> 
                                            <tr>
                                                <th>SubTotal</th>
                                                <th className="textoI">{myorder.order_total}</th>
                                            </tr>
                                            <tr>
                                                <th>Costos de Envío</th>
                                                <th className="textoI">0.00</th>
                                            </tr>
                                            <tr>
                                                <th>Total</th>
                                                <th className="textoI">{myorder.order_total}</th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>  
                            </div>
                        </div>          

                        <button type="submit" style={{ background: '#ff1e16'}} className="btn btn-danger btn-lg btn-block">
                            Siguiente
                        </button>
                    </form>
                    
            </div> 
         </div> 
    )
}
