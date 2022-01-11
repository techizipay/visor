export const URL_BACK = 'https://mcwpayment.herokuapp.com/';

export const FetchGet = async (url, endpoint) => {
    const response = await fetch(url + endpoint);
    const content = await response.json(); 
    console.log(content.data);
    return content.data;
    
}