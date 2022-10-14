import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import app from "../../firebase/firebase.init";
import "./LogIn.css";
import {BsFacebook, BsGithub, BsGoogle } from 'react-icons/bs';

const auth = getAuth(app);

const LogIn = () => {
  const [success, setSuccess] = useState(false);

  const [userEmail, setUserEmail]= useState('')

  const handleSubmit = (event) => { 
    event.preventDefault();
    setSuccess(false);

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess(true);
      })
      .catch((error) => console.error("error", error));
  };

  const handleEmailBlur = event =>{
    const email = event.target.value;
    setUserEmail(email)
    //! console.log(email);
  }

  const handleForgetPassword =()=>{
    if(!userEmail){
        alert('Please enter your email address!');
        return;
    }

    sendPasswordResetEmail(auth, userEmail)
    .then(()=>{
        alert('Password reset email sent. Please check your email.')
    })
    .catch(error => console.error('error', error))
  }
  return (
    <div className="lg:grid grid-cols-3">
    <img className="hidden lg:grid w-[50%] mx-auto mt-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTndRmGMIVPZ0KuQYgXsZW5G8Yukmyx36Sagg&usqp=CAU" alt="" />

    <div className="form lg:col-span-2 lg:w-[50%] mt-[5%] py-5 rounded-lg ">
    <div>
      <h1>Log In for open new window</h1>
      <img
        className="w-[50px] h-[50px] rounded-full ml-[40%] lg:mx-auto mt-5"
        src="https://cdn5.vectorstock.com/i/thumb-large/90/99/black-thin-line-sign-up-with-hand-vector-28279099.jpg"
        alt=""
      />
      <form onSubmit={handleSubmit}>
        <div className="mt-6 mx-16 lg:mx-24">
          <input onBlur={handleEmailBlur} className="block ml-3  py-1 px-7 mb-2 rounded-md"
            type="text" name="email" placeholder="Enter your email address"
          />
          <input className="block ml-3 py-1 px-7 rounded-md"
            type="password"
            name="password" placeholder="Enter your valid password"
          />
        </div>
        <button className="mt-5 text-gray-500 hover:text-black py-1 rounded-md px-3">
          {" "}
          Log In{" "}
        </button>
      </form>
      {success && (
        <p className="text-green-600">
          <small>Successfully log in !</small>
        </p>
      )}
      <p className="text-gray-600 mt-5">
        No account yet?
        <span className="text-black font-semibold"> or </span>
        <button className="py-1 px-2 hover:text-blue-500 rounded-md">
          <Link to={"/signup"}>Register</Link>
        </button>
      </p>
      <p className="text-gray-600">
      <small>
      Forget password?
      <button className="ml-3 mt-5 py-1 px-2 hover:text-blue-500 rounded-md">
      <Link onClick={handleForgetPassword}>Reset</Link>
      </button>
      </small>
      </p>
    </div>
    <div className="icons flex lg:shadow-slate-600 shadow-md py-5 rounded-lg mx-12 lg:mx-24 mt-7">
    <BsFacebook className="ml-16 cursor-pointer hover:text-blue-600"></BsFacebook>
    <BsGoogle className="ml-10 cursor-pointer hover:text-red-500"></BsGoogle>
    <BsGithub className="ml-10 cursor-pointer hover:text-gray-800"></BsGithub>
    </div>
    </div>
    </div>
  );
};

export default LogIn;
