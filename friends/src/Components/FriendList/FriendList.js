import React from 'react'
import Friend from '../Friend/Friend'

const FriendList = props => {
    return(
        <div className='friend-list'>
            <h1>Friend List</h1>
            {props.friends.map(friend => {
              return  <Friend key={friend.id} friend={friend} /> 
            })}
        </div>
    )
}

export default FriendList;