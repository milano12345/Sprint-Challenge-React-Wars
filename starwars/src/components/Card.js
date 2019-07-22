import React from 'react';
import styled from 'styled-components';

const Pic = styled.img`
width: 15%
`
const List = styled.div`

`
const Title = styled.div`
font-family: helvitica;
border: 1px solid red;
width: 50%;
display: flex;
flex-direction: row;
`

const Card = (props) => {
    return <Title>
            <Pic src={'http://pngimg.com/uploads/starwars/starwars_PNG60.png'}  />
            <div>Name: {props.data.name}</div>
            <div>Height: {props.data.height}</div>
            <div>Gender: {props.data.gender} </div>
            <div>Hair Color: {props.data.hair_color} </div>
            <div>Eye Color: {props.data.eye_color}</div>
            </Title>

}

export default Card;