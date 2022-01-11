import React, {useContext} from 'react';  
import {FormContext} from '../context/formContext';
 
import {Ipn} from '../components/Ipn/Ipn';
import './css/views.css';

 
export const IpnView = () => {
    const {form} = useContext(FormContext); 
 
    return (
        <div> 
            <h2 className='texto'>#mcwpayment.herokuapp.com/getipn</h2>
            <h5 className='texto'>https://mcwpayment.herokuapp.com/getipn</h5>
            <br/> 
            <Ipn /> 
        </div>
    ) 

}