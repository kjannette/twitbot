import React from 'react';

const HashTagComponent = (props) => {

    return (
        <div>
            {props.hashTags.length > 1 &&
                <div>Filter By Hashtag</div>
            }
            {props.hashTags.map((tag, index) =>
                <button key={index} onClick={() => props.action(tag)}>{tag}</button>

            )}
        </div>
    )
}

export default HashTagComponent;