import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import { AuthContext } from "../Provider/AuthContext";
import useTitle from "../hook/useTitle";
import {
  FaCalendarAlt,
  FaDollarSign,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTrash,
} from "react-icons/fa";
import PendingCart from "./PendingCart";
import usePendingBookings from "../hook/usePendingBookings";
import Swal from "sweetalert2";
const MySchedules = () => {
  const { user } = useContext(AuthContext);
  const [bookingData, setBookingData] = useState([]);
  const [pendingData, refetch] = usePendingBookings();
  const [loading, setLoading] = useState(true);
  useTitle("My Schedules");
  useEffect(() => {
    const fetchBookedService = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACK_END_API}/booked-service?email=${
            user?.email
          }`
        );
        setBookingData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchBookedService();
  }, [user?.email]);
  if (loading) {
    return <Loading />;
  }
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
          .delete(`${import.meta.env.VITE_BACK_END_API}/booking-service/${_id}`)
          .then((res) => res.data)
          .then((data) => {
            if (data.error) {
              console.log(data.error);
            } else if (data.deletedCount > 0) {
              setBookingData((prevData) =>
                prevData.filter((bookedService) => bookedService._id !== _id)
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
  return (
    <>
      <div className="min-h-screen p-4 flex flex-col gap-16">
        <div className="mb-8  p-6 rounded shadow-md bg-green-100 dark:text-[#ffffff] dark:bg-green-950">
          <h2 className="text-2xl font-bold mb-4">My Bookings</h2>
          {bookingData.length === 0 ? (
            <p>No services booked. Book now!</p>
          ) : (
            bookingData.map((data) => (
              <div
                key={data._id}
                className="bg-green-200 dark:bg-green-100 mb-2 rounded-lg overflow-hidden shadow-lg relative flex flex-col lg:flex-row">
                <div className="h-72 md:h-96 lg:h-96 relative">
                  <img
                    src={data.serviceImage}
                    alt={data.serviceName}
                    className="w-full h-full object-cover rounded-t"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 flex flex-col items-center justify-center">
                    <p className="text-white text-lg font-bold">
                      {data.serviceName}
                    </p>
                  </div>
                </div>
                <div className="p-4 flex-grow">
                  <p className="text-gray-700 flex items-center mb-2">
                    <FaEnvelope className="mr-2" />
                    {data.providerEmail}
                  </p>
                  <p className="text-gray-700 flex items-center mb-2">
                    <FaMapMarkerAlt className="mr-2" />
                    Area: {data.area}
                  </p>
                  <p className="text-gray-700 flex items-center mb-2">
                    <FaDollarSign className="mr-2" />
                    Price: {data.price}
                  </p>
                  <p className="text-gray-700 flex items-center mb-2">
                    <FaCalendarAlt className="mr-2" />
                    Date: {new Date(data.date).toLocaleDateString()}
                  </p>
                  <p className="text-gray-700 mb-2">
                    Instructions: {data.instructions}
                  </p>
                  <p className="text-gray-700 mb-2">Status: {data.status}</p>
                  <button
                    onClick={() => handleDelete(data._id)}
                    className="btn btn-outline btn-sm text-red-500"
                    disabled={data.status === "completed"}>
                    <FaTrash /> Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className=" p-6 rounded shadow-md bg-red-100 dark:text-[#ffffff] dark:bg-red-950">
          <h2 className="text-2xl font-bold mb-4 ">My Pending Works</h2>
          {pendingData.length === 0 ? (
            <p>No pending works.</p>
          ) : (
            pendingData.map((data) => (
              <PendingCart key={data._id} data={data} refetch={refetch} />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default MySchedules;
