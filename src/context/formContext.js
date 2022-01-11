import React, {useState, createContext} from 'react'; 
export const FormContext = createContext();

const FormContextProvider = (props) => { 
    const [form, setForm] = useState(null);
    const [formPW, setFormPW] = useState(null);
    const [order, setOrder] = useState(null);
    const [resultFI, setresultFI] = useState(null);

    const setFormPago = (form) => {
        setForm(form);
    }
    const setFormPagoPW = (form) => {
        setFormPW(form);
    }

    const setOrderPay = (order) => {
        setOrder(order);
    }

    const setresultFIPay = (result) => {
        setresultFI(result);
    }


    return(
        <FormContext.Provider value={{form, setFormPago, order, setOrderPay, resultFI, setresultFI, formPW, setFormPagoPW }}>
            {props.children}
        </FormContext.Provider>
    )
}

export default FormContextProvider;