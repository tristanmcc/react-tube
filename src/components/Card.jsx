import React from 'react';

export default function Card(props) {
    console.log(props.total)
    return (
        <article>
        <h2>{props.title}</h2>
            <p>{props.description}</p> 
            </article>
    )
}

