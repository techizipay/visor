import React, {useContext} from 'react';  
import {FormContext} from '../context/formContext';
 
import {Ipn} from '../components/Ipn/Ipn';
import './css/views.css';

 
export const IpnView = () => {
    const {form} = useContext(FormContext); 
 
    return ( 
        <div  style={{marginTop: '6rem', marginBottom: '1rem'}}> 
                <h4 className='texto'>#mcwpayment.herokuapp.com/getipn</h4>
                <h6 className='texto'>https://mcwpayment.herokuapp.com/getipn</h6> 
            <br/> 
            <Ipn /> 
        </div>
    ) 

}
