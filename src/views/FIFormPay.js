import React, {useContext} from 'react'; 
import {NavSideFI} from '../components/NavSideFI';
import {FormContext} from '../context/formContext';
 
import {FormPay} from '../components/MiCuentaWeb/FormIncrustado/FormPay';
import './css/views.css';

 
  
export const FIFormPay = () => {
    const {order} = useContext(FormContext); 
 
    return (
        <div className="d-flex flex-row"> 
            <NavSideFI />
            <div className="derecha">
                <FormPay order={order}/>
            </div>
        </div>
    )
}
