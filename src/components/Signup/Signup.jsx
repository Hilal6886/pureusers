import React,{useState} from 'react'
import {  Container,Row,Col,Form,FormGroup} from 'reactstrap'
import {Link} from "react-router-dom"
import './Signup.scss'
import registerImg from '../../assets/images/register.png'
import userIcon from '../../assets/images/user.png'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage"
import { setDoc,doc } from 'firebase/firestore'

import{storage} from "../../firebase"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from '../../firebase';
import {useNavigate} from "react-router-dom"


const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [file, setFile] = useState('null')
  const [loading, setLoading] = useState('false');
  const navigate = useNavigate()

const signup = async(e)=>{
  e.preventDefault()
  setLoading(true);

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password);
      const user = userCredential.user

const storageRef= ref(storage, `images/${Date.now() + username}`)
const uploadTask = uploadBytesResumable(storageRef, file)
uploadTask.on((error)=>{
  toast.error (error.message);
}, ()=>{
  getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
    await updateProfile(user, {
      displayName: username,
      photoURL: downloadURL
    });


   await setDoc(doc(db,'users', user.uid),{
    uid: user.uid,
    displayName: username,
    email,
    photoURL: downloadURL,
   });

  });
})

    
      setLoading(false)
      toast.success('Account created')
      navigate('/Login')

  } catch (error) {
    setLoading(false)
    toast.error('something went wrong');

  }
}

  return <section>
    
      <Row>
        
        <Col lg='8' className='m-auto'>
          <div className="login_container d-flex justify-content-center">
            
            <div className="login_form">
              <div className="user">
                <img src={userIcon}  alt=''/>
              </div>
              
              <h2>Register</h2>

              <Form onSubmit={signup}>
              <FormGroup>
                  <input type="text" placeholder='UserName'
                  value={username}
                  onChange={e=> setUsername(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                  <input type="email" placeholder='Email'
                 value={email}
                 onChange={e=> setEmail(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                  <input type="password" placeholder='Password'
                    value={password}
                    onChange={e=> setPassword(e.target.value)}/>
                </FormGroup>
                <FormGroup className='rtux'>
                  <input type="file"
                   placeholder='Password'
                    
                    onChange={e=> setFile(e.target.files[0])}/>
                </FormGroup>
                <button className='btn secondary_btn auth_btn' type='submit'>Register</button>
              </Form>
              <p>Already have an account? <Link className='rtux' to='/Login'>Login</Link></p>
            </div>
          </div>
          <ToastContainer />
        </Col>
      </Row>
  
  </section>

  
}

export default Signup