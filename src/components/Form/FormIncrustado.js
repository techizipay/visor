import React, { useState, useEffect, useContext } from 'react'; 
import { PayContext } from '../../context/payContext';
import Card from 'react-bootstrap/Card';
import '../css/Confirmation.css';
import  { Redirect } from 'react-router-dom'  
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import KRGlue from "@lyracom/embedded-form-glue"; 



import {getFormToken} from '../../services/lyra';


export default function FormIncrustado() { 

    const { order, carrito, setOrderGen } = useContext(PayContext); 
    const [error, setError] = useState(''); 
 
    useEffect(() => {
        onCheckout()
    }, [])

    async function onCheckout(order)
    { 
        let formToken = await obtenerFormToken();
        displayPaymentForm(formToken); 
    }

    const obtenerFormToken = async () => {   
        let objOrder = {
            "formAction": "PAYMENT",
            "amount":   order.order_total.replace('.',''),
            "currency": "PEN",
            "orderId":  "1",
            "customer": {
                "email": order.user_email,
                "reference": order.user_email,
                "billingDetails": {
                    "firstName": order.user_name,
                    "lastName": order.user_ape,
                    "phoneNumber": order.user_phone
                  }
            }
        }     
        let result = await getFormToken(objOrder);    
        return result; 
    } 

    async function displayPaymentForm(formToken)
    {
        const endpoint = "https://static.micuentaweb.pe";
        const publicKey = "37286286:testpublickey_Yvs1hGXI24XA9CvjHm9tpoll6pf0Fsy13casTgquLYdmi";
 
        let { KR } =  await KRGlue.loadLibrary(endpoint, publicKey)

        console.log(KR)
    
        KR.setFormConfig({formToken: formToken})  
        KR.setFormConfig({"kr-language": "es-ES"})   

        let { KR: KR1, result} = await KR.addForm("#myPaymentForm") 
       
        KR1.showForm(result.formId);  

        KR1.onSubmit(onPaid);
        KR1.onError(onError); 
        KR1.onFormCreated(onFormCreated);
    }

 
    function onFormCreated(event) {  
        var botonpopin = document.getElementsByClassName("kr-payment-button");
        botonpopin[0].innerHTML = botonpopin[0].innerHTML.replace(",",".");

        var botonform = document.getElementsByClassName("kr-popin-button");
        botonform[0].innerHTML = botonform[0].innerHTML.replace(",",".");

        var divDiferido = document.getElementsByClassName("kr-first-installment-delay");
        divDiferido[0].style.display = 'none';

        var divMCW = document.getElementsByClassName("kr-popin-modal-footer");
        divMCW[0].style.display = 'none'; 

    }

    function onPaid(event) { 
        if (event.clientAnswer.orderStatus === "PAID") {
            console.log(JSON.stringify(event.clientAnswer));
             
          } else {
            // Show error message to the user
            console.log("error")
          }
      }
 
    function onError(event) {  
           console.log(event) 
    }


    return (
        <div className="d-flex justify-content-center">
            <div>  
                <h5>Pago con tarjeta de débito y/o crédito</h5>
                <div className="container"> 
                    <div id="myPaymentForm"></div> 
                    <div>{error}</div>
                </div> 
            </div>
        </div> 
    )
}
