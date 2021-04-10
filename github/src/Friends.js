import React from 'react'

class Friends extends React.Component {
    render() {
        const {
            login,
        } = this.props;

        return (
            <div className= 'Friend-Cards'>
                {login.map((user) => { 
                <h3>{user}</h3>
                 })}                 
            </div>
            )
    }
}

export default Friends;