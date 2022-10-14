import {ContainerLi} from "./styled"


export const PizzaCard = (props)=> {
  const { pizza, addToCard } = props;

  return (
    <ContainerLi>
        <h3>{pizza.name}</h3>
        <p className="card-price">
            {pizza.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
        })}
        </p>
        <p>
            {pizza.ingredients.map((item) => {
                return <span key={item}>{`${item} `}</span>;
            })}
        </p>
        <button onClick={()=> addToCard(pizza)}>Adicionar no carrinho</button>
    </ContainerLi>
  );
}

