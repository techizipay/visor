import React, {useState, createContext} from 'react';

export const PayContext = createContext();

const PayContextProvider = (props) => {
    const [carrito, setCarrito] = useState([]);
    const [order, setOrder] = useState(null); 
    const [busqueda, setBusqueda] = useState(''); 
  
    const setOrderUser =  (user_email, user_name, user_ape,user_doc, user_phone, order_total) => {
        setOrder({ ...order, user_email: user_email, user_name:user_name,user_ape:user_ape, user_doc:user_doc , user_phone:user_phone, order_total:order_total });
    }
 
    const anadirProducto =  (producto) => {
        setCarrito([...carrito, producto])
    }

    const eliminarProducto =  (producto) => { 
        let carritoTemp =  carrito.filter(prod => prod.productId !== producto.productId) 
        setCarrito(carritoTemp);
    }

    const limpiarCarrito =  () => { 
        setCarrito([]);
    }
    
    const limpiarOrder =  () => { 
        setOrder(null);
    }
  
    return(
        <PayContext.Provider value={{carrito, anadirProducto, eliminarProducto, limpiarCarrito, order, setOrderUser, limpiarOrder, busqueda, setBusqueda}}>
            {props.children}
        </PayContext.Provider>
    )
}

export default PayContextProvider;