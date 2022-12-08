import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export default function Header() {
    const [filmsArray, setFilmsArray] = useState(null);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [people, setPeople] = useState(null);
    const navigate = useNavigate();

    const url = `https://swapi.dev/api/films/`;
    useEffect(() => {axios.get(url)
        .then(response =>{
            console.log(response.data.results)
            setFilmsArray(response.data.results)
            setLoaded(true);
        })
        .catch( err => {
            setError(err)
            setLoaded(true);
        })
    },[])

    function handleSubmit(e){
        e.preventDefault();
        const redirectionUrl = `/people/${people}`;
        navigate(redirectionUrl);
    }

    function handleChange(value){
        setPeople(value);
    }

    if(!loaded){
        return(<h1>En cours de chargement ...</h1>)
    } else if (error){
        return(<h1>Une erreur {error}</h1>)
    } else {
        return(
            <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Navbar</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Films
                    </a>
                    <ul className="dropdown-menu">
                        {filmsArray.map((item, index)=>{
                            return(<li key={index}><a className="dropdown-item" href={`/swapi.dev/api/films/${item.title}`}>{item.title}</a></li>)
                        })}
                    </ul>
                    </li>
                </ul>
                <form className="d-flex" onSubmit={handleSubmit} role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" onChange={(e) => handleChange(e.target.value)} aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>   
        )
    }
}