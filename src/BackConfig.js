export const URL_BACK = 'https://mcwpayment.herokuapp.com/';

export const FetchGet = async (url, endpoint) => {
    const response = await fetch(url + endpoint);
    const content = await response.json();  
    return content.data;
    
}

export const FetchConf = async (url, endpoint, method, data) => {

    const config = {
        method: method,
        body: JSON.stringify(data),
        headers: {'Content-type':'application/json'}
    }
 
    const response = await fetch(url + endpoint, config); 
    const content = await response.json(); 
    return content.content; 
}