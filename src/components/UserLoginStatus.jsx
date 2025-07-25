import React from 'react'

const UserLoginStatus = (props) => {
    if (props.isLoggedIn && props.isAdmin) {
        return <h4>Logged in as Admin</h4>
    } else {
        return <h4>Logged in as User</h4>
    }
}

export default UserLoginStatus
