import React from "react";


export function CardTrip (props) {
    return (
        <div>
            <p><strong>Nome:</strong>{props.name}</p>
            <p><strong>Planeta:</strong>{props.planet}</p>
            <p><strong>Duração:</strong>{props.duration}</p>
            <p><strong>Data:</strong>{props.date}</p>
            <p><strong>Descrição:</strong>{props.description}</p>
        </div>
    )
}