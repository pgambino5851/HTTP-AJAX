import React from 'react'

const Friend = props =>{
    return(
        <div className="friend-container">
            <h2 >{props.friend.name}</h2>
            <p>{`Age: ${props.friend.age}`}</p>
            <p>{`E-mail: ${props.friend.email}`}</p>
        </div>
    )
}

export default Friend;