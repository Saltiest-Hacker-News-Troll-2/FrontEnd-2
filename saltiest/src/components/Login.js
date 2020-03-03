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
      <form className="w-25" onSubmit={handleSubmit}>
        <div className="d-flex flex-column align-items-center w-50">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Username</label>
              <input type="text" 
              className="form-control" 
              name="username" id="exampleInputEmail1" 
              aria-describedby="emailHelp" 
              placeholder="Enter your username" 
              value={initialState.username}
              // Pretty neat trick to handle form inputs with a reducer rather than creating many functions.
              onChange={e=>dispatch({ type: 'FORM', field: 'username', value: e.target.value })}
              required 
              />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
              <input 
              type="password" 
              className="form-control" 
              id="exampleInputPassword1" 
              placeholder="Enter your Password" 
              value={initialState.password}
              onChange={e=>dispatch({ type: 'FORM', field: 'password', value: e.target.value })}
              required 
              />
          </div>
          {!initialState.loading ? <button type="submit" className="btn btn-primary">Submit</button> : <button type="submit" className="btn btn-primary" disabled={initialState.loading}>Submitting...</button>}
        </div>
    </form>
    )
}