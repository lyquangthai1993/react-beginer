import React, {useState, useEffect} from 'react'
import './RegisterPage.sass'
import { Link } from "react-router-dom"
import {notiContent} from '../../utils/common'
import {UseFormIput} from './../LoginPage/HandleInput'

const RegisterPage = () => {
  const email = UseFormIput('', 'email')
  const pass1 = UseFormIput('', 'password')
  const pass2 = UseFormIput('', 'password')
  const [notification, setNotification] = useState(null)

  // useEffect(()=>{
  //   setNotification(email.noti)
  // },[email.value])

  // useEffect(()=>{
  //   setNotification(pass1.noti)
  // },[pass1.value])

  // useEffect(()=>{
  //   setNotification(pass2.noti)
  // },[pass2.value])

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (pass1.value !== pass2.value) {
      setNotification(notiContent.comparePass)
    } else {
      console.log('Succesfuly :)')
    }
  }

  return (
    <div className="register-page container">
      <form className="register-form m-auto" onSubmit={e => handleSubmitForm(e)}>
        <h4>REGISTER</h4>
        <hr/>
        <div className="form-group">
          <label className="text-left w-100">Email</label>
          <input type="email" className="form-control" value={email.value} onChange={email.onChange} required/>
        </div>
        <div className="form-group">
          <label className="text-left w-100">Password</label>
          <input type="password" className="form-control" value={pass1.value} onChange={pass1.onChange} required/>
        </div>
        <div className="form-group">
          <label className="text-left w-100">Confirm Password</label>
          <input type="password" className="form-control" value={pass2.value} onChange={pass2.onChange} required/>
        </div>
        <button type="submit" className="btn btn-primary w-50">Register</button>
      </form>

      {/* REGISTER */}
      <div className="mt-3">
        <p>Do you already have an account? <Link to="/login">Login</Link></p>
      </div>

      {/* NOTIFICATION */}
      {notification && 
      <div className="notification mt-3">
        <p className="notification text-danger">{notification}</p>
      </div>}

    </div>
  )
}

export default RegisterPage