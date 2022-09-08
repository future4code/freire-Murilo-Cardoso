import { baseURL } from "./baseURL";
import axios from "axios";

//A GET
//B Promise<any[]>
//3



async function getAllSubscribers(): Promise<any[]> {
  const response = await axios.get(`${baseURL}/subscribers`);
  return response.data;
}

const main = async (): Promise<void> => {
  try {
    console.log(await getAllSubscribers());
  } catch (error: any) {
    const resp = error.responde.data || error.message;
    console.log(resp);
  }
};

main();
