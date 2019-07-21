import React from 'react'

const Card = (props) => {
    return <div>
            <div>Name: {props.data.name}</div>
            <div>Height: {props.data.height}</div>
            <div>Gender: {props.data.gender} </div>
            <div>Hair Color: {props.data.hair_color} </div>
            <div>Eye Color: {props.data.eye_color}</div>
            </div>

}

export default Card;