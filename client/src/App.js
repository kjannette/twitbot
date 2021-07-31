import './App.css';

const App = () => {

  let search; 

  const outputTweets = (data) => {
    console.log(data)
  }

  const getAllTweets = () => {
    console.log('getAllTweets HAS FIRED')
      const url = '/tweets/' + 'sports'//search.value;
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
      <input type="text"></input>
      <button onClick={getAllTweets}></button>
    </div>
  );
}

export default App;
