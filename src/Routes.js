import React, {Fragment} from 'react';
import {Route, Redirect} from 'react-router-dom';

import {FPFormView} from './views/FPFormView'; 
import {FIFormView} from './views/FIFormView'; 
import {FIFormPay} from './views/FIFormPay'; 
import {PWFormPay} from './views/PWFormPay'; 
import {ConfirmationView} from './views/ConfirmationView'; 

import {HomeView} from './views/HomeView';
import {IpnView} from './views/IpnView'; 
import {PayView} from './views/PayView'; 
import {PopInView} from './views/PopInView'; 

export const Routes = () => {
    return (
        <Fragment>
            <Redirect from='/' to='/home' /> 
            <Route exac path="/home" component={HomeView} />
            <Route exac path="/formpay" component={FPFormView}/> 
            <Route exac path="/formembedded" component={FIFormView}/>  
            <Route exac path="/formembeddedpay" component={FIFormPay}/>  
            <Route exac path="/formembeddedconfirm" component={ConfirmationView}/>  
            <Route exac path="/formpwmarcas" component={PWFormPay}/> 
            <Route exac path="/showipn" component={IpnView}/> 
            <Route exac path="/showpay" component={PayView}/> 
            <Route exac path="/showpopin" component={PopInView}/> 
        </Fragment>
    )
}
