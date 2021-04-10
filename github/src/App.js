import logo from './logo.svg';
import './App.css';
import React from 'react'
import axios from 'axios'
import UserCard from './UserCard'
import Friends from './Friends'

class App extends React.Component {

  state = {
      bio: '',
      email: '',
      name: '',
      avatar: '',
      followers: 0,
      login: ['chaz',],

  };

 
  componentDidMount() {
    axios
       .get('https://api.github.com/users/dustinmyers')
       .then((res) => {
          this.setState({
            bio: res.data.bio,
            name: res.data.name,
            avatar: res.data.avatar_url,
            followers: res.data.followers,
          })
         })
        .catch(err => console.log(`ERROR FETCHING DATA: ${err}`))
       

    axios
      .get('https://api.github.com/users/dustinmyers/followers')
      .then((res) => {
          this.setState({
            login: res.data.name,
            })
          })
      .catch(err => console.log(`ERROR FETCHING DATA: ${err}`))
      
      }

  render() {
    return (
    <div className="App">
      <UserCard bio= {this.state.bio} name={this.state.name} avatar={this.state.avatar} followers={this.state.followers } />
      <Friends login= {this.state.login} />

       
    </div>
    );
  }
}

export default App;
