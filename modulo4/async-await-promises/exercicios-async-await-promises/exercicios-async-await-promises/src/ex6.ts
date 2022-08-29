import {baseURL} from './baseURL'
import axios from 'axios'


//
//A) Recebe um array de Promises e retorna outra
//Promise, que resolve em um array de respostas

type user = {
	id: string | number;
	name: string;
	email: string;
}


const sendNotifications = async (
    users: user[],
    message: string
  ): Promise<void> => {
  
      try {
        const promises = users.map(user =>{
          return axios.post(`${baseURL}/notifications`, {
            subscriberId: user.id,
            message: message,
          })
        })
      
        await Promise.all(promises);
  
      } catch {
          console.log("Error");
      }
  };