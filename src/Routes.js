import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

import {FPFormView} from './views/FPFormView'; 
import {FIFormView} from './views/FIFormView'; 
import {FIFormPay} from './views/FIFormPay'; 
import {PWFormPay} from './views/PWFormPay'; 
import {FIConfirmation} from './views/FIConfirmation'; 

import {IpnView} from './views/IpnView'; 

export const Routes = () => {
    return (
        <Fragment>
            <Route exac path="/formpay" component={FPFormView}/> 
            <Route exac path="/formembedded" component={FIFormView}/>  
            <Route exac path="/formembeddedpay" component={FIFormPay}/>  
            <Route exac path="/formembeddedconfirm" component={FIConfirmation}/>  
            <Route exac path="/formpwmarcas" component={PWFormPay}/> 
            <Route exac path="/formipn" component={IpnView}/> 
        </Fragment>
    )
}
