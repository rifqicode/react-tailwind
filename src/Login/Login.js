import React, { Component, useState } from 'react';
import {
  Link,
  Redirect
} from "react-router-dom";
import axios from 'axios';

function Login() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [jwt, setJwt] = useState('');
  
  async function onSubmit(e) {
    e.preventDefault();
    
    let response = await axios({
      method: 'post',
      url: 'http://localhost:5000/users/authentication',
      data: {
        username: username,
        password: password
      }
    });

    if (response.status != '200') {
      alert(response.data.msg);

      setUsername('');
      setPassword('');
      return false;
    }

    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.data));
    setJwt(response.data.token);
  }

  // if (jwt) {
  //   return <Redirect to='/'  />
  // } else {
    return (
      <div class="row">
          <div class="grid flex justify-center m-5">
              <div class="grid-cols-12 m-5">
                  <h1 class="text-center text-lg text-black"> Login </h1>
              </div>
  
              <div class="row float-left">
                <div class="grid-cols-12">
                    <p class="text-md"> Username </p>
                    <input class="w-100 border-2 rounded-2xl ml-5" type="text" onInput={(e) => setUsername(e.target.value)} value={username} /> 
                </div>
  
                <div class="grid-cols-12">
                    <p class="text-md"> Password </p>
                    <input class="w-100 border-2 rounded-2xl ml-5" type="password" onInput={(e) => setPassword(e.target.value)} value={password} /> 
                </div>
              </div>
          </div>
  
          <div class="flex flex-nowrap justify-center">
              <div class="p-4 max-w-sm mx-10 bg-white flex rounded-xl shadow-md items-center space-x-4 m-2 bg-red-400">
                  <div> 
                      <Link to="/" className="text-xl font-medium text-white text-center ml-5 mr-5"> Batal </Link>
                  </div>
              </div>
  
              <div class="p-4 max-w-sm mx-10 bg-white flex rounded-xl shadow-md items-center space-x-4 m-2 bg-blue-400">
                  <div>
                      <button class="text-xl font-medium text-white text-center ml-5 mr-5" onClick={(e) => onSubmit(e)}> Login </button>
                  </div>
              </div>
          </div>
      </div>
    );
  // }
  
}

export default Login;
