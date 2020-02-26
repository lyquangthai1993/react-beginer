import { useState, useEffect } from 'react'
import { validatePassword, validateEmail, notiContent } from '../../utils/common'

export const UseFormIput = (initValue, type) => {
  const [value, setValue] = useState(initValue)
  const notification = HandleNoti(null, type)
  const handleChange = (e) => {
    setValue(e.target.value)
    notification.validateValue(e.target.value)
  }
  useEffect(() => {
    console.log(type + ' = ' + value);
  }, [value]);

  return { value, onChange: handleChange, noti: notification.noti }
}

const HandleNoti = (initNoti, type) => {
  const [noti, setNoti] = useState(initNoti)
  const validateValue = (value) => {
    if (type === 'email') {
      validateEmail(value) ? setNoti(null) : setNoti(notiContent.email)
    } else {
      validatePassword(value) ? setNoti(null) : setNoti(notiContent.pass)
    }
  }
  return { noti, validateValue: validateValue }
}