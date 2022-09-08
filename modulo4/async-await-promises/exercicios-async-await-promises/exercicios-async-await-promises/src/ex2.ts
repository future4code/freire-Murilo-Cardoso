import { baseURL } from "./baseURL";
import axios from "axios";

//A a diferença está na posição onde deve ser colocado o assync, na função nomeada
// o assync vai antes da chamada, e no arrow ela vai apos o "="
//B)

const getAllSubscribers = async (): Promise<any[]> => {
  const response = await axios.get(`${baseURL}/subscribers`);

  return response.data;
};

const main = async (): Promise<void> => {
  try {
    console.log(await getAllSubscribers());
  } catch (error: any) {
    const resp = error.responde.data || error.message;
    console.log(resp);
  }
};

main();
