import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [state, setState ] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  /*
  state.forEach(item => {
    console.log("this is a tweet", item)
  })
*/

  console.log(state)

  const getTweets = () => {
    console.log(searchTerm)
    const url = '/tweets/' + searchTerm;
    fetch(url).then(function (response) {
        return response.json()
    }).then(function (data) {
        setState(data.statuses)
    }).catch(function (error) {
        console.log(JSON.stringify(error));
    })
  }

  return (
    <div className="App">
      <div>This is client App.js</div>
      <input type="text" onChange={event => setSearchTerm(event.target.value)}></input>
      <button type="submit" onClick={getTweets}></button>
      {
        state.map((item, index) => (
          <div key={index}>`${item.text}`</div>
        ))
      }
    </div>
  );
}

export default App;

/*
function getAllTweets() {
  const url = '/tweets/' + search.value;
  fetch(url).then(function (response) {
      return response.json()
  }).then(function (data) {
      outputTweets(data.statuses)
  }).catch(function (error) {
      console.log(JSON.stringify(error));
  })
}
*/