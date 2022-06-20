import React from "react";
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="email">
            <div>
                <img src={ props.imagem } alt='some value'/>

            </div>
                <p><b>{props.campo}:</b> { props.email }</p>
                
        </div>
    )
}

export default CardPequeno;
