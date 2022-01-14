  
    import React, {useContext, useState, useEffect} from 'react';
    import {Link} from "react-router-dom";
    import { PayContext } from '../context/payContext';
    import Modal from 'react-bootstrap/Modal'; 
    import Button from 'react-bootstrap/Button';
    import {FormConfirmation} from '../components/MiCuentaWeb/FormIncrustado/FormConfirmation';
    import '../components/css/Confirmation.css'; 
    
    export const ConfirmationView = () => { 
        const { order, limpiarOrder } = useContext(PayContext); 
        const [modalShow, setModalShow] = React.useState(false); 
    
        const getData = () =>{  
        
            limpiarOrder(); 
        }
      
        useEffect(() => {
            getData();
        }, [])
     
     
        return (
            <div className="d-flex justify-content-center">
                <div style={{width: '600px', marginTop: '5rem', marginBottom: '1rem'}}>
    
                <div className="card mt-3">
                    <div className="d-flex justify-content-center clogo mt-2">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Check_green_icon.svg" alt="..." className="confirmation"/>
                    </div>
                    <div className="card-body">
                        <h3 className="card-title">
                            Gracias por su pedido!
                        </h3>
    
                        <div>
                            {/* <h5>Hola {name}</h5> */}
                            {/* <p>Gracias por comprar con nosotros. Te enviaremos una confirmación a {email} cuando tus artículos se envíen.</p> */}
                            <p>Gracias por comprar con nosotros. Te enviaremos una confirmación cuando tus artículos se envíen.</p>
                        </div>
      
    
                        <div>
                            <p>Esperamos volver a verte pronto.</p>
                        </div>

                        <Button style={{ background: '#ff1e16'}} className="btn-block mb-1" variant="danger" onClick={() => setModalShow(true)}>
                            Ver Objeto de Respuesta
                        </Button> 
 
                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        /> 

                        <Link style={{ background: '#ff1e16'}} className="btn btn-danger btn-block" to="/showipn">Ver Registro de IPN</Link>

                        <Link style={{ background: '#ff1e16'}} className="btn btn-danger btn-block" to="/showpay">Realizar un Nuevo Pago</Link>
                                                
                        
                        </div>
                        </div> 
                        
                        <div className="d-flex justify-content-center clogo">
                            <img src="https://raw.githubusercontent.com/techizipay/visor/336750a64b528ddd4b66244415ae51eb9f35d11c/public/logoizipay.png" alt="..."  className="logo"/>  
                        </div>
 
                </div>
            </div>
        )
        
    }
    
    function MyVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
               Objeto Payment
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormConfirmation/>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }