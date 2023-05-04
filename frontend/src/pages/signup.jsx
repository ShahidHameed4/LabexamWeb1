import React from 'react';
import './style.css'


const signup=   () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const value = Object.fromEntries(data.entries());
        console.log(value);
        
  const email = document.querySelector('#email').value;
  const username = document.querySelector('#newusername').value;
  const password = document.querySelector('#newpassword').value;
  const name = document.querySelector('#name').value;
  const bio = document.querySelector('#bio').value;
  const mobile = document.querySelector('#mobile').value;
  const role = document.querySelector('#role').value;
  const city = document.querySelector('#city').value;

  const newUser = {
    email,
    username,
    password,
    name,
    bio,
    mobile,
    role,
    city,
  };

  try {
    const response =  fetch('http://localhost:3001/api/user/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });

    if (response.ok) {
      const data =  response.json();

      console.log('User registered:', data);
    } else {
      console.log('Error registering user:', response.status);
    }
  } catch (error) {
    console.error('Error registering user:', error);
  }

    }


    return(
        <>
     <div class="container">
      <form onSubmit={handleSubmit} >
        <h2>Signup</h2>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label for="newusername">Username:</label>
        <input type="text" id="newusername" name="newusername" required />
        <label for="newpassword">Password:</label>
        <input type="password" id="newpassword" name="newpassword" required />
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required/>
        <label for="bio">Bio:</label>
        <textarea id="bio" name="bio" required></textarea>
        <label for="mobile">Mobile:</label>
        <input type="tel" id="mobile" name="mobile" required/>
        <label for="role">Role:</label>
        <select id="role" name="role" required>
          <option value="">--Select--</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <label for="city">City:</label>
        <input type="text" id="city" name="city" required />
        <input type="submit" value="Signup" />
      </form>
    </div>
        </>


    )}

export default signup;