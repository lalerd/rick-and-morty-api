import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [chars , setChars] = useState([])
  const [searchterm, setSearchterm] = useState("")
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        setChars(res.data.results);
      })
      .catch(err => {
        alert(err.message);
      });
  }, []);

  return (
    <>
     <h1>Rick & Morty</h1>
    <div className='search'>
    <input type="text" placeholder="Search .."
    onChange={(e)=>{setSearchterm(e.target.value)}}
    /> 
    <div className="card-columns">
    {
      chars.filter((val)=>{
        if(searchterm == ""){
          return val
        }else if(val.name.toLowerCase().includes(searchterm.toLocaleLowerCase()))
        return val
      }).map((val) =>{
        return(
      <div className="card">
    <img className="card-img-top" src={val.image} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{val.name}</h5>
    </div>
  </div>
         )
      })
    }
</div>
    </div>
    </>
  );
}

export default App;
