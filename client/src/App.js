import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [tweets, setTweets ] = useState([])

  let searchTerm; 

  const outputTweets = (data) => {
    console.log(data)
    console.log('state tweets', tweets)
  }

  const getTweets = () => {
    console.log('getAllTweets HAS FIRED')
      const url = '/tweets/' + searchTerm;
      fetch(url).then(function (response) {
          return response.json()
      }).then(function (data) {
          outputTweets(data.statuses)
          setTweets(data.statuses)
      }).catch(function (error) {
          console.log(JSON.stringify(error));
      })
  }

  return (
    <div className="App">
      <div>This is client App.js</div>
      <input type="text" value={searchTerm}></input>
      <button type="submit" onClick={getTweets}></button>
      {tweets.map((tweet, i) => {
        <div id={i}>{tweet.text}</div>
      })}
    </div>
  );
}

export default App;
