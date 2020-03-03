import React, { useContext, useState } from "react";
import { SignupContext } from '../contexts/SignupContext';
import axios from 'axios';

/*
TODO: Style to look presentable
*/
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
      <form className="w-25" onSubmit={handleSubmit}>
        <div className="d-flex flex-column">
        <div className="form-group">
            <label>Username*</label>
              <input 
              type="text" 
              className="form-control" 
              aria-describedby="emailHelp" 
              placeholder="Enter your First Name"
              value={initState.username}
              onChange={e=>dispatch({type:'FORM', field: 'first_name', value: e.target.value})} 
              required 
              />
          </div>
          <div className="form-group">
            <label>Username*</label>
              <input 
              type="text" 
              className="form-control" 
              aria-describedby="emailHelp" 
              placeholder="Enter your Last Name"
              value={initState.username}
              onChange={e=>dispatch({type:'FORM', field: 'last_name', value: e.target.value})} 
              required 
              />
          </div>
          <div className="form-group">
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
          <div className="form-group">
            <label>Username*</label>
              <input 
              type="text" 
              className="form-control" 
              aria-describedby="emailHelp" 
              placeholder="Enter your Email"
              value={initState.username}
              onChange={e=>dispatch({type:'FORM', field: 'email', value: e.target.value})} 
              required 
              />
          </div>
          <div className="form-group">
              <label>Password*</label>
              <input 
              type="password" 
              className="form-control" 
              placeholder="Enter a Password"
              value={initState.password}
              onChange={e=>dispatch({type:'FORM', field: 'password', value: e.target.value})} 
              required 
              />
              <small>* All fields are required</small>
          </div>
          {!loading ? <button type="submit" className="btn btn-primary align-self-center w-50">Submit</button> : <button type="submit" className="btn btn-primary align-self-center w-50" disabled={loading}>Submitting...</button>}
          </div>
      </form>
    )
}