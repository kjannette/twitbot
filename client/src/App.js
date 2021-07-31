import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [state, setState ] = useState([])

  state.forEach(item => {
    console.log("this is a tweet", item)
  })

  let searchTerm; 

  const outputTweets = (data) => {
    console.log('')
  }

  const getTweets = () => {
    console.log('getAllTweets HAS FIRED')
      const url = '/tweets/' + searchTerm;
      fetch(url).then((response) => {
          return response.json()
      }).then((data) => {
          setState(data.statuses)
      }).catch((error) => {
          console.log(JSON.stringify(error));
      })
  }

  return (
    <div className="App">
      <div>This is client App.js</div>
      <input type="text" value={searchTerm}></input>
      <button type="submit" onClick={getTweets}></button>
      {
        state.map((item, index) => {
          <div key={index}>{item.text}</div>
        })
      }
    </div>
  );
}

export default App;

/*

      {state.map(item, i => {
        <div id={i}>{item.text}</div>
      }
      )}

      (function () {
          fetch('http://localhost:3000/users.json')
          .then(response => response.json())
          .then(data => setState(data));
        })();
*/