import {URL_BACK, FetchGet} from '../BackConfig';

const getAllProducts = async () => {
    return await FetchGet(URL_BACK, `showproduct`);
} 

export { getAllProducts };
