import React, {useState, createContext} from 'react';

export const PayContext = createContext();

const PayContextProvider = (props) => { 
    
    const [order, setOrder] = useState(null);  
  
    const setOrderEmail =  (user_email) => {
        setOrder({ ...order, user_email: user_email});
    }
    const setOrderName =  (user_name) => {
        setOrder({ ...order, user_name:user_name});
    }
    const setOrderApe =  (user_ape) => {
        setOrder({ ...order, user_ape:user_ape});
    }
    const setOrderTotal =  (order_total) => {
        setOrder({ ...order,order_total:order_total });
    }
  
    const limpiarOrder =  () => { 
        setOrder(null);
    }
  
    return(
        <PayContext.Provider value={{order, setOrderEmail,setOrderName,setOrderApe,setOrderTotal, limpiarOrder}}>
            {props.children}
        </PayContext.Provider>
    )
}

export default PayContextProvider;