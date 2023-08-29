import { BsSuitHeartFill } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import { useState } from 'react';
import './card.css'

export default function Card(props) {
    const [heartState, setHeartState]= useState(false)

    function handlerLike(){
        setHeartState(!heartState);
    }
    return (
        <>
        <div className='container-card'>
            <img src={props.portada} alt="" /> 
            <p onClick={handlerLike} className="heart"> {heartState ? <BsSuitHeartFill className="red-icon"/>: <BsSuitHeart/>} </p>
            <h1>{props.titulo}</h1>
            <p className='container-card-subtitle'>{props.descripcion}</p>
            <p><strong>${props.price}</strong></p>
        </div>
        </>
    );
}