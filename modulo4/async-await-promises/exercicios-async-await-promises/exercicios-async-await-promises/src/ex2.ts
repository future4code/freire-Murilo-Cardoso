import {baseURL} from './baseURL'
import axios from 'axios'

//A a diferença está na posição onde deve ser colocado o assync, na função nomeada 
// o assync vai antes da chamada, e no arrow ela vai apos o "=" 
//B)

const getSubscribers = async(): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };

console.log(getSubscribers()) 

