import React from 'react';
import PropTypes from 'prop-types';

const FriendForm = props => {
    return (
        <form onSubmit={props.addFriend}>
            <label>Name:
                <input
                    name="name"
                    value={props.name}
                    onChange={props.handleChanges}   
                />
            </label>

            <label>Age:
                <input
                    name="age"
                    value={props.age}
                    onChange={props.handleChanges}   
                />
            </label>

            <label>Email:
                <input
                    name="email"
                    value={props.email}
                    onChange={props.handleChanges}   
                />
            </label>
                <button>Add</button>
        </form>
    )
}
PropTypes.shape({
    Name: PropTypes.string,
    Age: PropTypes.number,
    Email: PropTypes.string
  });

export default FriendForm;