import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.init";

const auth = getAuth(app);

const SignUp = () => {
  const [passwordError, setPasswordError] = useState('');

  //! Successfully form fill up korar por ai success state ti kaj korbe,, Default vabe ata false thakbe,, success hole true dekhabe...
  
  const [Success, setSuccess] = useState(false);


  //! To handle input button by onSubmit event...
 const handleRegister = (event) => {
    event.preventDefault();
 //! user jokhon second time hok ba first time hok,, jokhon e field ta new start korbe,, Tokhon amder success message ta default vabe false thakbe...     

    setSuccess(false);

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const password = form.password.value;
    console.log(name, email, number, password);

    //! Password validation by regex...
    if (password.length < 6) {
      setPasswordError("Password should be at least 6 characters");
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setPasswordError("Please provide at least to uppercase");
      return;
    }
    if (!/(?=.*[!@#$&*])/.test(password)) {
      setPasswordError("Please provide at least one special character");
      return;
    }

    //! Jodi kono error na khay taholy setPasswordError k empty kore dibe...
    setPasswordError("");

    //! validate the email address and password provided by the user, then pass them to the !! createUserWithEmailAndPassword !! method:
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        //! Successfully form fill up korar por ai success message ti true hobe / dekhabe...
        setSuccess(true)
        //! User jokhon successfully register korbe,, Tokhon form ta reset hoye jabe...
        form.reset();
        //! user er email verify korar jonno...
        verifyEmail();
        updateUserName(name)
      })
      .catch((error) => {
        console.error("error", error);

        //! Ek e email id diye jodi second time registration korar chesta kora hoy, taholy ai error ta UI te dekhabe...
        setPasswordError(error.message);
      });
  };
//! user jokhon kono email id diye register korte jabe tokhon amra sei email id k verify korbo,,, amader condition onuja e sob thik ase kina! Se khetre ekta email just ekbar e verify hobe... ekbar verify hoye jaowar por user next time joto bar icce log in korte parbe,, user k bar bar ei verify er jamelay porte hobe na!!!!
  const verifyEmail = ()=>{
     sendEmailVerification(auth.currentUser)
     .then(()=>{
        alert('please check your email and varify your email address')
     })
  };

  const updateUserName = (name)=>{
      updateProfile(auth.currentUser, {
        displayName: name
      })
      .then(()=>{
        console.log('Display name updated')
      })
      .catch(error => console.error(error))
  }

  return (
     <div className="grid lg:grid-cols-3 mx-5 lg:mx-0 mt-10">
     <img src="https://t3.ftcdn.net/jpg/03/39/70/90/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg" alt="" />

     <div className="form lg:col-span-2 lg:w-[50%]  mt-[5%]  lg:mt-[1%] py-5 rounded-lg ">
     <div>
       <div className="grid grid-cols-1 lg:grid-cols-3">
         <img className="lg:w-[50%] lg:h-[100%] w-[100px] h-[100px] rounded-lg mx-auto"
           src="https://cdn5.vectorstock.com/i/thumb-large/90/99/black-thin-line-sign-up-with-hand-vector-28279099.jpg"
           alt=""
         />
         <h1 className="mt-7 lg:flex lg:justify-start lg:ml-12 col-span-2">
           Sign up Now
         </h1>
       </div>
       <div className="flex justify-center">
         <form onSubmit={handleRegister} className="mt-6 ">
           <div className="name">
             <input className="block   py-1 px-7 mb-2 rounded-md"
               type="text" name="name" placeholder="Enter Your Name" required
             />
           </div>
           <input className="block   py-1 px-7 mb-2 rounded-md"
             type="text"  name="email"  placeholder=" email " required
           />
           <input className="block   py-1 px-7 mb-2 rounded-md"
             type="number"  name="number" placeholder=" number " required
           />
           <input className="block  py-1 px-7 rounded-md"
             type="password" name="password" placeholder=" password" required
           />
           <p className="text-red-700">
             <small>{passwordError}</small>
           </p>
           {Success && <p className="text-green-600"><small>Registration Successful</small></p>}
           <button className="mt-5 text-gray-500 py-1 hover:text-black rounded-md px-3">
             Sign Up
           </button>
         </form>
       </div>

      <p className="mt-5 lg:ml-3 px-2"><small>Already have an account?        
       <button className='ml-3 hover:text-blue-500 py-1 px-2 rounded-md'>
      <Link className=" px-2" to={"/login"}>
       Login
      </Link>
    </button>
    </small></p>
    
     </div>
   </div>
     
     </div>
  );
};

export default SignUp;
