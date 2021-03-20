import React, { useState } from 'react';
import {
  Link
} from "react-router-dom";
import axios from 'axios';

function Register() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');

  async function onSubmit(e) {
    e.preventDefault();

    if (!username || !password || !image) {
      alert('Field tidak boleh kosong');
    }

    let response = await axios({
      method: 'post',
      url: 'http://localhost:5000/users/register',
      data: {
        username: username,
        password: password,
        image: image
      }
    });

    if (response.status == '200') {
      setUsername('');
      setPassword('');
      setImage('');

      alert(response.data.msg);
    } else {
      alert(response.data.msg);
    }
  }

  return (
    <div class="row">
        <div class="grid flex justify-center m-5">
            <div class="grid-cols-12 m-5">
                <h1 class="text-center text-lg text-black"> Pendaftaran </h1>
            </div>

            <div class="row float-left">
              <div class="grid-cols-12">
                  <p class="text-md"> Username </p>
                  <input class="w-100 border-2 rounded-2xl ml-5" type="text" onInput={(event) => setUsername(event.target.value)} value={username} /> 
              </div>

              <div class="grid-cols-12">
                  <p class="text-md"> Password </p>
                  <input class="w-100 border-2 rounded-2xl ml-5" type="password" onInput={(event) => setPassword(event.target.value)} value={password} /> 
              </div>

              <div class="grid-cols-12">
                  <p class="text-md"> Image </p>
                  <input class="w-100 border-2 rounded-2xl ml-5" type="text" onInput={(event) => setImage(event.target.value)} value={image} /> 
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
                    <button class="text-xl font-medium text-white text-center ml-5 mr-5" onClick={(e) => onSubmit(e)}> Register </button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Register;
