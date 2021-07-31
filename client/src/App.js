import './App.css';

const App = () => {

  let searchTerm; 

  const outputTweets = (data) => {
    console.log(data)
  }

  const getAllTweets = () => {
    console.log('getAllTweets HAS FIRED')
      const url = '/tweets/' + searchTerm;
      fetch(url).then(function (response) {
          return response.json()
      }).then(function (data) {
          outputTweets(data.statuses)
      }).catch(function (error) {
          console.log(JSON.stringify(error));
      })
  }

  return (
    <div className="App">
      <div>This is client App.js</div>
      <input type="text" value={searchTerm}></input>
      <button type="submit" onClick={getAllTweets}></button>
    </div>
  );
}

export default App;
