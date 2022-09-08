import {baseURL} from './baseURL'
import axios from 'axios'

//A

//B

//tipo
type newType = {
    title: string,
    content: string,
    date: number | string
}

const newNews: newType = {
    title: "Nova Notícia",
    content: "oi",
    date: Date.now()
}


  const createNews = async (newsNews:newType): Promise<void> =>{
    return axios.put(`${baseURL}/news`, newsNews)
}


const main = async():Promise<void> =>{
   try{
      createNews(newNews)

   }
   catch(error:any){
       const resp = error.responde.data || error.message
       console.log(resp)
   }
}

main ()