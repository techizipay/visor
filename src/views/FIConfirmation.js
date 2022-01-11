import React from 'react'; 
import {NavSideFI} from '../components/NavSideFI'; 
 
import {FormConfirmation} from '../components/MiCuentaWeb/FormIncrustado/FormConfirmation';
import './css/views.css';

 
  
export const FIConfirmation = () => { 
 
    return (
        <div className="d-flex flex-row"> 
            <NavSideFI />
            <div className="derecha">
                <FormConfirmation/>
            </div>
        </div>
    )
}
