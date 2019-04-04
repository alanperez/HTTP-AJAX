import React from 'react';
import PropTypes from 'prop-types';

const FriendsForm = props => {
    return (
        <div className="ui segment">
            <form className="ui form" onSubmit={props.addFriend}>
                <label>Name: </label>
                    <input
                        name="name"
                        value={props.name}
                        onChange={props.handleChanges}   
                    />

                <label>Age:</label>
                    <input
                        name="age"
                        value={props.age}
                        onChange={props.handleChanges}   
                    />

                <label>Email:</label>
                    <input
                        name="email"
                        value={props.email}
                        onChange={props.handleChanges}   
                    />
                    <button className="ui primary button">Save</button>
                    <button className="ui negative basic button">Discard</button>
            </form>
        </div>
    )
}
PropTypes.shape({
    Name: PropTypes.string,
    Age: PropTypes.number,
    Email: PropTypes.string
  });

export default FriendsForm;