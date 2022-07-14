import React from "react";
import {useNavigate} from 'react-router-dom'
import { useRequestData } from "../hooks/useRequestData";
import { CardTrip } from "../components/cardTrips/CardTrip";

export const ListTripsPage = () => {
    

    const allTrips = useRequestData()

    const listTrips = allTrips.map((chave)=>{
        return ( 
        <CardTrip
            name={chave.name}
            description={chave.description}
            planet={chave.planet}
            duration={chave.durationInDays}
            date={chave.date}
        />
        )
    })


    const navigate = useNavigate()

    const goToHome = () => {
        navigate (-1)
    }
    const goToSingUp = () => {
        navigate("/trips/application")
    }


    return(
        <div>
            <strong>Lista de Viagens!</strong>
            <p>Para vermos todas as viagens</p>
            <div>
                <img src="https://loremflickr.com/320/240/dog>" alt="" />
            </div>
            <div>
                {listTrips}
            </div>
            <button onClick={goToHome}>Voltar</button>
            <button onClick={goToSingUp}>Inscrever-se</button>
        </div>
    );
};