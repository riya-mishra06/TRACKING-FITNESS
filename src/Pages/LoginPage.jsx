import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../firebase";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  // input states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // popup message
  const [popup, setPopup] = useState({ type: "", message: "" });

  const auth = getAuth(app);``
  const navigate = useNavigate();

  // show popup
  const showPopup = (type, message) => {
    setPopup({ type, message });
    setTimeout(() => setPopup({ type: "", message: "" }), 2000);
  };

  // LOGIN
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      showPopup("success", "Login Successful!");

      setTimeout(() => navigate("/dashboard"), 1000);
    } catch (error) {
      showPopup("error", error.message);
    }
  };

  // REGISTER
  const handleRegister = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(user.user, {
        displayName: name,
      });

      showPopup("success", "Account Created Successfully!");
      setIsLogin(true);
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      showPopup("error", error.message);
    }
  };

  // BUTTON FUNC
  const handleSubmit = () => {
    if (isLogin) {
      handleLogin();
    } else {
      handleRegister();
    }
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-black overflow-hidden">

      {/* Popup Message */}
      {popup.message && (
        <div
          className={`fixed top-5 left-1/2 -translate-x-1/2 py-2 px-4 rounded-md text-white shadow-lg 
          ${popup.type === "success" ? "bg-green-600" : "bg-red-600"}`}
        >
          {popup.message}
        </div>
      )}

      <div className="min-h-[88.5vh] w-full bg-[#040603] flex items-center justify-center px-4 pt-28 sm:pt-32 md:pt-20">

        <div className="bg-[#040603]/60 rounded-xl p-6 sm:p-8 md:p-10 w-full sm:w-[80%] md:w-[45%] lg:w-[30%] shadow-xl border border-white/10 backdrop-blur-md">

          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
            {isLogin ? "Welcome to FitTrack" : "Create Your Account"}
          </h2>

          <form className="flex flex-col gap-4 sm:gap-5" onSubmit={(e) => e.preventDefault()}>

            {!isLogin && (
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-3 rounded bg-neutral-900/90 focus:bg-neutral-800 text-white placeholder-gray-400 border border-neutral-700 outline-none text-sm sm:text-base"
              />
            )}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 rounded bg-neutral-900/90 focus:bg-neutral-800 text-white placeholder-gray-400 border border-neutral-700 outline-none text-sm sm:text-base"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 rounded bg-neutral-900/90 focus:bg-neutral-800 text-white placeholder-gray-400 border border-neutral-700 outline-none text-sm sm:text-base"
            />

            <button
              type="button"
              onClick={handleSubmit}
              className="bg-[#9EE52E] hover:bg-[#8ad926] text-black py-3 rounded font-semibold shadow-lg text-sm sm:text-base transition-all"
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </form>

          <p className="text-gray-400 text-xs sm:text-sm mt-5 text-center">
            {isLogin ? (
              <>
                Don’t have an account?{" "}
                <span
                  className="text-[#9EE52E] font-semibold cursor-pointer hover:underline"
                  onClick={() => setIsLogin(false)}
                >
                  Register
                </span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span
                  className="text-[#9EE52E] font-semibold cursor-pointer hover:underline"
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </span>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
