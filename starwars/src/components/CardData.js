import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card';

const CardData = () => {
    const [starData, setStarData] = useState([]);
    console.log(starData)
    useEffect(() => {
    axios
        .get('https://swapi.co/api/people/')
        .then(res => setStarData(res.data.results))
        .catch(err => console.log(err))
    },[])
    return starData.map(char => <Card data={char}/>)
}

export default CardData;