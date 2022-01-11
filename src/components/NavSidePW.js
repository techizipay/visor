import React, { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'; 
import {Link} from 'react-router-dom';
import {FormContext} from '../context/formContext';
import '../views/css/views.css';

export const NavSidePW = () => {
    const {setFormPagoPW} = useContext(FormContext);

    const setFormPagoData = (form) => { 
        setFormPagoPW(form);
    }

    return (
        <div className="izquierda">
            <Accordion defaultActiveKey="0"> 
                <Card>
                    <Card.Header>  
                        <Link onClick={() => setFormPagoData('MARCAS')} to="/formpwmarcas">Register</Link> 
                    </Card.Header>   
                </Card> 
            </Accordion>
        </div>
    )
}
