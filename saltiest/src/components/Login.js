import React, { useContext } from "react";
import { LoginContext } from '../contexts/LoginContext';

/*
TODO: Style to look presentable
*/
export default function Login() {
  // Grab our global context and destructure props passed to the provider.
  const { initialState, dispatch } = useContext(LoginContext);

  // Will be posting to back end up I can.
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({type: 'LOGIN'})
  }

    return (
      <div className="w-50">
        <form className="w-25 d-flex flex-column" onSubmit={handleSubmit}>
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
          {!initialState.loading ? <button type="submit" className="btn btn-primary align-self-center w-50">Submit</button> : <button type="submit" className="btn btn-primary align-self-center w-50" disabled={initialState.loading}>Submitting...</button>} 
      </form>
    </div>
    )
}