import React, { useContext, useState } from "react";
import { LoginContext } from '../contexts/LoginContext';
import axios from 'axios';
import styled from 'styled-components'

const LoginForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 1%;
`

export default function Login(props) {
  // Grab our global context and destructure props passed to the provider.
  const { initialState, dispatch } = useContext(LoginContext);
  // Set local context to prevent double submitting by disabling the button while it's submitting.
  const [loading, setLoading] = useState(false); 


  const handleSubmit = e => {
    e.preventDefault();
    dispatch({type: 'LOGIN'})
    setLoading(true);
    axios.post('https://troll-findr.herokuapp.com/api/auth/login', initialState)
      .then(res=>{
        alert('Log in successful!')
        window.localStorage.setItem('token', res.data.token);
        props.history.push(`/HomePage/${props.match.params.id}`);
        console.log(res.data)
        setLoading(false);
      })
      .catch(err=>{
        alert('Log in failed!')
        setLoading(false);
        console.log(err)
      })

  }

    return (
      <LoginForm>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username*</label>
              <input type="text" 
              name="username" 
              placeholder="Enter your username" 
              value={initialState.username}
              // Pretty neat trick to handle form inputs with a reducer rather than creating many functions.
              onChange={e=>dispatch({ type: 'FORM', field: 'username', value: e.target.value })}
              required 
              />
          </div>
          <div>
            <label>Password*</label>
              <input 
              type="password" 
              placeholder="Enter your Password" 
              value={initialState.password}
              onChange={e=>dispatch({ type: 'FORM', field: 'password', value: e.target.value })}
              required 
              />
              <small>* All fields are required</small>
          </div>
          {!loading ? <button type="submit">Submit</button> : <button type="submit" disabled={loading}>Submitting...</button>} 
      </form>
    </LoginForm>
    )
}