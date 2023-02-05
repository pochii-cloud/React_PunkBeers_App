import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Beer from './components/Beer';
import './App.css'
function App() {

  const [beers,setBeers]=useState([]);

 useEffect(()=>{
    axios.get('https://api.punkapi.com/v2/beers?page=2&per_page=28')
    .then((response)=>{
      setBeers(response.data)
      console.log(response.data)
    })
 },[])
  return (
    <div>
      
    <nav class="navbar bg-light">
  <div class="container-fluid">
    <a class="navbar-brand"><b>Punk Beers</b></a>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
      <div className='grid'>
     {beers.map((beer)=>
     
         <Beer 
         key={beer.id}
     name={beer.name} 
     image_url={beer.image_url} 
     description={beer.description}/>
      
    )}
    </div>
    </div>
  );
}

export default App;
