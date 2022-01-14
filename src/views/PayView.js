import React, { useState, useContext } from 'react'
import FormIncrustado from '../components/Form/FormIncrustado';
import { PayContext } from '../context/payContext';  
 
import FormData from '../components/FormData';

export const PayView = () => {
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');
  const { order } = useContext(PayContext);  

  const showFormPay = async (data) => {
     let ind = true;
     if(order == null){
      ind = false;
      setError('Debe ingresar los datos de la solicitud de pago')
     }
     else{
      if(order.user_name == null){
        ind = false;
        setError('Debe ingresar el Nombre del comprador');
      }
      if(order.user_ape == null){
        ind = false;
        setError('Debe ingresar el Apellido del comprador');
      }
        if(order.user_email == null){
          ind = false;
          setError('Debe ingresar el Email del comprador');
        }

        let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (!emailRegex.test(order.user_email)) {
          ind = false;
          setError('Debe ingresar un Email válido');
        } 
       
        if(order.order_total == null){
          ind = false;
          setError('Debe seleccionar el Total de la compra');
        }  
     } 

     if(ind == true){
      setCargando(false);
     }

  } 

  function validarEmail(valor) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)){
     return true;
    } else {
     return false;
    }
  }
 
    return (

          <div  style={{marginTop: '6rem', marginBottom: '1rem'}}>
            <div className='row mt-2 d-flex justify-content-center'>
              <div className='col-12 col-sm-6 p-0'>
                <FormData/> 
                <div className="d-flex justify-content-center">  
                  <button style={{ background: '#ff1e16', color:'white',width: '390px'}} className="btn btn-danger btn-block" onClick={(ev) => {showFormPay()}}>Ir a Pagar</button>
                </div>
              </div>
              <div className='col-12 col-sm-6 p-0'>
              <div className='row mt-2 d-flex justify-content-center'>
                  <div className="d-flex justify-content-center mt-4">  
                    <h2>Caso: Pago Único</h2>
                  </div>
                    {
                        cargando ? (
                          <div className="d-flex justify-content-center mt-4">  
                              <h5 style={{color:'#ff1e16'}}>{error}</h5>
                          </div>
                        ) : (
                              <FormIncrustado />
                        ) 
                    }

                </div>
              </div>
            </div>
          </div> 
    )
}
