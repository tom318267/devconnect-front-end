import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';


const Register = ({ setAlert }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value  });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if(password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      console.log("Success");
      // const newUser = {
      //   name: name,
      //   email: email,
      //   password: password
      // }
      //
      // try {
      //   const config = {
      //     headers: {
      //       "Content-Type": "application/json"
      //     }
      //   }
      //
      //   const body = JSON.stringify(newUser);
      //
      //   const res = await axios.post("/api/users", body, config);
      //   console.log(res.data);
      // } catch(err) {
      //   console.error(err.response.data);
      // }
    }
  }

  return (
    <div className="Register mt-5">
      <div className="text-center">
        <h1>Sign Up</h1>
        <p className="lead"><i class="fas fa-user"></i> Create Your Account</p>
      </div>
      <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <label for="name">Name</label>
          <input onChange={e => handleChange(e)} value={name} name="name" type="text" class="form-control" id="name" placeholder="Enter name"/>
        </div>
        <div className="form-group">
          <label for="email">Email address</label>
          <input onChange={e => handleChange(e)} value={email} type="email" name="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input onChange={e => handleChange(e)} value={password} type="password" name="password" class="form-control" id="password" placeholder="Password"/>
        </div>
        <div className="form-group">
          <label for="password2">Confirm Password</label>
          <input onChange={e => handleChange(e)} value={password2} type="password" name="password2" class="form-control" id="password2" placeholder="Confirm Password"/>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Submit</button>
        <p className="mt-2 text-center">Already have an account? <Link to="/login">Sign In</Link></p>
      </form>
    </div>
  )
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired
}

export default connect(null, { setAlert })(Register);
