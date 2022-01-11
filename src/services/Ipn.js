import {URL_BACK, FetchGet} from '../BackConfig';

const getTransacciones = async () => {
    return await FetchGet(URL_BACK, `showipn`); 
}
  
export { getTransacciones };