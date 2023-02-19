import  {useState,useEffect} from 'react'
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from '../../firebase'

const useAuth = () => {

    const [currentUser, setCurrentUser] = useState({})

    useEffect(()=>{
       onAuthStateChanged(auth, (user)=>{
        if(user){
            setCurrentUser(user.auth.currentUser)
        }
        else{
            setCurrentUser(null)
        }
       }) 
    })
console.log("CUrent user: ",currentUser)
  return {
    currentUser,
  }
}

export default useAuth