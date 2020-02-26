import React, { useState } from 'react'
import './Menu.sass'
import { Link } from "react-router-dom"
import {connect} from 'react-redux'
import {verifyLogged} from './../../redux/action'
import logo from './../../images/logo.png'
// import { Redirect } from 'react-router'

const Menu = (props) => {

  const user = props.user
  const [currentPath, setCurrentpath] = useState(window.location.pathname)

  const createMenuTab = (url, content, name) => {
    const className = currentPath === url ? 'menu-active' : ''
    return (
      <div className={`col-12 col-sm-2 p-0 center-center menu-elm ${className}`} 
      onClick={()=> setCurrentpath(url)}>
        <Link to={url}>
          <i className={`fa ${name} mr-2 text-white`}></i>
          <span>{content}</span>
        </Link>
      </div>
    )
  }

  const avatarInfo = () => !user ? null :
  <div>
    <strong className="mr-2 text-white">Hi {user.displayName}!</strong>
    <div className="tooltip">
      <img className="menu-avatar" src={user.photoURL} alt="" />
      <span className="tooltiptext">{user.email}</span>
    </div>
  </div>

  const logoutMenuTab = () =>
  <div className="col-12 col-sm-2 center-center">
    <div className="h-pointer" onClick={()=>verifyLogged(null)}>
      <i className="fa fa-sign-out mr-2 text-white"></i>
      <span>Logout</span>
    </div>
  </div>

  return (
    <div className="menu w-100 center-center bg-info">
      <div className="row w-100">
        <div className="col-12 col-sm-2 center-center">
          <div className="logo">
            <img src={logo} alt="logo"/>
          </div>
        </div>
        <div className="col-12 col-sm-8 p-0 center-center">
          <div className="row w-100">
            {createMenuTab('/', 'Home', 'fa-home')}
            {createMenuTab('/post', 'Post', 'fa-file-text-o')}
            {createMenuTab('/profile', 'Profile', 'fa-address-card')}
            {createMenuTab('/contact', 'Contact', 'fa-info-circle')}
            {!user ? createMenuTab('/login', 'Login', 'fa-sign-in') : 
            logoutMenuTab()}
          </div>
        </div>
        <div className="col-12 col-sm-2 center-center">
          {avatarInfo()}
        </div>
      </div>
    </div>
  )
}

export default connect(function(state){
  return {
    user: state.user,
  }
})(Menu)