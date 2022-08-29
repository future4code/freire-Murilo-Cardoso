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

const createNews = async (newNews: newType): Promise<void> => {

    return await axios.put(`${baseURL}/news`, newNews)
}

/* const createNews = async(): Promise<newNews> => {
    const response = await axios.put(`${baseURL}/news`, {
        title: title,
        content: content, 
        date: date
      });
};
 */
/*   async function createNews(
    title: string,
    content: string,
    date: number
  ): Promise<void> {
    await axios.put(`${baseURL}/news`, {
      title: title,
      content: content, 
      date: date
    });
  } */