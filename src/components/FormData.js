import React, { useState, useContext } from 'react';
import { PayContext } from '../context/payContext';  

export default function FormData() {
   
    const { order,setOrderEmail,setOrderName,setOrderApe,setOrderTotal } = useContext(PayContext); 

    const setEmail = async (data) => {
        setOrderEmail(data);  
    }
    const setName = async (data) => {
        setOrderName(data); 
    }
    const setApe = async (data) => {
        setOrderApe(data); 
    }
    const setTotal = async (data) => {
        setOrderTotal(data);  
    }

    return (
        <div className="d-flex justify-content-center">
            <div style={{width: '400px', marginBottom: '1rem'}}>
            <div className="card mt-3">
                <div className="card-body">

                    <div class="row mx-0 text-center">
                    <div class="col-4 px-0">
                        <div class="card card-offer">
                            <div class="card-header">
                                <label for="amount0"><span data-display="offer-name">Producto 1</span></label>
                            </div>
                            <div class="card-body">
                                <p class="text-price"><span data-display="amount">19.00 S/</span></p>
                                <input type="radio" name="amount" data-select="amount" required ng-model="totalAmount" onClick={(ev) => {setTotal(1900)}}/>
                            </div>
                        </div>
                    </div>
                    <div class="col-4 px-0">
                        <div class="card card-offer">
                            <div class="card-header">
                                <label for="amount1"><span data-display="offer-name">Producto 2</span></label>
                            </div>
                            <div class="card-body">
                                <p class="text-price"><span data-display="amount">290.00 S/</span></p>
                                <input type="radio" name="amount" data-select="amount" ng-model="totalAmount" onClick={(ev) => {setTotal(29000)}}/>
                            </div>
                        </div>
                    </div>
                    <div class="col-4 px-0">
                        <div class="card card-offer">
                            <div class="card-header">
                                <label for="amount2"><span data-display="offer-name">Producto 3</span></label>
                            </div>
                            <div class="card-body">
                                <p class="text-price"><span data-display="amount">3900.00 S/</span></p>
                                <input type="radio" name="amount" data-select="amount" ng-model="totalAmount" onClick={(ev) => {setTotal(390000)}}/>
                            </div>
                        </div>
                    </div>
                </div> 
                <br></br>
                <div class="form-row" data-form="breakdown-validation" data-toggle="popover-example-data">
                    <div class="form-group col-12">
                        <div class="has-feedback input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i className="far fa-user"/></div>
                            </div>
                            <input type="text" class="form-control" placeholder="Nombre" required="required" onChange={(ev) => {setName(ev.target.value)}}/>
                        </div>
                    </div>
                </div> 
                <div class="form-row" data-form="breakdown-validation" data-toggle="popover-example-data">
                    <div class="form-group col-12">
                        <div class="has-feedback input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i className="far fa-user"/></div>
                            </div>
                            <input type="text" class="form-control" placeholder="Apellido" required="required" onChange={(ev) => {setApe(ev.target.value)}}/>
                        </div>
                    </div>
                </div>
 
                <div class="form-row" data-form="breakdown-validation" data-toggle="popover-example-data">
                    <div class="form-group col-12">
                        <div class="has-feedback input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i className="far fa-envelope"/></div>
                            </div>
                            <input type="email" class="form-control" placeholder="E-mail" required="required" onChange={(ev) => {setEmail(ev.target.value)}} />
                        </div>
                    </div>
                </div> 
                   
                </div>
            </div>
            </div>
        </div>
    )
}
