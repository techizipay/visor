import React, {useContext} from 'react'; 
import {NavSideFI} from '../components/NavSideFI';
import {FormContext} from '../context/formContext';
 
import {PayMarcas} from '../components/PuntoWeb/PayMarcas';
import './css/views.css';

 
  
export const PWFormPay = () => {
    const {form} = useContext(FormContext); 
 
    return (
        <div className="d-flex flex-row"> 
            <NavSideFI />
            <div className="derecha">
                <PayMarcas />
            </div>
        </div>
    )
}
