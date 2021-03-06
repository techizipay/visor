import React, { useState, useEffect, useContext } from 'react'; 
import { PayContext } from '../../context/payContext'; 
import '../css/Confirmation.css'; 
import KRGlue from "@lyracom/embedded-form-glue"; 
import {useHistory} from 'react-router-dom';
import {FormContext} from '../../context/formContext';


import {getFormToken} from '../../services/lyra';


export default function FormPopIn() { 
    const history = useHistory();
    const { order } = useContext(PayContext); 
    const {setresultFI} = useContext(FormContext);
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
            "amount":   order.order_total,
            "currency": "PEN",
            "orderId":  "1",
            "customer": {
                "email": order.user_email, 
                "billingDetails": {
                    "firstName": order.user_name,
                    "lastName": order.user_ape
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
    
        KR.setFormConfig({formToken: formToken})  
        KR.setFormConfig({"kr-language": "es-ES"})   
        KR.setFormConfig({"kr-popin": ""})   

        let { KR: KR1, result} = await KR.addForm("#myPaymentForm") 
       
        KR1.showForm(result.formId);  

        KR1.onSubmit(onPaid);
        KR1.onError(onError); 
        KR1.onFormCreated(onFormCreated);
    }

 
    function onFormCreated(event) {  
        var botonpopin = document.getElementsByClassName("kr-payment-button");
        botonpopin[0].innerHTML = botonpopin[0].innerHTML.replace(",",".");  
        botonpopin[0].style.backgroundColor = "#ff1e16";
        botonpopin[0].style.color = "white";

        var botonpop = document.getElementsByClassName("kr-popin-button");
        botonpop[0].innerHTML = botonpopin[0].innerHTML.replace(",",".");  
        botonpop[0].style.backgroundColor = "#ff1e16";
        botonpop[0].style.color = "white";

        var divDiferido = document.getElementsByClassName("kr-first-installment-delay");
        divDiferido[0].style.display = 'none';

        var divCuotas = document.getElementsByClassName("kr-installment-number");
        divCuotas[0].style.display = 'none'; 

        var divMCW = document.getElementsByClassName("kr-popin-modal-footer");
        divMCW[0].style.display = 'none'; 

    }

    function onPaid(event) { 
        if (event.clientAnswer.orderStatus === "PAID") { 
            setresultFI(event.clientAnswer); 
            return history.push(`/formembeddedconfirm`)
             
          } else {
            // Show error message to the user
            console.log("error")
          }
      }
 
    function onError(event) {  
           console.log(event); 

           alert(event.detailedErrorCode + ' - ' + event.detailedErrorMessage);
    }


    return ( 

        <div className="d-flex justify-content-center">
            <div style={{width: '360px', marginBottom: '1rem'}}>
            <div className="card mt-3">
                <div className="card-body">

                    <div className="container"> 
                        <div id="myPaymentForm"></div> 
                        <div>{error}</div>
                    </div>  
                   
                </div>
            </div>
            </div>
        </div>
  

    )
}
