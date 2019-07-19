import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card';

function CardData() {
    const [starData, setStarData] = useState([]);
    console.log(starData)
    useEffect(() => {
    axios
        .get('https://swapi.co/api/people/')
        .then(res => console.log(res))
        .catch(err => console.log(err))
    },[])
    return <Card data={starData}/>
}

export default CardData;