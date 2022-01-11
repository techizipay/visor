import React, {useContext} from 'react'; 
import {NavSideFI} from '../components/NavSideFI';
import {FormContext} from '../context/formContext';
 
import {CreatePayment} from '../components/MiCuentaWeb/FormIncrustado/CreatePayment';
import {CreateToken} from '../components/MiCuentaWeb/FormIncrustado/CreateToken';
import {Home} from '../components/MiCuentaWeb/FormPago/Home';
import './css/views.css';

function getForm(nameForm) {
    switch (nameForm) {
        case 'PAYMENT':
            return <CreatePayment />        
        case 'REGISTER':
            return <CreateToken />       
        default:
            return <Home />                
    }
}
  
export const FIFormView = () => {
    const {form} = useContext(FormContext); 
 
    return (
        <div className="d-flex flex-row"> 
            <NavSideFI />
            <div className="derecha">
                {
                    getForm(form) 
                }
            </div>
        </div>
    ) 

}
