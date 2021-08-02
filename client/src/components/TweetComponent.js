import React from 'react';

const TweetComponent = (props) => {

    return (
        <React.Fragment>
            <div key={props.index}>
                <img src={`${props.user.profile_image_url}`}></img>
                <div>{props.user.name}</div>
                <div>{props.text}</div>
            </div>
        </React.Fragment>
    )
}

export default TweetComponent