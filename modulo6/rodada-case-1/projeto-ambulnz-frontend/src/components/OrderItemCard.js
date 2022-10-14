import styled from "styled-components"

export const ContainerLI = styled.li`
        display: flex;
        button{
            width: 100px;
            height: 50px;
        }
`

export const OrderItemCard = (props) => {

    const  {item} = props
    return(
        <ContainerLI>
            <p>Pizza {item.name} - R$ 10,00 x 1</p>
            <button>Remover item</button>
        </ContainerLI>
    )

}