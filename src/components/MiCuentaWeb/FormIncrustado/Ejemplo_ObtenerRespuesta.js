export const FormPay = ({order}) => { 
    const history = useHistory();
    const [error, setError] = useState(''); 
    const {setresultFI} = useContext(FormContext);
 
    useEffect(() => {
        onCheckout(order)
    }, [])

    async function onCheckout(order)
    { 
        let formToken = await getFormToken(order);
        displayPaymentForm(formToken);
       
    }
 
    const  getFormToken = async (order) => { 
   
    }


    async function displayPaymentForm(formToken)
    {
        const endpoint = "https://static.micuentaweb.pe";
        const publicKey = "REPLACE";

        let config = {
            "merchant": {
                "header": {
                    "image": { 
                        "visibility": true,
                    }
                }
            }
        };
   
        let { KR } =  await KRGlue.loadLibrary(endpoint, publicKey)
    
        KR.setFormConfig({formToken: formToken}) 
        KR.setFormConfig({"kr-language": "es-ES"})  
        KR.setFormConfig({"kr-popin": ""}) 
        KR.setFormConfig(config)  

        let { KR: KR1, result} = await KR.addForm("#myPaymentForm") 
        KR1.onFormCreated(onFormCreated);
        KR1.showForm(result.formId);  
		
		// Agregar evento para obtener la respuesta
        KR1.onSubmit(onPaid);
		// Agregar evento para obtener errores
        KR1.onError(onError); 
 
    }
     
    // Como cambiar el texto del bot+on
    function onFormCreated(event) {  
        var botonpopin = document.getElementsByClassName("kr-payment-button");
        botonpopin[0].innerHTML = botonpopin[0].innerHTML.replace(",",".");

        var botonform = document.getElementsByClassName("kr-popin-button");
        botonform[0].innerHTML = botonform[0].innerHTML.replace(",",".");
 
    }
      
	// Cómo obtener el resultado de la transacción
    function onPaid(event) { 
        if (event.clientAnswer.orderStatus === "PAID") {
            console.log(event.clientAnswer);
            setresultFI(event.clientAnswer);  
         
            return history.push(`/formembeddedconfirm`)
          } else {
            // Show error message to the user
            console.log("error")
          }
      }
	  
	// Cómo obtener errores del formulario de pago
      function onError(event) {  
            console.log(event) 
      }
 
    return (
    <div> 
        <h2>Charge/CreatePayment</h2>
        <h5>Crear una nueva transacción con el formulario incrustado</h5>
        <div className="container"> 
          <div id="myPaymentForm">  
          </div> 
          <div>{error}</div>
        </div>
        
      </div>
    )
}
