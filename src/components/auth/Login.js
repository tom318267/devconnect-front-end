import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value  });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
      console.log("Success");
    }

  return (
    <div>
      <div className="Login mt-5">
        <div className="text-center">
          <h1>Sign In</h1>
          <p className="lead">Sign Into Your Account</p>
        </div>
        <form onSubmit={e => onSubmit(e)}>
          <div class="form-group">
            <label for="email">Email address</label>
            <input onChange={e => handleChange(e)} type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input onChange={e => handleChange(e)}  type="password" class="form-control" id="password" placeholder="Password"/>
          </div>
          <button type="submit" class="btn btn-primary btn-block">Login</button>
          <p className="mt-2 text-center">Don't have an account? <Link to="/register">Sign Up</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login;
