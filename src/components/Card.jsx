import React from 'react';

export default function Card(props) {
    console.log(props.total)
    return (
        <article className= "card">
        <h2>{props.title}</h2>
            <p>{props.description}</p> 
            </article>
    )
}

