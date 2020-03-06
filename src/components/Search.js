import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import HomePageCard from "./HomePageCard";

// This is honestly a terrible way to do this, but i'm just doing this simply for actual functionality over how nice it is.  
// Not relevant.

export default function Search() {
  const [search, setSearch] = useState("");
  const [info, setInfo] = useState([]);

  useEffect(() => {
  axiosWithAuth()
    .get("/api/comments?limit=10&offset=1")
    .then(response => {
      const results = response.data.filter(characters =>
        characters.By.toLowerCase().includes(search.toLowerCase())
        );
        setInfo(results);
    })
    .catch(error => {
      console.log(error);
    });
  },[search]);
 
  const handleChange = event => {
    setSearch(event.target.value);
  };


  return (
    <div>
     <form className="align-self-center">
       <label htmlFor="searchField" className="text-center font-weight-bold">Search By Name</label>
       <br />
       <input onChange={handleChange} id="name" type="text" name="searchfield" placeholder="Search For Character" value={search}/>
     </form>
     {search ? info.map((character => {
       return(
        <div key={character.id}>
          <h1>By: {character.By}</h1>
          <h3>Salty Meter: {character.Score}</h3>
          <h4>{character.Text}</h4>
        </div>
       )
     }
     )) : null}
    </div>
  );
}