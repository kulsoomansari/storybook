import React,{useState} from 'react'
import fire from "../../config/Fire";
import Login from '../../Login/Login';

export default function FirebaseAuth() {
    const[user, setuser] = useState("")
    const[email, setEmail] = useState("")
    const[password, setpassword] = useState("")
    const[emailError, setEmailError] = useState("")
    const[passwordError, setpasswordError] = useState("")
    const[hasAccount, sethasAccount] = useState("")

    fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch((error) => {
      switch(error.code){
        case"auth/invalid-email":
        case"auth/user-disabled":
        case"auth/user-not-found":
        setEmailError(error.message);
        break;
        case"auth/wrong-password":
        setpasswordError(error.message);
        break;
      }
    });
    const clearInputs = () =>{
       setEmail(" ")
       setpassword(" ")
    }
    const clearErrors = () =>{
        setEmailError(" ")
        setpasswordError(" ")
    }
    const handleLogin = () =>{
        clearErrors()
    }
    const handleSignUp = () =>{
        clearErrors();
    }
    fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error) => {
    switch(error.code){
        case"auth/email-already-in-use":
        case"auth/invalid-email":
        setEmailError(error.message);
        break;
        case"auth/weak-password":
        setpasswordError(error.message);
        break;
    }
    console.log(error)
  });
    return (
        <div>
            <Login  />
        </div>
    )
}
