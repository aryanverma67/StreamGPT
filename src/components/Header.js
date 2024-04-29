import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/slices/userSlice";
import { USER_AVATAR } from "../utils/constants";


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => [
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      }),
  ];


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex item-center   justify-between w-screen absolute px-8 py-1 background bg-gradient-to-b from-black z-10"> 
          <div>
          <h1 className="text-[#e50914]  text-3xl mt-7 font-bold"> StreamGPT</h1>
          </div>
         { user && <div className="flex gap-10 mt-6 items-center">
          <img className="w-9 h-9 rounded-full " src={USER_AVATAR} alt="photoURL" />
          <button onClick={handleSignOut} className="text-lg mr-3 hover:bg-[#e50914] bg-transparent border font-bold px-3 py-2 rounded-2xl text-white">
            Sign Out
          </button>

          </div>
}
        </div>
      )}
  


export default Header;
