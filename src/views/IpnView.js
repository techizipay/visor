import React, {useState, useContext, useEffect, Fragment} from 'react'
import {FormContext} from '../context/formContext';
import Loading from "../components/Loading";  
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import {getTransacciones} from '../services/lyra';
import './css/views.css';
 
export const IpnView = () => {
    const {form} = useContext(FormContext); 
    const [cargando, setCargando] = useState(true);


    const [transaccion, setTransaccion] = useState([]);
 
    const getData = async () => {
        let data = await getTransacciones();   
        setTransaccion(data); 
        setCargando(false);
    } 

    useEffect(() => {
        getData(); 
    }, [])

 
    return ( 

        <Fragment>
            {
                cargando ? (
                    <Loading />
                ) : (
                    <div  style={{marginTop: '6rem', marginBottom: '1rem'}}> 
                        <h4 className='texto'>#mcwpayment.herokuapp.com/getipn</h4>
                        <h6 className='texto'>https://mcwpayment.herokuapp.com/getipn</h6> 
                        <br/> 
                        
                        <Accordion defaultActiveKey={['0']} alwaysOpen>
                            {
                            transaccion.map((trans,i) => (
                                <Accordion.Item eventKey={{i}} className='acordion' key={i}>
                                    <Accordion.Header>
                                        <div className='container cabecera'>
                                            <div className='derecha'>Transacción: {trans.transaccionUUID}</div>
                                            <div>Fecha: {trans.createdAt}</div>
                                        </div>
                                        </Accordion.Header> 
                                    <Accordion.Body>
            
                                    <Card border="info" className='viewer'>
                                        <Card.Body>
                                            <Card.Text className='sub'>kr-hash: {trans.transaccionHash}</Card.Text>
                                            <Card.Text>
                                                <pre className='pre'>kr-answer: {trans.transaccionAnswer}</pre>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card> 
            
                                    </Accordion.Body>
                                </Accordion.Item>   
                            ))
                            }
                            
                        </Accordion>  
                    </div>
                )

            }
        </Fragment>  

    ) 

}
