import axios from "axios";
import { useEffect, useState } from "react";
import {BASE_URL} from "../../constants/constants"
import {PizzaCard} from "../pizzaCard/PizzaCard"
import {ContainerSection} from "./styled"




export const PizzasMenu = (props)=>{

    const {addToCard} = props

    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/pizzas`)
            .then((res) => {
            setPizzas(res.data.pizzas);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    return(
        <ContainerSection>
            <ul>
                {pizzas.map((pizza) => {
                return (
                    <PizzaCard 
                        pizza={pizza} 
                        key={pizza.name}
                        addToCard={addToCard}
                    />
                )
                })}
            </ul>
            
        </ContainerSection>
    )
};
