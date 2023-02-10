import React, { useState } from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import { Link, } from "react-router-dom"
import './login.scss'
import loginImg from '../../assets/images/login.png'
import userIcon from '../../assets/images/user.png'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../../firebase'



const Login = () => {
  const firebaseAuth =getAuth(app)
  const provider = new GoogleAuthProvider();

  const login = async() => {
    const response = await signInWithPopup(firebaseAuth , provider)
    console.log(response)
    
      toast.success('Sucessfully logged in')
      navigate('/')
    
  }
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()



  const signin = async (e) => {
    e.preventDefault()



    try {
      const userCredential = await signInWithEmailAndPassword(auth, email,
        password)
      const user = userCredential.user
      console.log(user)
      toast.success('Sucessfully logged in')
      navigate('/')

    } catch (error) {
      
    }
  }



  return <section>
    
      
        
          <div className="login_container d-flex justify-content-center">
            
            <div className="login_form">
              <div className="user">
                <img src={userIcon} alt='' />
              </div>
              <h2>Login</h2>

              <Form onSubmit={signin}>
                <FormGroup>
                  <input type="email" placeholder='Email'
                    value={email}
                    onChange={e => setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup>
                  <input type="password" placeholder='Password'
                    value={password}
                    onChange={e => setPassword(e.target.value)} />
                </FormGroup>
                <button className='btn secondary_btn auth_btn' type='submit'>Login</button>
                <button class="login-with-google-btn" onClick={login} >
                  Sign in with Google
                </button>
              </Form>
              <p>Don't have an account? <Link className='rtux' to='/Signup'>Create</Link></p>
            </div>
          </div>
          <ToastContainer />
      
    
    
  </section>


}

export default Login