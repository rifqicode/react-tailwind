import './Homepage.css';
import reactLogo from '../logo.svg';
import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";


function Homepage() {
    const jwt = localStorage.getItem('token');

    return (
        <div class="row">
            <div class="grid flex justify-center m-5">
                <div class="grid-cols-12 max-w-sm border-2 rounded-3xl">
                    <img src={reactLogo} class="h-96 w-auto " />
                </div>
                <div class="grid-cols-12 m-5">
                    <h1 class="text-center text-lg text-black"> Selamat Datang {(jwt) ? jwt : 'diaplikasi React' } </h1>
                </div>
            </div>
            <div class="flex flex-nowrap justify-center">
                <div class="p-6 max-w-sm mx-10 bg-white flex rounded-xl shadow-md items-center space-x-4 m-2 bg-red-400">
                    <div> 
                        <Link to="/register" className="text-xl font-medium text-white text-center ml-5 mr-5"> Register </Link>
                    </div>
                </div>

                <div class="p-6 max-w-sm mx-10 bg-white flex rounded-xl shadow-md items-center space-x-4 m-2 bg-red-400">
                    <div>
                        <Link to="/login" className="text-xl font-medium text-white text-center ml-5 mr-5"> Login </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
