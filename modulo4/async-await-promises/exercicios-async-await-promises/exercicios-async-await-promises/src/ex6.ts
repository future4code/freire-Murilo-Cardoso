import {baseURL} from './baseURL'
import axios from 'axios'


//
//A) Recebe um array de Promises e retorna outra
//Promise, que resolve em um array de respostas

type TypeSubscribers = {
  id:string,
  name: string,
  email: string
}

const getAllSubscribers = async (): Promise<TypeSubscribers[]> => {
  const response = await axios.get(`${baseURL}/subscribers`)
  return response.data
}

const getSubscribersIds = (subscribers: TypeSubscribers[]): string[] =>{
  return subscribers.map((subscriber:TypeSubscribers)=>{
      return subscriber.id
  })
}

const notifyAllSubscribers = async (ids: string[]):Promise<void> => {
  try {
      const requests = ids.map( id =>
        axios.post(`${baseURL}/notifications`, {
          subscriberId: id,
          message: "Mensagem do react group"
        }))

        await Promise.all(requests)
        console.log(requests)

  console.log(`[Promise.all] Enviado com sucesso`)
} catch (error: any) {
  console.log(`[Promise.all] Error ao enviar para`)
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