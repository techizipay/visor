import React, {useContext} from 'react';
import {NavSideFP} from '../components/NavSideFP';
import {FormContext} from '../context/formContext';

import {Register} from '../components/MiCuentaWeb/FormPago/Register';
import {RegisterUpdate} from '../components/MiCuentaWeb/FormPago/RegisterUpdate';
import {RegisterUpdatePay} from '../components/MiCuentaWeb/FormPago/RegisterUpdatePay';
import {RegisterPay} from '../components/MiCuentaWeb/FormPago/RegisterPay';
import {RegisterSubscribe} from '../components/MiCuentaWeb/FormPago/RegisterSubscribe';
import {RegisterPaySubscribe} from '../components/MiCuentaWeb/FormPago/RegisterPaySubscribe';
import {Payment} from '../components/MiCuentaWeb/FormPago/Payment';
import {PaymentToken} from '../components/MiCuentaWeb/FormPago/PaymentToken';
import {Subscribe} from '../components/MiCuentaWeb/FormPago/Subscribe';
import {AskRegisterPay} from '../components/MiCuentaWeb/FormPago/AskRegisterPay';
import {Home} from '../components/MiCuentaWeb/FormPago/Home';
import './css/views.css';

function getForm(nameForm) {
    switch (nameForm) {
        case 'REGISTER':
            return <Register />        
        case 'REGISTER_UPDATE':
            return <RegisterUpdate />   
        case 'REGISTER_PAY':
            return <RegisterPay />     
        case 'REGISTER_UPDATE_PAY':
            return <RegisterUpdatePay />                 
        case 'REGISTER_SUBSCRIBE':
            return <RegisterSubscribe />     
        case 'REGISTER_PAY_SUBSCRIBE':
            return <RegisterPaySubscribe />                        
        case 'PAYMENT':
            return <Payment />
        case 'PAYMENTTOKEN':
            return <PaymentToken />               
        case 'SUBSCRIBE':
            return <Subscribe />    
        case 'ASK_REGISTER_PAY':
            return <AskRegisterPay />       
        default:
            return <Home />                
    }
}
  
export const FPFormView = () => {
    const {form} = useContext(FormContext); 
 
    return (
        <div className="d-flex flex-row"> 
            <NavSideFP />
            <div className="derecha">
                {
                    getForm(form) 
                }
            </div>
        </div>
    )
}
