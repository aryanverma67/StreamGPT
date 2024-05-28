import { useRef, useState } from "react";
import { BACKGROUND_IMAGE, USER_AVATAR } from "../utils/constants";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/slices/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch()
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const toggleSignInform = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validate the form data
    console.log(email.current.value);
    console.log(password.current.value);

    const message = checkValidData(email.current.value, password.current.value);
    console.log(message);
    setErrorMessage(message);

    if (message) return;

    // else create the user signin/signup

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: USER_AVATAR
          }).then(() => {
            
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL
              })
            );

          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message)
            // ...
          });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else if (isSignInForm) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
         

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div className="min-h-screen relative">
    <Header />
    <div className="absolute inset-0 h-full w-full">
      <img src={BACKGROUND_IMAGE} alt="background image" className="w-full h-full object-cover" />
    </div>
    <form
      onSubmit={(e) => e.preventDefault()}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 sm:p-10 md:p-12 lg:p-16 w-11/12 sm:w-4/12 md:w-6/12 lg:w-4/12 bg-black bg-opacity-80 text-white rounded-xl"
    >
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl py-4">
        {isSignInForm ? "Sign In" : "Sign Up"}
      </h1>
      {!isSignInForm && (
        <input
          ref={name}
          type="text"
          placeholder="Full Name"
          className="p-3 sm:p-4 my-2 sm:my-4 w-full bg-gray-800 rounded"
        />
      )}
      <input
        ref={email}
        type="text"
        placeholder="Email Address"
        className="p-3 sm:p-4 my-2 sm:my-4 w-full bg-gray-800 rounded"
      />
      <input
        ref={password}
        type="password"
        placeholder="Password"
        className="p-3 sm:p-4 my-2 sm:my-4 w-full bg-gray-800 rounded"
      />
      <p className="text-red-500 font-bold text-lg">{errorMessage}</p>
      <button
        className="p-3 sm:p-4 my-4 sm:my-6 rounded-lg bg-red-700 w-full"
        onClick={handleButtonClick}
      >
        {isSignInForm ? "Sign In" : "Sign Up"}
      </button>
      <p className="py-2 sm:py-4 underline text-[#e50914] cursor-pointer" onClick={toggleSignInform}>
        {isSignInForm
          ? "New to StreamGPT? Sign up Now"
          : "Already a user? Sign in Now"}
      </p>
    </form>
  </div>
);
};
export default Login;
