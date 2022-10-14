import { OrderItemCard } from "../OrderItemCard"
import styled from "styled-components"

export const ContainerSection = styled.section`
    width: 30em;
    border: 3px solid black;
    h1{
        font-size: 1.5em;
        text-align: center;
    }
`
export const OrderSummary=(props)=>{

    const { cart } = props

    const calculateTotal = () => {
        const total = cart.reduce(
        (acc, item)=> acc + (item.price * item.quantity), 
        0
    )
        return total.toLocaleString(
            "pt-br", 
            {style: "currency",currency: "BRL",}
        )
        }

    return(
        <ContainerSection>
            <h1>Resumo do pedido</h1>
                
                {cart.map((item)=>{
                    return(
                        <OrderItemCard key={item.name} item={item}/>
                    )
                })}
            
            <h2>Total: {calculateTotal()}</h2>
            <button>confirmar</button>
        </ContainerSection>
    )

}