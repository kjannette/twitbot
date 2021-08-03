import React, { useState } from 'react';
import TweetComponent from './TweetComponent'
import HashTagComponent from './HashTagComponent'

const Dashboard = () => {

    const [state, setState ] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    console.log('Whole state', state)

    const reduceArray = () => {
        const arr = state.map((tweet) => {
            return tweet.entities.hashtags.map((hashtag) => {
              return hashtag.text;
            });
          });
        const res = [];
        arr.forEach(element => {
           element.forEach(el => {
              res.push(el);
           });
        });
        return res;
     };

    const hashTags = reduceArray()

    const getTweets = () => {
      const url = '/tweets/' + searchTerm;
      fetch(url).then((response) => {
          return response.json()
      }).then((data) => {
          setState(data.statuses)
      }).catch((error) => {
          console.log(JSON.stringify(error));
      })
    }

    const getMoreTweets = () => {
        const url = '/tweets/' + searchTerm;
        fetch(url).then((response) => {
            return response.json()
        }).then((data) => {
            data.statuses.forEach((status) => {
                setState(state => [...state, status]);
            })
        }).catch((error) => {
            console.log(JSON.stringify(error));
        })

    }

    const handleFilter = (item) => {
        const tempState = state.filter((tweet) => {
            console.log('filter tweet', tweet.entities.hashtags)
            return tweet.entities.hashtags.some(el => el.text === item)
        })
        console.log('tempState', tempState)
        setState(tempState)
    }
  
    return (
      <div className="App">
        <div>Tweet Feed</div>
        <input type="text" onChange={event => setSearchTerm(event.target.value)}></input>
        <button className="searchButton" type="submit" onClick={getTweets}>Search</button>
        {state.map((item, i) => (
            <TweetComponent {...item} index={i}/>
        ))}
        <div>
            <button className="searchButton" type="submit" onClick={getMoreTweets}>Load More</button>
        </div>
        <div>
            <HashTagComponent hashTags={hashTags} action={handleFilter} />
        </div>
      </div>
    );
  }

  export default Dashboard;
