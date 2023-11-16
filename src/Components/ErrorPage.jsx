/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import useTitle from "../hook/useTitle";
const ErrorPage = () => {
  useTitle("you are lost");
  return (
    <div className="h-screen bg-white">
      <div className="flex items-center justify-center ">
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="Error Gif"
        />
      </div>
      <h1 className="text-center font-semibold text-5xl">
        Look like you're lost
      </h1>
      <p className="text-center font-semibold text-3xl my-5">
        the page you are looking for not available!
      </p>
      <div className="text-center my-7">
        <Link
          to="/"
          className="bg-blue-500 text-white py-2 animate-bounce px-4 rounded hover:bg-blue-600 transition duration-300">
          Go To Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
