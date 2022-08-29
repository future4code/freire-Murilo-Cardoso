import {baseURL} from './baseURL'
import axios from 'axios'

//A sim pois não teremos o tipo declarado, se declarar ai não tera erro.
//B 


type user = {
	id: string | number;
	name: string;
	email: string;
}


const getSubscribers = async (): Promise<user[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data.map((res: any) => {
      return {
        id: res.id,
        name: res.name,
        email: res.email,
      };
    });
  };

console.log(getSubscribers()) 

