import React from 'react'

const UserLoginStatus = (props) => {
    if (props.isLoggedIn && props.isAdmin) {
        return <p>Logged in as admin</p>
    } else {
        return <p>Logged in as user</p>
    }
}

export default UserLoginStatus
