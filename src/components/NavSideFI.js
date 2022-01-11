import React, { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'; 
import {Link} from 'react-router-dom';
import {FormContext} from '../context/formContext';
import '../views/css/views.css';

export const NavSideFI = () => {
    const {setFormPago} = useContext(FormContext);

    const setFormPagoData = (form) => { 
        setFormPago(form);
    }

    return (
        <div className="izquierda">
            <Accordion defaultActiveKey="0"> 
                <Card>
                    <Card.Header>  
                        <Link onClick={() => setFormPagoData('PAYMENT')} to="/formembedded">CreatePayment</Link> 
                    </Card.Header>   
                    <Card.Header>  
                        <Link onClick={() => setFormPagoData('REGISTER')} to="/formembedded">CreateToken</Link> 
                    </Card.Header>   
                </Card> 
            </Accordion>
        </div>
    )
}
