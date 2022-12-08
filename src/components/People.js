import axios from "axios";
import React, {useEffect, useState} from "react";

export default function People(){
    const [people, setPeople] = useState(null);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const url= `https://swapi.dev/api/people/4`;
    useEffect(() => {axios.get(url)
        .then(response => {
            setPeople(response.data)
            setLoaded(true);
            console.log(response);
        })

        .catch(err => {
            setError(err);
            setLoaded(true);
        })
    },[url])
    if(!loaded) {
        return(<h1>En cours de chargement ...</h1>)
    } else if(error) {
        return (<h1>Erreur </h1>)
    } else {
    return(
        <div>
            <h1 className="text-center">Nom personnage : {people.name}</h1>
            <p className="text-center">Taille : {people.height}</p>
            <p className="text-center">Poids : {people.mass} </p>
            <p className="text-center"> Couleur des yeux : {people.eye_color}</p>
            <p className="text-center">Couleur des cheveux : {people.hair_color}</p>
  
        </div>

    );
    }    
}