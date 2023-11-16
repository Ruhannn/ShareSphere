import { FaEdit, FaTrash } from "react-icons/fa";
import useTitle from "../hook/useTitle";
import { useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../Provider/AuthContext";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Typewriter } from "react-simple-typewriter";
import Loading from "./Loading";

const MyServices = () => {
  useTitle("My Services");
  const { user } = useContext(AuthContext);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACK_END_API}/services?email=${user?.email}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [user]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_BACK_END_API}/service/${_id}`)
          .then((res) => res.data)
          .then((data) => {
            if (data.error) {
              console.log(data.error);
            } else if (data.deletedCount > 0) {
              setData((prevData) =>
                prevData.filter((service) => service._id !== _id)
              );

              Swal.fire(
                "Deleted!",
                "Your service has been deleted.",
                "success"
              );
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="min-h-screen flex flex-wrap justify-center items-center">
      {data && data.length > 0 ? (
        data.map((service) => (
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
                  <Link
                    to={`/update-service/${service._id}`}
                    className="btn btn-outline btn-sm dark:text-[#c5c3c9]">
                    <FaEdit /> Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(service._id)}
                    className="btn btn-outline btn-sm text-red-500">
                    <FaTrash /> Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center">
          <div className="mx-auto">
            <img
              src="https://cdn.discordapp.com/attachments/1065689957525630997/1174749753423171604/931rFKi.gif"
              alt=""
              className="max-w-full h-auto"
            />
          </div>
          <h1 className="my-7 text-4xl dark:text-white">
            <Typewriter
              words={["You have no service"]}
              typeSpeed={76}></Typewriter>
          </h1>
        </div>
      )}
    </div>
  );
};

export default MyServices;
