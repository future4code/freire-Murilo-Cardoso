import {baseURL} from './baseURL'
import axios from 'axios'


//A GET
//B Promise<any[]>
//3

async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };

const res =  getSubscribers()
console.log("aguardando a resposta")
console.log(getSubscribers()) 

console.log(res)
