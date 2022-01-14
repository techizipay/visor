import React, { useState, useEffect } from 'react';  
import {getAllProducts} from '../services/product';
import Product from './Product';


export default function Home() {

    const [productos, setProductos] = useState([]);

    const getProducts = async () => {
        let data = await getAllProducts(); 
        if (data) {
            setProductos(data);     
        }
    }

    useEffect(() => {
        getProducts();
    }, []) 
  
    return (
        <div>
            <div>
                <i className="fas fa-caret-right fa-2x" />
                <span style={{ color: 'gray', fontSize: '26px', paddingLeft: '20px', fontWeight: 'bolder' }}>Los más vendidos en IziShop</span>
            </div>
            <br></br>
            <div className="row mt-2 d-flex justify-content-center">
            {
                productos.map((prod, i) => (
                    <div className="col-12 col-sm-6 col-lg-3 p-0" key={i}>
                        <Product product={prod}/>
                    </div>
                ))
            }
            </div>
        </div>
    )
}
