import React from "react";
import {useNavigate} from 'react-router-dom'

export const ListTripsPage = () => {
    
    const navigate = useNavigate()

    const goToHome = () => {
        navigate ("/")
    }
    return(
        <div>
            <p>Para vermos todas as viagens</p>
            <div>
                <img src="https://loremflickr.com/320/240/dog>" alt="" />
            </div>
            <button onClick={goToHome}>Home</button>
        </div>
    );
};