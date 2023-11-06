/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BsGoogle } from "react-icons/bs";
import { AuthContext } from "../Provider/AuthContext";

const Login = () => {
  const { signIn, setLoading, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const handleGoogle = () => {
    googleSignIn()
      .then(() => {
        navigate(from);
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
    signIn(email, password)
      .then(() => {
        toast.success("Login successful!");
        setLoading(false);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        if (error) {
          toast.error("Incorrect password. Please try again.");
        }
      });
  };
  const sty = `.cardInDark{
    -webkit-box-shadow: 0px 0px 237px 112px rgba(255, 255, 255, 0.36);
    -moz-box-shadow: 0px 0px 237px 112px rgba(255, 255, 255, 0.36);
    box-shadow: 0px 0px 237px 112px rgba(255, 255, 255, 0.36);
  }


  
  
  `;
  return (
    <div
      className="hero min-h-screen bg-[url('https://i.ibb.co/jVhskCW/milad-fakurian-Uii-HVEyxty-A-unsplash.jpg')] 
    dark:bg-[url('https://i.ibb.co/2v34K0P/adrien-olichon-GH9-Lwhl-SO4-unsplash.jpg')] transition-colors duration-300 dark:text-[#ffffffc6] ">
      <div>
        <style>{sty}</style>
        <div className="card cardInDark flex-shrink-0 w-full max-w-sm shadow-2xl !bg-transparent backdrop-blur-sm">
          <form className="card-body" onSubmit={handleSignUp}>
            <div className="form-control">
              <label className="label ">
                <span className="label-text dark:text-[#ffffffc6]">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered dark:bg-[#44475a]"
                required
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
                placeholder="password"
                className="input input-bordered dark:bg-[#44475a]"
              />
              <p className="text-black dark:text-white">
                Welcome! If you're new,
                <Link to="/signup" className="btn px-1 p-0 btn-link">
                  sign up here
                </Link>
                .
              </p>
              <label className="label"></label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary mb-6">
                Login
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
  );
};

export default Login;
