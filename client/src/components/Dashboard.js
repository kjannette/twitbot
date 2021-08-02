import React, { useState } from 'react';

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
        console.log("getMoreTweets FIRED")
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
        {
        <div>
            {
                state.map((item, index) => (
                    <React.Fragment>
                        <img src={`${item.user.profile_image_url}`}></img>
                        <div>{item.user.name}</div>
                        <div key={index} id={item}>{item.text}</div>
                    </React.Fragment>
                ))
            }
        </div>
        }
        <div>
            <button className="searchButton" type="submit" onClick={getMoreTweets}></button>
        </div>
        <div>
            {hashTags.length > 1 &&
                <div>Filter By Hashtag</div>
            }
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
