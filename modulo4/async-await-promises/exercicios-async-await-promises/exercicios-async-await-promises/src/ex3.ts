import {baseURL} from './baseURL'
import axios from 'axios'

//A sim pois não teremos o tipo declarado, se declarar ai não tera erro.
//B 


type user = {
	id: string | number;
	name: string;
	email: string;
}


async function getAllSubscribers(): Promise<user[]> {
  const response = await axios.get(`${baseURL}/subscribers`);
  return response.data;
};

const main = async():Promise<void> =>{
  try{
      console.log(await getAllSubscribers())

  }
  catch(error:any){
      const resp = error.responde.data || error.message
      console.log(resp)
  }
}

main ()