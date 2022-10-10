

export interface IOrderItem{
    id: string,
    pizza_name:string,
    quantity:number,
    order_id:string 
}

export class Order{
    constructor(
        private id: string,
        private orderItems: IOrderItem[]
    ){}

    public getId = () =>{
        return this.id
    }

    public getOrderItems = () =>{
        return this.orderItems
    }

    public setOrderItems = () =>{
        return this.orderItems
    }

}