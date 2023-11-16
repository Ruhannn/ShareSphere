/* eslint-disable react/prop-types */
import axios from "axios";
import {
  FaCalendarAlt,
  FaDollarSign,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { toast } from "react-toastify";
const PendingCart = ({ data, refetch }) => {
  const handleUpdateStatus = (e) => {
    const newStatus = e.target.value;
    axios
      .patch(
        `${import.meta.env.VITE_BACK_END_API}/booking-service-update/${
          data._id
        }`,
        { status: newStatus }
      )
      .then((res) => {
        console.log(res);
        refetch();
        toast.success("Status updated");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className={`${
        data.status === "pending"
          ? "bg-yellow-200 dark:bg-yellow-100"
          : data.status === "in progress"
          ? "bg-blue-200 dark:bg-blue-100"
          : "bg-green-200 dark:bg-green-100"
      } rounded-lg overflow-hidden shadow-lg relative flex flex-col lg:flex-row mb-4`}>
      <div className="h-72 md:h-96 lg:h-96 relative">
        <img
          src={data.serviceImage}
          alt={data.serviceName}
          className="w-full h-full object-cover rounded-t"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 flex flex-col items-center justify-center">
          <p className="text-white text-lg font-bold">{data.serviceName}</p>
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
        <p className="text-gray-700 mb-2">Instructions: {data.instructions}</p>
        <div className="flex flex-col gap-2">
          <p className="text-gray-700 mb-2">Status: {data.status}</p>
          <p className="text-gray-700 mb-2">Update status</p>
          <select
            className="bg-white rounded-md p-2 text-black"
            onChange={handleUpdateStatus}
            name="status">
            <option value="pending">Pending</option>
            <option value="in progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PendingCart;
