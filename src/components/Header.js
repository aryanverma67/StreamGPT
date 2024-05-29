import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/slices/userSlice";
import { SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { ToggleGptSearchView } from "../utils/slices/Gptslice";
import lang from "../utils/Languageconstants";
import { changeLanguage } from "../utils/slices/ConfigSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

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
  const handleGptSearch = () => {
    //toggle of information
    dispatch(ToggleGptSearchView());
  };
  const handlelanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="flex flex-col  item-center mb-4  w-screen absolute px-8 py-1  background bg-gradient-to-b from-black z-10 md:flex-row md:justify-between ">
      <div className="">
        <h1 className="text-[#e50914] md:mb-3 text-3xl   md:text-[2rem] mt-2 font-bold "> StreamGPT</h1>
      </div>
      {user && (
        <div className="flex   md:gap-10 gap-1 mt-2 md:items-center">
          {showGptSearch && (
            <select
              onChange={handlelanguageChange}
              className="md:px-3 px-1  hover:bg-[#e50914] md:py-2 py-1 bg-transparent border text-white rounded-2xl font-semibold"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}{" "}
          <button
            onClick={handleGptSearch}
            className="w-30 bg-transparent border md:px-6 px-2 text-sm md:py-2 text-white md:text-lg fotn-bold rounded-2xl active:bg-[#a1179d] "
          >
            {showGptSearch? "HomePage":"GPt Search"}
          </button>
          <img
            className="w-9 h-9 rounded-full "
            src={USER_AVATAR}
            alt="photoURL"
          />
          <button
            onClick={handleSignOut}
            className="md:text-lg text-sm mr-3 active:bg-[#e50914] bg-transparent border font-bold px-3 py-2 rounded-2xl text-white"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
