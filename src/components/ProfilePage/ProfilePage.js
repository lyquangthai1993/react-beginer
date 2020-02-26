import React from 'react'
import {connect} from 'react-redux'
import './ProfilePage.sass'

const ProfilePage  = (props) => {
  const {user} = props
  return(
    <div className="container profile-container mt-3 mb-3">
        {!user ? <h4>No Info</h4> :
        <div>
          <div className="profile-item">
            <label>Email :</label>
            <span>{user.email}</span>
          </div>
          <div className="profile-item">
            <label>Name :</label>
            <span>{user.displayName}</span>
          </div>
          <div className="profile-item d-flex">
            <img src={user.photoURL} alt="avatar" />
          </div>
        </div>}
    </div>
  )
}

export default connect(function(state){
  return { user: state.user }
})(ProfilePage)