import React, {useState, useEffect} from 'react'; 
import {useHistory} from 'react-router-dom'; 
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import {getTransacciones} from '../../services/lyra';

export const Ipn = () => {
    const history = useHistory();
    
    const [transaccion, setTransaccion] = useState([]);

    let trans = [];
    const getData = async () => {
        let data = await getTransacciones();   
        setTransaccion(data); 
    } 

    useEffect(() => {
        getData(); 
    }, [])

   
 
    return ( 
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
    )
}
