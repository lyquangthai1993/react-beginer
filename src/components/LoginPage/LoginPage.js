import React, {useState, useEffect} from 'react'
import './LoginPage.sass'
import firebase from '../../firebase/Firebase'
import { Link } from "react-router-dom"
import {connect} from 'react-redux'
import {verifyLogged} from './../../redux/action'
import {UseFormIput} from './HandleInput'

const LoginPage = () => {
  const email = UseFormIput('', 'email')
  const password = UseFormIput('', 'password')
  let [notification, setNotification] = useState(null)

  // useEffect(()=>{
  //   setNotification(email.noti)
  // },[email.value])

  // useEffect(()=>{
  //   setNotification(password.noti)
  // },[password.value])

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log('email =', email)
    console.log('password =', password)
  }

  const doSigIn = async (provider) => {
    await firebase.auth().signInWithPopup(provider).then(function(result) {
      console.log('user =', result.user)
    }).catch(function(error) {
      console.log('error =', error.message)
    });
    verifyLogged(firebase.auth().currentUser)
  }

  const listObjLogin = [
    { classBtn: 'btn-danger',
      classIcon: 'fa fa-google-plus-square',
      content: 'Login With Google'
    },{
      classBtn: 'btn-dark',
      classIcon: 'fa fa-github-square',
      content: 'Login With Github'
    },{
      classBtn: 'btn-primary',
      classIcon: 'fa fa-facebook-official',
      content: 'Login With Facebook'
    }
  ]

  const loginBy = async (type) => {
    let provider
    switch(type) {
      case listObjLogin[0].content:
        provider = new firebase.auth.GoogleAuthProvider()
        break;
      case listObjLogin[1].content:
        provider = new firebase.auth.GithubAuthProvider()
        break;
      case listObjLogin[2].content:
        provider = new firebase.auth.FacebookAuthProvider()
        break;
      default:
        return null
    }
    await doSigIn(provider)
  }

  const btnLogin = () => {
    return listObjLogin.map((e, index)=>
      <div className={`d-block btn ${e.classBtn} mb-2`} onClick={()=>loginBy(e.content)} key={index}>
        <i className={`${e.classIcon} mr-2`}></i>
        <strong>{e.content}</strong>
      </div>
    )}

  return (
    <div className="login-page container">

      {/* LOGIN FORM */}
      <form className="login-form m-auto" onSubmit={e => handleSubmitForm(e)}>
        <h4>LOGIN</h4>
        <hr/>
        <div className="form-group">
          <label className="text-left w-100">Email</label>
          <input type="text" className="form-control" value={email.value} onChange={email.onChange}/>
        </div>
        <div className="form-group">
          <label className="text-left w-100">Password</label>
          <input type="password" className="form-control" value={password.value} onChange={password.onChange}/>
        </div>
        <button type="submit" className="btn btn-primary w-50">Login</button>
      </form>

      {/* REGISTER */}
      <div className="mt-3">
        <p>Do you already have an account? <Link to="/register">Register</Link></p>
      </div>

      {/* NOTIFICATION */}
      {notification &&
      <div className="mt-3">
        <p className={`notification text-danger`}>{notification}</p>
      </div>}

      {/* LOGIN BY GOOGLE/FACEBOOK/GITHUB */}
      <div className="login-btn-container m-auto pt-2">
        {btnLogin()}
      </div>
    </div>
  )
}

export default connect(function(state){
  return {
    user: state.user,
  }
})(LoginPage)

