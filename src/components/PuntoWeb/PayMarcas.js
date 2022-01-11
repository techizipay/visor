import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import moment from "moment";  
import {createSignaturePW} from '../../services/signature';

import '../css/components.css';
  
export const PayMarcas = () => {
   
    let timeStamp = moment().add(5, 'hour').format("YYYYMMDDHHmmss"); 
 
    const {register, handleSubmit, errors} = useForm(); 

    const [datos, setData] = useState({
        I1: 4001834,
        I2: 17000189,
        I3 : "22.50", 
        I4 : "PEN",
        I5 : 20210204,
        I6 : 101800,
        I7 : timeStamp,
        I8 : "REG0001",
        I9 : "PER",
        I10 : "AT", 
        I11: ''
    });
  
    const manejarSubmit = async (data) => {  
        delete data.I10;
 
        data = {...data, I1:parseInt(data.I1), I2:parseInt(data.I2), I3:parseFloat(data.I3).toFixed(2), I5:parseInt(data.I5), I6:parseInt(data.I6)}
        let sign = await createSignaturePW(data);   
        setData({...datos, I11: sign})  

        var formulario = document.getElementById("form");
        formulario.submit();
    }

    return (
        <div> 
        <h2>PAYMENT</h2>
        <h5>Pago</h5> 
        <form method="POST"  id="form" action="https://server.punto-web.com/gateway/PagoWebMarcas.asp"  onSubmit={handleSubmit(manejarSubmit)}>
            <div className="input-group">
                <label>Cod Comercio:</label>
                <input type="number" className="form-control" id="I1" name="I1" 
                placeholder="Ingresar Version" ref={register({required:true})} defaultValue={datos.I1} />
                {
                    errors.I1 && errors.I1.type==="required" && (
                        <small className="text-danger">Ingresar Cod Comercio</small>
                    )
                }
            </div> 
            <div className="input-group">
                <label>Nro Referencia:</label>
                <input type="number" className="form-control" id="I2" name="I2" 
                placeholder="Ingresar Action Mode" ref={register({required:true})} defaultValue={datos.I2}/>
                {
                    errors.I2 && errors.I2.type==="required" && (
                        <small className="text-danger">Ingresar Nro Referencia</small>
                    )
                }
            </div>           
            <div className="input-group">
                <label>Monto Transacción:</label>
                <input type="text" className="form-control" id="I3" name="I3" step="any"
                placeholder="Ingresar Version" ref={register({required:true})} defaultValue={datos.I3}/>
                {
                    errors.I3 && errors.I3.type==="required" && (
                        <small className="text-danger">Ingresar Monto Transacción</small>
                    )
                }
            </div>             
            <div className="input-group">
                <label>Moneda Transacción:</label>
                <input type="text" className="form-control" id="I4" name="I4" 
                placeholder="Ingresar Version" ref={register({required:true})} defaultValue={datos.I4}/>
                {
                    errors.I4 && errors.I4.type==="required" && (
                        <small className="text-danger">Ingresar Moneda Transacción</small>
                    )
                }
            </div>              
            <div className="input-group">
                <label>Fecha Transacción:</label>
                <input type="number" className="form-control" id="I5" name="I5" 
                placeholder="Ingresar Version" ref={register({required:true})} defaultValue={datos.I5}/>
                {
                    errors.I5 && errors.I5.type==="required" && (
                        <small className="text-danger">Ingresar Fecha Transacción</small>
                    )
                }
            </div>     
            <div className="input-group">
                <label>Hora Transacción:</label>
                <input type="number" className="form-control" id="I6" name="I6" 
                placeholder="Ingresar Version" ref={register({required:true})} defaultValue={datos.I6}/>
                {
                    errors.I6 && errors.I6.type==="required" && (
                        <small className="text-danger">Ingresar Hora Transacción</small>
                    )
                }
            </div>  

            <div className="input-group">
                <label>Autogenerado:</label>
                <input type="text" className="form-control" id="I7" name="I7" 
                placeholder="Ingresar Version" ref={register({required:true})} defaultValue={datos.I7}/>
                {
                    errors.I7 && errors.I7.type==="required" && (
                        <small className="text-danger">Ingresar Autogenerado</small>
                    )
                }
            </div>
            <div className="input-group">
                <label>Código Cliente:</label>
                <input type="text" className="form-control" id="I8" name="I8" 
                placeholder="Ingresar Version" ref={register({required:true})} defaultValue={datos.I8}/>
                {
                    errors.I8 && errors.I8.type==="required" && (
                        <small className="text-danger">Ingresar Código Cliente</small>
                    )
                }
            </div>
            <div className="input-group"> 
                <label>Pais Transacción:</label>
                <input type="text" className="form-control" id="I9" name="I9" 
                placeholder="Ingresar Version" ref={register({required:false})} defaultValue={datos.I9}/>
                {
                    errors.I9 && errors.I9.type==="required" && (
                        <small className="text-danger">Ingresar Pais Transacción</small>
                    )
                }                
            </div> 
            <div className="input-group">
                <label>Tipo Proceso:</label>
                <input type="text" className="form-control" id="I10" name="I10" 
                placeholder="Ingresar Version" ref={register({required:true})} defaultValue={datos.I10}/>
                {
                    errors.I10 && errors.I10.type==="required" && (
                        <small className="text-danger">Ingresar Tipo Proceso</small>
                    )
                }
            </div> 
            <div>
                <input id="I11" type="hidden" name="I11" defaultValue={datos.I11}/>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
                Pagar
            </button> 
        </form> 

        </div>
    )
}
