/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";

import { Link } from "react-router-dom";

import { BsGoogle } from "react-icons/bs";

import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthContext";

const SignUp = () => {
  const { createUser, setLoading, googleSignIn } = useContext(AuthContext);
  const handleGoogle = () => {
    googleSignIn()
      .then(() => {
        toast.success("Login successful!");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const photo = form.get("photo");
    console.log("handleSignUp  photo", photo);
    if (password.length < 0) {
      toast.error("give your password");
      return;
    }
    if (password.length < 6) {
      toast.error("Password should be at least 6 characters long");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password should contain at least one capital letter");
      return;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      toast.error("Password should contain at least one special character");
      return;
    }

    createUser(email, password)
      .then((result) => {
        setLoading(false);
        toast.success("Secure Access, Unlimited Smiles!", { theme: "dark" });
      })
      .catch((error) => {
        console.log("handleSignUp  error", error);
        if (error.code === "auth/email-already-in-use") {
          toast.error("Email exist already, Please try with a new email.");
        }
      });
  };
  return (
    <div className="hero min-h-screen transition-colors duration-300 bg-[url('https://i.ibb.co/jVhskCW/milad-fakurian-Uii-HVEyxty-A-unsplash.jpg')] 
    dark:bg-[url('https://i.ibb.co/2v34K0P/adrien-olichon-GH9-Lwhl-SO4-unsplash.jpg')]">
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Sign up</h1>
          <p className="mb-5 text-xl font-bold">
            By joining, you're officially inducted into the League of Awesome
            Attendees.
          </p>
          <div className="card flex-shrink-0 w-full lg:w-[600px] max-w-sm shadow-2xl bg-transparent backdrop-blur-sm">
            <form className="card-body" onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-[#ffffffc6]">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered dark:bg-[#44475a]"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-[#ffffffc6]">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered  dark:bg-[#44475a]"
                />
                <p className="text-black dark:text-white">
                  
                  Already have an account,
                  <Link to="/login" className="btn px-1 p-0 btn-link">
                    Log In
                  </Link>
                  here.
                </p>
                <label className="label"></label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </div>
            </form>
            <div className=" flex justify-center items-center mb-6">
              <BsGoogle
                onClick={handleGoogle}
                className="text-2xl cursor-pointer"
                type="submit"></BsGoogle>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
