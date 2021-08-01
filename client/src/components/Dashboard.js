import React, { useState } from 'react';

const Dashboard = () => {

    const [state, setState ] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    console.log('Whole state', state)

    if (state) {
        console.log('target hashtag', state[1].entities.hashtags[0].text)
    }

    state.forEach((item) => {
        console.log(item.entities.hashtags)
        if (item.entities.hashtags) {
            item.entities.hashtags.forEach((item) => {
                if (item.text) {
                    console.log(item.text)
                }
            })
        }
    })

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

    const handleFilter = (item) => {
        console.log('handleFilter fired', item)

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
                    <div key={index} id={item}>`${item.text}`</div>
                ))
            }
        </div>
        }
        <div>
            {
                hashTags.map((tag) =>
                    tag.map((item, index) => (
                        <button key={index} onClick={() => handleFilter(item)}>{item}</button>
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