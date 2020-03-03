import React, { useContext } from "react";
import { SignupContext } from '../contexts/SignupContext';
import axios from 'axios';

/*
TODO: Style to look presentable
*/
export default function Signup() {
  // Grab our global context and destructure props passed to the provider.
  const { initState, dispatch } = useContext(SignupContext); 

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch({type: 'SUBMIT'})
    axios.post('https://troll-findr.herokuapp.com/api/auth/register', initState)
      .then(res=>{
        dispatch({type: 'SUCCESS'})
        console.log(res.data)
      })
      .catch(err=>{
        dispatch({type: 'ERROR'})
        alert('Sign up failed!')
        console.log(err)
      })
  }

    return (
      <form className="w-25" onSubmit={handleSubmit}>
        <div className="d-flex flex-column justify-content-center">
          <div className="form-group">
            <label>First Name*</label>
              <input 
              type="text" 
              name="name" 
              className="form-control" 
              aria-describedby="emailHelp" 
              placeholder="Enter a first name"
              value={initState.fname}
              // Pretty neat trick to handle form inputs with a reducer rather than creating many functions.
              onChange={e=>dispatch({type:'FORM', field: 'fname', value: e.target.value})} 
              required 
              />
          </div>
          <div className="form-group">
            <label>Last Name*</label>
              <input 
              type="text" 
              name="lname" 
              className="form-control" 
              aria-describedby="emailHelp" 
              placeholder="Enter a last name" 
              value={initState.lname}
              onChange={e=>dispatch({type:'FORM', field: 'lname', value: e.target.value})}
              required 
              />
          </div>
          <div className="form-group">
            <label>Username*</label>
              <input 
              type="text" 
              name="name" 
              className="form-control" 
              aria-describedby="emailHelp" 
              placeholder="Enter a username"
              value={initState.username}
              onChange={e=>dispatch({type:'FORM', field: 'username', value: e.target.value})} 
              required 
              />
          </div>
          <div className="form-group">
            <label>Email address*</label>
              <input 
              type="email" 
              className="form-control" 
              aria-describedby="emailHelp" 
              placeholder="Enter an email"
              value={initState.email}
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
          {!initState.loading ? <button type="submit" className="btn btn-primary align-self-center w-50">Submit</button> : <button type="submit" className="btn btn-primary align-self-center w-50" disabled={initState.loading}>Submitting...</button>}
          </div>
      </form>
    )
}