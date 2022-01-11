import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import moment from "moment"; 
import {createSignature} from '../../../services/signature';

import '../../css/components.css'

export const Subscribe = () => {
   
    let fecha = moment().add(5, 'hour').format("YYYYMMDDHHmmss"); 
 
    const {register, handleSubmit, errors} = useForm(); 

    const [datos, setData] = useState({
        vads_version: "V2",
        vads_action_mode: "INTERACTIVE",  
        vads_ctx_mode : "TEST",  
        vads_page_action : "SUBSCRIBE", 
        vads_site_id : "37286286",
        vads_identifier : '',
        vads_trans_date : fecha,  
        vads_sub_amount : "5124",
        vads_sub_currency : "604", 
        vads_sub_effect_date : "20210201",
        vads_sub_desc : "RRULE:FREQ=MONTHLY;INTERVAL=1;BYMONTHDAY=1", 
        vads_url_return : "https://www.google.com/",
        vads_cust_email : "crios@izipay.pe",
        signature: ''
    });
  
    const manejarSubmit = async (data) => {  
        let sign = await createSignature(data); 
        setData({...datos, signature: sign})  
        var formulario = document.getElementById("form");
        formulario.submit();
    }

    return (
        <div> 
        <h2>SUBSCRIBE</h2>
        <h5>Uso de un token para suscribirse a una recurrencia</h5>
        {/* Agregar para mostrar formulario en un iframe = target="nameFrame" */} 
        <form method="POST"  id="form" action="https://secure.micuentaweb.pe/vads-payment/"  onSubmit={handleSubmit(manejarSubmit)}>
            <div className="input-group">
                <label>Versión:</label>
                <input type="text" className="form-control" id="vads_version" name="vads_version" 
                placeholder="Ingresar Version" ref={register({required:true})} defaultValue={datos.vads_version} />
                {
                    errors.vads_version && errors.vads_version.type==="required" && (
                        <small className="text-danger">Ingresar Versión</small>
                    )
                }
            </div> 
            <div className="input-group">
                <label>Action Mode:</label>
                <input type="text" className="form-control" id="vads_action_mode" name="vads_action_mode" 
                placeholder="Ingresar Action Mode" ref={register({required:true})} defaultValue={datos.vads_action_mode}/>
                {
                    errors.vads_action_mode && errors.vads_action_mode.type==="required" && (
                        <small className="text-danger">Ingresar Action Mode</small>
                    )
                }
            </div>           
            <div className="input-group">
                <label>CTX Mode:</label>
                <input type="text" className="form-control" id="vads_ctx_mode" name="vads_ctx_mode" 
                placeholder="Ingresar Version" ref={register({required:true})} defaultValue={datos.vads_ctx_mode}/>
                {
                    errors.vads_ctx_mode && errors.vads_ctx_mode.type==="required" && (
                        <small className="text-danger">Ingresar CTX Mode</small>
                    )
                }
            </div>     
            <div className="input-group">
                <label>Page Actión:</label>
                <input type="text" className="form-control" id="vads_page_action" name="vads_page_action" 
                placeholder="Ingresar Version" ref={register({required:true})} defaultValue={datos.vads_page_action}/>
                {
                    errors.vads_page_action && errors.vads_page_action.type==="required" && (
                        <small className="text-danger">Ingresar Page Actión</small>
                    )
                }
            </div>  
            <div className="input-group">
                <label>Email:</label>
                <input type="text" className="form-control" id="vads_cust_email" name="vads_cust_email" 
                placeholder="Ingresar Version" ref={register({required:true})} defaultValue={datos.vads_cust_email}/>
                {
                    errors.vads_cust_email && errors.vads_cust_email.type==="required" && (
                        <small className="text-danger">Ingresar Email</small>
                    )
                }
            </div>                 
            <div className="input-group">
                <label>Token:</label>
                <input type="text" className="form-control" id="vads_identifier" name="vads_identifier" 
                placeholder="Ingresar Version" ref={register({required:true})} defaultValue={datos.vads_identifier}/>
                {
                    errors.vads_identifier && errors.vads_identifier.type==="required" && (
                        <small className="text-danger">Ingresar Token</small>
                    )
                }
            </div> 
            <div className="input-group">
                <label>Monto Recurrencia:</label>
                <input type="text" className="form-control" id="vads_sub_amount" name="vads_sub_amount" 
                placeholder="Ingresar Version" ref={register({required:true})} defaultValue={datos.vads_sub_amount}/>
                {
                    errors.vads_sub_amount && errors.vads_sub_amount.type==="required" && (
                        <small className="text-danger">Ingresar Monto Recurrencia</small>
                    )
                }
            </div>            
            <div className="input-group">
                <label>Moneda Recurrencia:</label>
                <input type="text" className="form-control" id="vads_sub_currency" name="vads_sub_currency" 
                placeholder="Ingresar Version" ref={register({required:true})} defaultValue={datos.vads_sub_currency}/>
                {
                    errors.vads_sub_currency && errors.vads_sub_currency.type==="required" && (
                        <small className="text-danger">Ingresar Moneda Recurrencia</small>
                    )
                }
            </div>  
            <div className="input-group">
                <label>Fecha Efectiva:</label>
                <input type="text" className="form-control" id="vads_sub_effect_date" name="vads_sub_effect_date" 
                placeholder="Ingresar Version" ref={register({required:true})} defaultValue={datos.vads_sub_effect_date}/>
                {
                    errors.vads_sub_effect_date && errors.vads_sub_effect_date.type==="required" && (
                        <small className="text-danger">Ingresar Fecha Efectiva</small>
                    )
                }
            </div>
            <div className="input-group">
                <label>Regla Recurrencia:</label>
                <input type="text" className="form-control" id="vads_sub_desc" name="vads_sub_desc" 
                placeholder="Ingresar Version" ref={register({required:true})} defaultValue={datos.vads_sub_desc}/>
                {
                    errors.vads_sub_desc && errors.vads_sub_desc.type==="required" && (
                        <small className="text-danger">Ingresar Regla Recurrencia</small>
                    )
                }
            </div>            
            <div className="input-group">
                <label>Código Comercio:</label>
                <input type="text" className="form-control" id="vads_site_id" name="vads_site_id" 
                placeholder="Ingresar Version" ref={register({required:true})} defaultValue={datos.vads_site_id}/>
                {
                    errors.vads_site_id && errors.vads_site_id.type==="required" && (
                        <small className="text-danger">Ingresar Código Comercio</small>
                    )
                }
            </div>
            <div className="input-group"> 
                <label>Fecha:</label>
                <input type="text" className="form-control" id="vads_trans_date" name="vads_trans_date" 
                placeholder="Ingresar Version" ref={register({required:false})} defaultValue={datos.vads_trans_date}/>
            </div>            
            <div className="input-group">
                <label>Página de Retorno:</label>
                <input type="text" className="form-control" id="vads_url_return" name="vads_url_return" 
                placeholder="Ingresar Version" ref={register({required:true})} defaultValue={datos.vads_url_return}/>
                {
                    errors.vads_url_return && errors.vads_url_return.type==="required" && (
                        <small className="text-danger">Ingresar Página de Retorno</small>
                    )
                }
            </div>
            <div>
                <input id="signature" type="hidden" name="signature" defaultValue={datos.signature}/>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
                Pagar
            </button> 
        </form>

        {/* <iframe name="nameFrame" width="600" height="550" scrolling="no" /> */}

        </div>
    )
}
