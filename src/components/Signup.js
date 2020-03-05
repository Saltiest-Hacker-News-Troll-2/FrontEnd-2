import React, { useContext, useState } from "react";
import { SignupContext } from '../contexts/SignupContext';
import axios from 'axios';
import styled from 'styled-components'

const SignupForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 1%;
`

export default function Signup() {
  // Grab our global context and destructure props passed to the provider.
  const { initState, dispatch } = useContext(SignupContext);
  // Set local context to prevent double submitting by disabling the button while it's submitting.
  const [loading, setLoading] = useState(false); 

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({type: 'SUBMIT'})
    setLoading(true)
    axios.post('https://troll-findr.herokuapp.com/api/auth/register', initState)
      .then(res=>{
        console.log(res)
        alert('User registered successfully!')
        setLoading(false)
      })
      .catch(err=>{
        alert('Sign up failed!')
        console.log(err)
        setLoading(false)
      })
  }

    return (
      <SignupForm>
      <form onSubmit={handleSubmit}>
        <div>
        <div>
            <label>First Name</label>
              <input 
              type="text" 
              name="first_name"
              className="form-control" 
              aria-describedby="emailHelp" 
              placeholder="Enter your First Name"
              value={initState.first_name}
              onChange={e=>dispatch({type:'FORM', field: 'first_name', value: e.target.value})} 
              />
          </div>
          <div>
            <label>Last Name</label>
              <input 
              type="text" 
              name="last_name"
              className="form-control" 
              aria-describedby="emailHelp" 
              placeholder="Enter your Last Name"
              value={initState.last_name}
              onChange={e=>dispatch({type:'FORM', field: 'last_name', value: e.target.value})} 
              />
          </div>
          <div>
            <label>Username*</label>
              <input 
              type="text" 
              className="form-control" 
              aria-describedby="emailHelp" 
              placeholder="Enter a Username"
              value={initState.username}
              onChange={e=>dispatch({type:'FORM', field: 'username', value: e.target.value})} 
              required 
              />
          </div>
          <div>
            <label>Email</label>
              <input 
              type="text" 
              className="form-control" 
              name="email"
              aria-describedby="emailHelp" 
              placeholder="Enter your Email"
              value={initState.email}
              onChange={e=>dispatch({type:'FORM', field: 'email', value: e.target.value})} 
              />
          </div>
          <div>
              <label>Password*</label>
              <input 
              type="password" 
              className="form-control" 
              placeholder="Enter a Password"
              value={initState.password}
              onChange={e=>dispatch({type:'FORM', field: 'password', value: e.target.value})} 
              required 
              />
              <small>* fields are required</small>
          </div>
          {!loading ? <button type="submit">Submit</button> : <button type="submit" disabled={loading}>Submitting...</button>}
          </div>
      </form>
      </SignupForm>
    )
}