import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card';

const CardData = () => {
    const [starData, setStarData] = useState([]);
    console.log(starData)
    useEffect(() => {
    axios
        .get('https://swapi.co/api/people/')
    .then(res => res.data.results.map(char => <Card data={char}/>))
        .catch(err => console.log(err))
    },[])
    return Card;
}

export default CardData;