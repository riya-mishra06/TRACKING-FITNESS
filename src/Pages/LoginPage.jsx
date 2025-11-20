import React, { useRef, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../firebase";

const LoginPage = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [infoMessage, setInfoMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const auth = getAuth(app);

  const navigate = useNavigate();

  const toggleSignInForm = () => {
    setIsSignInForm((prev) => !prev);
    setErrorMessage("");
    setInfoMessage("");
  };

  // Simple validation function
  const validate = (nameVal, emailVal, passwordVal, isSignIn) => {
    if (!emailVal || !passwordVal) {
      return "Email and password are required.";
    }
    // Basic email regex
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
      return "Invalid email format.";
    }
    if (passwordVal.length < 6) {
      return "Password must be at least 6 characters.";
    }
    if (!isSignIn && (!nameVal || nameVal.trim() === "")) {
      return "Name is required for sign up.";
    }
    return "";
  };

  const handleButtonClick = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    setInfoMessage(null);

    const message = validate(
      !isSignInForm ? name.current?.value : null,
      email.current.value,
      password.current.value,
      isSignInForm
    );

    setErrorMessage(message);
    if (message) return;

    try {
      if (!isSignInForm) {
        // Sign Up flow
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        if (name.current?.value) {
          await updateProfile(userCredential.user, {
            displayName: name.current.value,
          });
        }
        // After signup show message and switch to signin form
        setInfoMessage("User created successfully! Please log in.");
        setIsSignInForm(true);
        // Optionally clear signup fields
        if (name.current) name.current.value = "";
        if (email.current) email.current.value = "";
        if (password.current) password.current.value = "";
      } else {
        // Sign In flow
        await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        setInfoMessage("User login successful."); // Show message (optional)
        setErrorMessage(null);
        // Short delay to briefly show message, then navigate
        setTimeout(() => {
          navigate("/dashboard");
        }, 600);
      }
    } catch (error) {
      // Handle wrong email or password error
      // Firebase error codes: https://firebase.google.com/docs/reference/js/auth#autherrorcodes
      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password" ||
        error.code === "auth/invalid-credential"
      ) {
        setErrorMessage(
          "Email or password incorrect. Please check and try again."
        );
      } else if (error.code === "auth/email-already-in-use") {
        setErrorMessage("This email is already registered. Please log in.");
      } else {
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <>
      <div className="relative w-full min-h-screen flex flex-col bg-black overflow-hidden">
        <div className="min-h-[88.5vh] w-full bg-[#040603] flex items-center justify-center px-4 pt-28 sm:pt-32 md:pt-20">
          <div className="bg-[#040603]/60 rounded-xl p-6 sm:p-8 md:p-10 w-full sm:w-[80%] md:w-[45%] lg:w-[30%] shadow-xl border border-white/10 backdrop-blur-md transition-all duration-300">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 text-center">
              {isSignInForm ? "Welcome Back" : "Create Your Account"}
            </h2>

            <form
              onSubmit={handleButtonClick}
              className="flex flex-col gap-4 sm:gap-5"
            >
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

              {infoMessage && (
                <p className="text-green-400 text-xs sm:text-base font-medium text-center">
                  {infoMessage}
                </p>
              )}

              {errorMessage && (
                <p className="text-red-400 text-xs sm:text-sm font-medium">
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
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
      </div>
    </>
  );
};

export default LoginPage;