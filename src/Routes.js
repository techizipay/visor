import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

import {FPFormView} from './views/FPFormView'; 
import {FIFormView} from './views/FIFormView'; 
import {FIFormPay} from './views/FIFormPay'; 
import {PWFormPay} from './views/PWFormPay'; 
import {FIConfirmation} from './views/FIConfirmation'; 

import {HomeView} from './views/HomeView';
import {IpnView} from './views/IpnView'; 
import {PayView} from './views/PayView'; 

export const Routes = () => {
    return (
        <Fragment>
            <Route exac path="/home" component={HomeView} />
            <Route exac path="/formpay" component={FPFormView}/> 
            <Route exac path="/formembedded" component={FIFormView}/>  
            <Route exac path="/formembeddedpay" component={FIFormPay}/>  
            <Route exac path="/formembeddedconfirm" component={FIConfirmation}/>  
            <Route exac path="/formpwmarcas" component={PWFormPay}/> 
            <Route exac path="/showipn" component={IpnView}/> 
            <Route exac path="/showpay" component={PayView}/> 
        </Fragment>
    )
}
