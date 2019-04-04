import React from 'react';
import axios from 'axios';
import Friends from './components/Friends';
import FriendsForm from './components/FriendsForm';
// import './app.css';

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
                .post(`http://localhost:5000/friends`, Friends)
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
            <div className="ui raised very padded text container segment">
          <h1>Friends</h1>
        <div className='friends'>
          {this.state.friends.map((friend, id) => <Friends friend={friend} key={id} />)}
          <div className="ui container" style={{marginTop:'20px'}}>
            <FriendsForm 
            handleChanges={this.handleChanges}
            newFriend={this.addFriend}
            friend={this.state.friend}
            />
         </div>
        </div>
            
            </div>
        )
    }
}

export default App;