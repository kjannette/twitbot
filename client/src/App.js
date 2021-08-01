import React, { useState } from 'react';
import DashBoard from './components/Dashboard'
import './App.css';

const App = () => {
  
  return (
    <div>
      <DashBoard />
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