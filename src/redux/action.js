import store from './store'
import firebase from '../firebase/Firebase'

export const verifyLogged = async (user) => {
    const type = 'verifyLogged'
    store.dispatch({type, user})
    if (!user) {
        await firebase.auth().signOut()
    }
}

