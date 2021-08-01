import React, { useState } from 'react';

const Dashboard = () => {

    const [state, setState ] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
  
    console.log('WHOLE STATE:',state)

    const hashTags = state.map((tweet) => {
        return tweet.entities.hashtags.map((hashtag) => {
          return hashtag.text;
        });
      });

    const getTweets = () => {
      console.log(searchTerm)
      const url = '/tweets/' + searchTerm;
      fetch(url).then((response) => {
          return response.json()
      }).then((data) => {
          setState(data.statuses)
      }).catch((error) => {
          console.log(JSON.stringify(error));
      })
    }

    const handleFilter = () => {
        console.log('handleFilter fired')
    }
  
    return (
      <div className="App">
        <div>Tweet Feed</div>
        <input type="text" onChange={event => setSearchTerm(event.target.value)}></input>
        <button className="searchButton" type="submit" onClick={getTweets}>Search</button>
        {
        <div>
            {
                state.map((item, index) => (
                    <div key={index}>`${item.text}`</div>
                ))
            }
        </div>
        }
        <div>
            {
                hashTags.map((tag) =>
                    tag.map((item, index) => (
                        <button key={index} onClick={handleFilter}>{item}</button>
                    ))
                )
            }
        </div>
      </div>
    );
  }

  export default Dashboard;

  /*

      /*

    dummyTags.forEach((tag) => {
        tag.forEach((item, index) => {
            return console.log('dummy tags', item)
        })
    })

    /*
      console.log('hashTags from map', hashTags)
    
    hashTags.forEach((tag) => {
        tag.forEach((item, i) => {
            return console.log('foreach tags:', item[i])
        })
    })


const dummyTags = [
    [],
    ['itemOne', 'itemTwo', 'itemThree'],
    []
]

dummyTags.map((tag) => {
    tag.map((item) => {
        console.log(item)
    })
})

*/