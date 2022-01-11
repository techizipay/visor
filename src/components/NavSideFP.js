import React, { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'; 
import {Link} from 'react-router-dom';
import {FormContext} from '../context/formContext';
import '../views/css/views.css';

export const NavSideFP = () => {
    const {setFormPago} = useContext(FormContext);

    const setFormPagoData = (form) => { 
        setFormPago(form);
    }

    return (
        <div className="izquierda">
            <Accordion defaultActiveKey="0"> 
                <Card>
                    <Card.Header>  
                        <Link onClick={() => setFormPagoData('REGISTER')} to="/formpay">Register</Link> 
                    </Card.Header>       
                    <Card.Header>  
                        <Link onClick={() => setFormPagoData('REGISTER_UPDATE')} to="/formpay">Register Update</Link> 
                    </Card.Header>      
                    <Card.Header>  
                        <Link onClick={() => setFormPagoData('REGISTER_PAY')} to="/formpay">Register Pay</Link> 
                    </Card.Header>      
                    <Card.Header>  
                        <Link onClick={() => setFormPagoData('REGISTER_UPDATE_PAY')} to="/formpay">Register Update Pay</Link> 
                    </Card.Header>                        
                    <Card.Header>  
                        <Link onClick={() => setFormPagoData('REGISTER_SUBSCRIBE')} to="/formpay">Register Subscribe</Link> 
                    </Card.Header>      
                    <Card.Header>  
                        <Link onClick={() => setFormPagoData('REGISTER_PAY_SUBSCRIBE')} to="/formpay">Register Pay Subscribe</Link> 
                    </Card.Header>   
                    <Card.Header>  
                        <Link onClick={() => setFormPagoData('PAYMENT')} to="/formpay">Payment</Link>  
                    </Card.Header> 
                    <Card.Header>  
                        <Link onClick={() => setFormPagoData('PAYMENTTOKEN')} to="/formpay">Payment Token</Link> 
                    </Card.Header>
                    <Card.Header>  
                        <Link onClick={() => setFormPagoData('SUBSCRIBE')} to="/formpay">Subscribe</Link> 
                    </Card.Header>
                    <Card.Header>  
                        <Link onClick={() => setFormPagoData('ASK_REGISTER_PAY')} to="/formpay">Ask Register Pay</Link> 
                    </Card.Header>    
                </Card> 
            </Accordion>
        </div>
    )
}
