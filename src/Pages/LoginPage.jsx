import React, { useRef, useState } from "react";
import NavBar from "../Components/Common.jsx/NavBar";

const LoginPage = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();

    if (!email.current.value || !password.current.value) {
      setErrorMessage("Please fill all fields");
      return;
    }

    setErrorMessage("");
    console.log("Form submitted ✅");
  };

  return (
    <>
      <NavBar />

      <div className="min-h-[88.5vh] w-full bg-[#040603] flex items-center justify-center px-4 pt-28 sm:pt-32 md:pt-20">
        <div className="bg-[#040603]/60 rounded-xl p-6 sm:p-8 md:p-10 w-full sm:w-[80%] md:w-[45%] lg:w-[30%] shadow-xl border border-white/10 backdrop-blur-md transition-all duration-300">

          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 text-center">
            {isSignInForm ? "Welcome Back" : "Create Your Account"}
          </h2>

          <form className="flex flex-col gap-4 sm:gap-5">

            {!isSignInForm && (
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="p-3 rounded bg-neutral-900/90 focus:bg-neutral-800 text-white placeholder-gray-400 border border-neutral-700 focus:border-green-500 outline-none duration-200 text-sm sm:text-base"
              />
            )}

            <input
              ref={email}
              type="email"
              placeholder="Email Address"
              className="p-3 rounded bg-neutral-900/90 focus:bg-neutral-800 text-white placeholder-gray-400 border border-neutral-700 focus:border-green-500 outline-none duration-200 text-sm sm:text-base"
            />

            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="p-3 rounded bg-neutral-900/90 focus:bg-neutral-800 text-white placeholder-gray-400 border border-neutral-700 focus:border-green-500 outline-none duration-200 text-sm sm:text-base"
            />

            {errorMessage && (
              <p className="text-red-400 text-xs sm:text-sm font-medium">{errorMessage}</p>
            )}

            <button
              onClick={handleButtonClick}
              className="bg-[#9EE52E] hover:bg-[#8ad926] text-black py-3 rounded font-semibold shadow-lg transition-all hover:scale-[1.03] active:scale-95 text-sm sm:text-base"
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
          </form>

          <p className="text-gray-400 text-xs sm:text-sm mt-5 text-center">
            {isSignInForm ? (
              <>
                Don’t have an account?{" "}
                <span
                  className="text-[#8ad926] font-semibold cursor-pointer hover:underline"
                  onClick={toggleSignInForm}
                >
                  Sign Up
                </span>
              </>
            ) : (
              <>
                Already registered?{" "}
                <span
                  className="text-[#8ad926] font-semibold cursor-pointer hover:underline"
                  onClick={toggleSignInForm}
                >
                  Sign In
                </span>
              </>
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
