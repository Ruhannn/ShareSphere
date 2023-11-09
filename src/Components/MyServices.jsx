import { FaEdit, FaTrash } from "react-icons/fa";
import useTitle from "../hook/useTitle";
import { useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../Provider/AuthContext";
import { useContext } from "react";
import { useState } from "react";

const MyServices = () => {
  useTitle("My Services");
  const { user } = useContext(AuthContext);
  const [data, setData] = useState();
  
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACK_END_API}/services?email=${user?.email}`, {})
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user]);

  console.log(data);

  return (
    <div className="min-h-screen flex flex-wrap justify-center items-center">
      {data && data.map((service) => (
        <div
          key={service._id}
          className="card mx-2 my-4 w-full sm:w-[45%] md:w-[30%] lg:w-[20%] h-[450px] glass">
          <figure>
            <img
              src={service.pictureUrl}
              alt={service.serviceName}
              className="w-full h-[300px] object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg">{service.serviceName}</h2>
            <p className="text-sm">{service.description}</p>
            <div className="card-actions mt-4 flex justify-between">
              <div className="flex space-x-2">
                <button className="btn btn-outline btn-sm dark:text-[#c5c3c9]">
                  <FaEdit /> Edit
                </button>
                <button className="btn btn-outline btn-sm text-red-500">
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyServices;
