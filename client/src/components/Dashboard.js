import React, { useState } from 'react';

const Dashboard = () => {

    const [state, setState ] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    console.log('Whole state', state)
/*
    if (typeof state[0] != 'undefined') {
        console.log('target hashtag', state[0].entities.hashtags[0].text)
    }
*/

    state.forEach((tweet) => {
        console.log(tweet.entities.hashtags)
        if (tweet.entities.hashtags) {
            tweet.entities.hashtags.forEach((hashTag, index) => {
                if (hashTag.text) {
                    console.log('hashTag.text', hashTag.text)
                    // do the filter
                    //console.log('tweet.entities.hashtags', tweet.entities.hashtags[index])
                }
            })
        }
    })

    const initialTags = state.map((tweet) => {
        return tweet.entities.hashtags.map((hashtag) => {
          return hashtag.text;
        });
      });

      const simplifyArray = (arr = []) => {
          console.log('arr inside simplify', arr)
        const res = [];
        arr.forEach(element => {
           element.forEach(el => {
              res.push(el);
           });
        });
        return res;
     };

    const hashTags = simplifyArray(initialTags)

    console.log('hashTags', hashTags)

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
                hashTags.map((tag, index) =>
                        <button key={index} onClick={() => handleFilter(tag)}>{tag}</button>

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