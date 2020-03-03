import React, { useContext } from "react";
import { SignupContext } from '../contexts/SignupContext';

/*
TODO: Style to look presentable
*/
export default function Signup() {
  // Grab our global context and destructure props passed to the provider.
  const { initState, dispatch } = useContext(SignupContext); 

  // For now nothing, but will be posting to back end when I can.
  const handleSubmit = e => {
    e.preventDefault();
  }

    return (
      <form className="w-25" onSubmit={handleSubmit}>
        <div className="d-flex flex-column align-items-center w-50">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">First Name*</label>
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
            <label htmlFor="exampleInputEmail1">Last Name*</label>
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
            <label htmlFor="exampleInputEmail1">Username*</label>
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
            <label htmlFor="exampleInputEmail1">Email address*</label>
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
              <label htmlFor="exampleInputPassword1">Password*</label>
              <input 
              type="password" 
              className="form-control" 
              placeholder="Password"
              value={initState.password}
              onChange={e=>dispatch({type:'FORM', field: 'password', value: e.target.value})} 
              required 
              />
              <small>* These fields are required</small>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          </div>
      </form>
    )
}