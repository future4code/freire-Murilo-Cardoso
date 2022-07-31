import React from 'react';
import { CardMed } from './style';


const CardPost = (props) => {
    
    return(
        <CardMed>
        <p>{props.title}</p>
        <p>{props.body}</p>
        </CardMed>
    )

    
}
export default CardPost;