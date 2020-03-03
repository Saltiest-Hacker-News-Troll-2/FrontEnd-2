import React, { useContext, useState } from "react";
import { LoginContext } from '../contexts/LoginContext';
import axios from 'axios';

/*
TODO: Style to look presentable
*/
export default function Login(props) {
  // Grab our global context and destructure props passed to the provider.
  const { initialState, dispatch } = useContext(LoginContext);
  // Set local context to prevent double submitting by disabling the button while it's submitting.
  const [loading, setLoading] = useState(false); 

  // Will be posting to back end up I can.
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({type: 'LOGIN'})
    setLoading(true);
    axios.post('https://troll-findr.herokuapp.com/api/auth/login', initialState)
      .then(res=>{
        alert('Log in successful!')
        window.localStorage.setItem('token', res.data.token);
        props.history.push('/dashboard');
        setLoading(false);
      })
      .catch(err=>{
        alert('Log in failed!')
        setLoading(false);
        console.log(err)
      })

  }

    return (
      <div className="w-25">
        <form className="d-flex flex-column" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username*</label>
              <input type="text" 
              className="form-control" 
              name="username" 
              placeholder="Enter your username" 
              value={initialState.username}
              // Pretty neat trick to handle form inputs with a reducer rather than creating many functions.
              onChange={e=>dispatch({ type: 'FORM', field: 'username', value: e.target.value })}
              required 
              />
          </div>
          <div className="form-group">
            <label>Password*</label>
              <input 
              type="password" 
              className="form-control" 
              placeholder="Enter your Password" 
              value={initialState.password}
              onChange={e=>dispatch({ type: 'FORM', field: 'password', value: e.target.value })}
              required 
              />
              <small>* All fields are required</small>
          </div>
          {!loading ? <button type="submit" className="btn btn-primary align-self-center w-50">Submit</button> : <button type="submit" className="btn btn-primary align-self-center w-50" disabled={loading}>Submitting...</button>} 
      </form>
    </div>
    )
}