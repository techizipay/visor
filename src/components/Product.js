import React, { useContext, useState } from 'react'
import { PayContext } from '../context/payContext'
import Count from '../components/Count'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import './css/Product.css'

export default function CProduct(product) {
    console.log("producto: ", product)
     
    const {anadirProducto} = useContext(PayContext);
    const [cantidad, setCantidad] = useState(1)

    const anadirAlCarrito = (e) => {
        e.preventDefault();
        e.stopPropagation();
        let productoAnadir = {
            productId: product.product.productoId,
            productName: product.product.productoNombre, 
            productPrice: product.product.productoPrecio,   
            productImg: product.product.productoImagen, 
            productCant: cantidad, 
            productTotal: product.product.productoPrecio * cantidad 
        }
 
        anadirProducto(productoAnadir);

        Swal.fire({
            icon: "success",
            title: "Se añadio el producto",
            showConfirmButton: false,
            timer: 2000
        })
    }
    
    return (   
            <div className="card m-1 p-0"> 
                <Card.Img variant="top" src={product.product.productoImagen} alt="..." className="img" />
                <div className="card-body">
                    <Card.Text>{product.product.productoDescripcion}</Card.Text>
                    <Card.Text className="price">Precio: {product.product.productoPrecio}</Card.Text>
                    <Count cantidadProductos={cantidad} actualizarCantidad={setCantidad}/>
                      
                    {
                        product.product.productoStock !== 0 
                        ?
                        (
                            <button style={{ background: '#ff1e16'}} className="btn btn-danger btn-sm" onClick={(e) => {anadirAlCarrito(e)}}>Agregar al carrito</button>
                        )
                        : 
                        (
                            <button className="btn btn-danger btn-sm">No hay stock</button>
                        )
                    }
                    
                </div>
            </div>
    )
}
