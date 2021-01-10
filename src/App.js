import logo from './logo.svg';
import './App.css';
import './index.css';
import axios from 'axios';

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      name: null,
      descriptioon: null,
      image: null
    } 
  }

  submit() {
    let post = axios.post('http://localhost:5000/users/register', {
      name: this.state.name,
      description: this.state.description,
      image: this.state.image
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });

    console.log(post);
  }

  render() {
    return (
      <div>
        <div class="container mx-auto shadow-lg">
          <div class="mx-auto text-center">
              <img src={logo} class="h-16 m-16 align-middle mx-auto"></img>
              <h4> Form Feed Back </h4>  
          </div>

          <div class="col-12">
            <div class="mx-auto text-center">
                <label> Nama :</label>
                <input name="name" class="shadow-lg border-2 rounded" type="text" onChange={(e) => this.setState({name: e.target.value})} />
            </div>
            
            <div class="mx-auto text-center">
                <label>  Description :</label>
                <input name="description" class="shadow-lg border-2 rounded" type="text" onChange={(e) => this.setState({description: e.target.value})} />
            </div>

            
            <div class="mx-auto text-center">
                <label> Image :</label>
                <input name="file" class="shadow-lg border-2 rounded" type="file" onChange={(e) => this.setState({image: e.target.files})} />
            </div>

            
            <div class="mx-auto text-center">
                <button class="btn btn-primary" name="submit" onClick={() => this.submit()}> Submit </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
