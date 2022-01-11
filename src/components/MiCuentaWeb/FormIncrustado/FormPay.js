import React, {useEffect, useState, useContext} from 'react';
import {FormContext} from '../../../context/formContext';
import {useHistory} from 'react-router-dom';
import KRGlue from "@lyracom/embedded-form-glue"; 

export const FormPay = ({order}) => { 
    const history = useHistory();
    const [error, setError] = useState(''); 
    const {setresultFI} = useContext(FormContext);
 
    useEffect(() => {
        onCheckout(order)
    }, [])

    async function onCheckout(order)
    { 
        let formToken = await getFormToken(order);
        displayPaymentForm(formToken);
       
    }
 
    const  getFormToken = async (order) => { 
        var config = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(order)
        };  
        const response = await fetch("http://127.0.0.1:5000/createpayment", config);
        const content = await response.json(); 
        return content.content; 
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

        KR1.onBrandChanged(onBrandChanged); 
 
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
            setresultFI(event.clientAnswer);

            
         
            return history.push(`/formembeddedconfirm`)
          } else {
            // Show error message to the user
            console.log("error")
          }
      }
 
      function onError(event) {  
            console.log(event) 
      }

      function onBrandChanged(event) {  
        console.log(event) 
        }
      
    return (
    <div> 
        <h2>Charge/CreatePayment</h2>
        <h5>Crear una nueva transacción con el formulario incrustado</h5>
        <div className="container"> 
          <div id="myPaymentForm">  
          </div> 
          <div>{error}</div>
        </div>
        
      </div>
    )
}
