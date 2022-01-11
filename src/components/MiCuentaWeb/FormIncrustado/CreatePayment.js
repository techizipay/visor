import React, {useState, useContext} from 'react';
import {useForm} from 'react-hook-form'; 
import {useHistory} from 'react-router-dom';
import {FormContext} from '../../../context/formContext';

export const CreatePayment = () => {
    const history = useHistory();
    const {register, handleSubmit, errors} = useForm();  
    const {setOrderPay} = useContext(FormContext);

    const [datos] = useState({
        amount: "15000",
        currency: "PEN",
        orderId : "Order123",
        customer: {
            email : "crios@izipay.pe"
        } 
    });     

    const manejarSubmit = async (data) => {   
        let objOrder = {
            "formAction": data.formAction,
            "amount":   data.amount,
            "currency": data.currency,
            "orderId":  data.orderId,
            "customer": {
                "email": data.email
            }
        }     
        setOrderPay(objOrder);
        return history.push(`/formembeddedpay`)

    }
  
 
    return (
        <div> 
        <h2>Charge/CreatePayment</h2>
        <h5>Crear una nueva transacción con el formulario incrustado</h5>
        <div className="container">

        <form className="mb-2" method="POST"  id="form" onSubmit={handleSubmit(manejarSubmit)}>
            <div className="input-group">
                <label>Acción:</label>
                <select name="formAction" className="form-control"
                 ref={register({required:false})} > 
                     <option value="PAYMENT">PAYMENT</option>
                     <option value="REGISTER_PAY">REGISTER_PAY</option>
                     <option value="ASK_REGISTER_PAY">ASK_REGISTER_PAY</option>
                     <option value="SILENT">SILENT</option>
                 </select>
            </div>
            <div className="input-group">
                <label>Monto:</label>
                <input type="text" className="form-control" id="amount" name="amount" 
                placeholder="Ingresar Monto" ref={register({required:true})} defaultValue={datos.amount}/>
                {
                    errors.amount && errors.amount.type==="required" && (
                        <small className="text-danger">Ingresar Monto</small>
                    )
                }
            </div>     
            <div className="input-group">
                <label>Moneda:</label>
                <input type="text" className="form-control" id="currency" name="currency" 
                placeholder="Ingresar Moneda" ref={register({required:true})} defaultValue={datos.currency}/>
                {
                    errors.currency && errors.currency.type==="required" && (
                        <small className="text-danger">Ingresar Moneda</small>
                    )
                }
            </div>  
            <div className="input-group">
                <label>Order Id:</label>
                <input type="text" className="form-control" id="orderId" name="orderId" 
                placeholder="Ingresar Order Id" ref={register({required:false})} defaultValue={datos.orderId}/>
            </div>            
            <div className="input-group"  id="customer" >
                <label>Email:</label> 
                <input type="text" className="form-control" id="email" name="email" 
                placeholder="Ingresar Email" ref={register({required:false})} defaultValue={datos.customer.email}/> 
            </div>      
            <button type="submit" className="btn btn-primary btn-block">
                Pagar
            </button> 
        </form> 
        </div>
      </div>
    )
}
