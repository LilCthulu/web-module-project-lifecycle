import React from 'react'

class UserCard extends React.Component {
    render() {
        const {
            bio,
            name,
            avatar,
            followers,
        } = this.props;

        return(
           <div className= 'UserCard'>
               <img src={avatar} alt={`A picture of ${name}`}/>
               <h2>{name}</h2>
               <p>{bio}</p>
               <h3>{followers}</h3>
            </div> )
    }
}

export default UserCard