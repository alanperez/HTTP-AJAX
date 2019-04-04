import React from "react"
import PropTypes from 'prop-types';

const  Friends = props => {
    return (
        <div className="friend">
            <h2>{props.friend.name}</h2>
            <p>{props.friend.age}</p>
            <p>{props.friend.email}</p>
        </div>
    )
}

PropTypes.shape({
    Name: PropTypes.string,
    Age: PropTypes.number,
    Email: PropTypes.string
  });

export default Friends;