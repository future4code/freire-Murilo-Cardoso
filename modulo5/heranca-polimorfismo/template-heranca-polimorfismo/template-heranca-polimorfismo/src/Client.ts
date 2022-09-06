import { Client } from "./Interface";

/* class clienteResidencial extends Client {
    private name: 
    private registrationNumber:
    private consumedEnergy:

    super()
} */
export const clientResidencial: Client = {
    name: "Goli",
    registrationNumber: 1,
    consumedEnergy: 100,
  
    calculateBill: () => {
      return 2;
    }
  }



