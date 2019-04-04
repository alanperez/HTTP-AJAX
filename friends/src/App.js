import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Friend from './components/Friend';
import FriendForm from './components/FriendForm';
import './app.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          friends: [],
          postRes: '',
          friend: {
            name: '',
            age: 0,
            email: ''
          }
        }
      }

    componentDidMount() {
        axios
            .get(`http://localhost:5000/friends`)
            .then(res => {
                this.setState({ friends:res.data});
                console.log("REST!:",res);
            })
            .catch(err => {
                console.log(err);
            });
    }

        // postFriend = () => {
        //     axios
        //     .post(`http://localhost:5000/friends`,friend)
        //     .then(res => this.setState({
        //         postRes: res.data.successMessage
        //       }))
        //       .catch(err => console.log(err))
        // }
        postFriend = () => {
                axios
                .post(`http://localhost:5000/friends`, Friend)
                .then(response => {
            console.log(response);
            this.setState({
            postSuccessMessage: response.data.successMessage,
            postError: ""
            });
        })
        .catch(err => {
            console.log(err);
            this.setState({
            postSuccessMessage: "",
            postError: err.response.data.Error
            });
        });
    }

    handleChanges = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        })
    }

    FriendForm = () => {
        this.postFriend(this.state.friend)
      }


    render() {
        return (
            <div className="App">
          <h1>Friends</h1>
        <div className='friends'>
          {this.state.friends.map((friend, id) => <Friend friend={friend} key={id} />)}
          <FriendForm 
          handleChanges={this.handleChanges}
          newFriend={this.addFriend}
          friend={this.state.friend}/>
        </div>
            
            </div>
        )
    }
}

export default App;