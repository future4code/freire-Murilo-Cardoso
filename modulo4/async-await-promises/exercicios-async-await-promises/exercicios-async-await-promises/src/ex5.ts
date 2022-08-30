import {baseURL} from './baseURL'
import axios from 'axios'


type TypeSubsUser = {
	id: string;
	name: string;
	email: string;
}

const getAllSubscribers = async (): Promise<TypeSubsUser[]> => {
  const response = await axios.get(`${baseURL}/subscribers`)
  return response.data
}

const getSubscribersIds = (subscribers: TypeSubsUser[]): string[] =>{
  return subscribers.map((subscriber:TypeSubsUser)=>{
      return subscriber.id
  })
}

const notifyAllSubscribers = async (ids: string[]):Promise<void> =>{
  try{
      for(const id of ids){
         await  axios.post(`${baseURL}/notifications`, {
              subscriberID: id,
              message: "Buonacera Katucha, nova notícia pra você"
          })
          console.log(`Enviado com sucesso`)
      }
  }
  catch (error: any) {
   console.log(` Error ao enviar`)
      }
}



const main = async():Promise<void> =>{
  try{

      const subscribers = await getAllSubscribers()
      const subscriberIds =  getSubscribersIds(subscribers)
      await notifyAllSubscribers(subscriberIds)
  }
  catch(error:any){
      const resp = error.response.data || error.message
       console.log(resp)
  }
}

main ()