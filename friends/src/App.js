import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import FriendList from './Components/FriendList/FriendList'

const friends = [
  {
    name: 'Peter'
  },

  {
    name: 'Yuriy'
  },

  {
    name: 'Audrey'
  }
]

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    // this.setState({ friends: friends})
    // console.log(friends);
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({friends: res.data})
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }
  render() {
    console.log(this.state.friends)
    return (
      <div className="App">
        {/* {this.state.friends.map(friend =>{
          return(
          <p>{friend.name}</p>
        )})} */}
        <FriendList id={Date.now()} friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
