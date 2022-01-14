import {URL_BACK, FetchGet, FetchConf} from '../BackConfig';

const getTransacciones = async () => {
    return await FetchGet(URL_BACK, `showipn`); 
}
  
const getFormToken = async (data) => {
    return await FetchConf(URL_BACK, `createpayment`,'POST', data); 
}
  
export { getTransacciones, getFormToken };