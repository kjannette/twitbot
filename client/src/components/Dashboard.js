import React, { useState } from 'react';
import TweetComponent from './TweetComponent'
import HashTagComponent from './HashTagComponent'

const Dashboard = () => {

    const [tweets, setTweets ] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const reduceArray = () => {
        const res = [];
        tweets.map((tweet) => {
            return tweet.entities.hashtags.map((hashtag) => {
                res.push(hashtag.text);
            });
          });
        return res;
     };

    const hashTags = reduceArray()

    const getTweets = (e) => {
        if (e.key === 'Enter') {
            const url = '/tweets/' + searchTerm;
            fetch(url).then((response) => {
                return response.json()
            }).then((data) => {
                setTweets(data.statuses)
            }).catch((error) => {
                console.log(JSON.stringify(error));
            })
        }
    }

    const addTweets = () => {
        const url = '/tweets/' + searchTerm;
        fetch(url).then((response) => {
            return response.json()
        }).then((data) => {
            data.statuses.forEach((status) => {
                setTweets(arr => [...arr, status] );
            })
        }).catch((error) => {
            console.log(JSON.stringify(error));
        })
    }

    const handleFilter = (item) => {
        const tempState = tweets.filter((tweet) => {
            return tweet.entities.hashtags.some(el => el.text === item)
        })
        setTweets(tempState)
    }
  
    return (
      <div className="App">
        <div>Tweet Feed</div>
        <input 
            type="text" 
            placeholder="Search by keyword" 
            onChange={e => setSearchTerm(e.target.value)} 
            onKeyDown={getTweets}
        >
        </input>
        {tweets.map((item, i) => (
            <TweetComponent {...item} index={i}/>
        ))}
        <div>
            <button 
                className="searchButton" 
                type="submit" 
                onClick={addTweets}
            >
                Load More
            </button>
        </div>
        <div>
            <HashTagComponent hashTags={hashTags} action={handleFilter} />
        </div>
      </div>
    );
  }

  export default Dashboard;
