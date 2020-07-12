import React, {useState} from 'react';
import './App.css';

function App() {

  const [results, setResults] = useState([])

  const searchRequest = (e) => {
    e.preventDefault()
    fetch("https://deezerdevs-deezer.p.rapidapi.com/album/%7Bid%7D",{
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "491f353b91msh4d6e560099cab14p16dc45jsn2ebbe77bc738"
      }
    })
      .then(response => response.json())
      .then(data =>{
        setResults(data)
        console.log(data)
      })
  }


  return (
    <div className="mainpage">
      <div id="search">
        <h1 id="landing-text">MUSIQ</h1>
        <form onSubmit={searchRequest}>
          <input type="text" placeholder="Artist,Album,Song..." />
          <br/>
          <button>Search</button>
          {/* {results.map(value => (<h4>{value.title}</h4>))} */}
      </form>
      </div>
    </div>
  );

}

export default App;
