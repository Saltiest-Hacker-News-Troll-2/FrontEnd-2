import React, { useState, useEffect } from "react";
import axios from "axios";

// This is honestly a terrible way to do this, but i'm just doing this simply for actual functionality over how nice it is.  
// Not relevant.

export default function SearchForm() {
  const [search, setSearch] = useState("");
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios 
    .get("")
    .then(response => {
      const results = response.data.results.filter(characters =>
        characters.name.toLowerCase().includes(search.toLowerCase())
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
       return(<CharacterCard char={character}/>)
     }
     )) : null}
    </div>
  );
}