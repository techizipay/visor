import React from 'react';
import Card from 'react-bootstrap/Card';

import './css/views.css';
 
 
export const HomeView = () => {
    return (
            <div className="d-flex justify-content-center">
                <div style={{width: '1000px', marginTop: '5rem', marginBottom: '1rem'}}>
    
                <div className="card mt-3">
                        
                        <div className="card-body">
                            <div className='mb-4'>
                            <h3 className="card-title">
                                 Integra la pasarela de pago más segura y estable a tu negocio online. 
                            </h3>
                            </div>
                            <div className="row mt-2 d-flex justify-content-center">

                                    <div className="col-12 col-sm-6 col-lg-3 p-0" >  
                                        <div className="card m-1 p-0"> 
                                            <Card.Header>Acepta todas las tarjetas</Card.Header> 
                                            <Card.Img variant="top" src="https://www.izipay.pe/_nuxt/dist/img/tarjets.74e78af.png" alt="..." className="img" />
                                            <div className="card-body">
                                                <Card.Text>Cobra con Visa, Mastercard, Amex, Diners, Otros.</Card.Text>   
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-6 col-lg-3 p-0" > 
                                        <div className="card m-1 p-0"> 
                                            <Card.Header>Fácil integración</Card.Header> 
                                            <Card.Img variant="top" src="https://www.izipay.pe/_nuxt/dist/img/integration.a1c45d4.png" alt="..." className="img" />
                                            <div className="card-body">
                                                <Card.Text>Te acompañamos en el proceso de integración.</Card.Text>   
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-6 col-lg-3 p-0" > 
                                        <div className="card m-1 p-0"> 
                                            <Card.Header>Seguridad</Card.Header> 
                                            <Card.Img variant="top" src="https://www.izipay.pe/_nuxt/dist/img/security.1a749ae.png" alt="..." className="img" />
                                            <div className="card-body">
                                                <Card.Text>Contamos con un sistema de protección contra fraudes.</Card.Text>   
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-6 col-lg-3 p-0" > 
                                        <div className="card m-1 p-0"> 
                                            <Card.Header>Estabilidad</Card.Header> 
                                            <Card.Img variant="top" src="https://www.izipay.pe/_nuxt/dist/img/stability.6ad3bfa.png" alt="..." className="img" />
                                            <div className="card-body">
                                                <Card.Text>Tenemos un sistema de ventas seguro y estable.</Card.Text>   
                                            </div>
                                        </div>   
                                    </div>

                            </div>

                        </div>
                    </div> 
                        
                    <div className="d-flex justify-content-center clogo">
                        <img src="https://raw.githubusercontent.com/techizipay/visor/336750a64b528ddd4b66244415ae51eb9f35d11c/public/logoizipay.png" alt="..."  className="logo"/>  
                    </div>
 
                </div>
            </div>
    )
}
