import { useContext } from "react";

import useTitle from "../hook/useTitle";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthContext";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
const UpdateService = () => {
  const { user } = useContext(AuthContext);
  useTitle("Add Service");
  const sty = `input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }`;
  const singleData = useLoaderData();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const providerName = form.providerName.value;
    const providerEmail = form.providerEmail.value;
    const pictureUrl = form.pictureUrl.value;
    const serviceName = form.serviceName.value;
    const price = form.price.value;
    const serviceArea = form.serviceArea.value;
    const description = form.description.value;
    const isDataChanged =
      providerName !== singleData.providerName ||
      providerEmail !== singleData.providerEmail ||
      pictureUrl !== singleData.pictureUrl ||
      serviceName !== singleData.serviceName ||
      price !== singleData.price ||
      serviceArea !== singleData.serviceArea ||
      description !== singleData.description;

    if (!isDataChanged) {
      toast.info("No changes made to the service.");
      return;
    }
    const updatedData = {
      providerPhoto: user?.photoURL,
      providerName,
      providerEmail,
      pictureUrl,
      serviceName,
      price,
      serviceArea,
      description,
    };
    axios
      .put(
        `${import.meta.env.VITE_BACK_END_API}/update-service/${singleData._id}`,
        updatedData
      )
      .then(() => {
        toast.success("Service updated successfully");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Service not updated");
      });
  };
  return (
    <div className="container mx-auto my-8 p-8 bg-white shadow-lg rounded-lg dark:bg-[#1a1928]">
      <h1 className="text-3xl font-bold mb-6 dark:text-[#ffffffc6]">
        Update Services
      </h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 ">
        <div>
          <label
            className="block text-sm dark:text-[#fffffff4] font-semibold mb-2"
            htmlFor="pictureUrl">
            Picture URL of the Service
          </label>
          <input
            defaultValue={singleData.pictureUrl}
            type="text"
            name="pictureUrl"
            className="w-full p-2 border border-gray-300 rounded transition focus:outline-none bg-white dark:bg-[#181726] dark:text-white focus:ring focus:border-blue-500"
            placeholder="Enter Picture URL"
            required
          />
        </div>

        <div>
          <label
            className="dark:text-[#fffffff4] block text-sm font-semibold mb-2"
            htmlFor="serviceName">
            Service Name
          </label>
          <input
            defaultValue={singleData.serviceName}
            type="text"
            name="serviceName"
            className="w-full bg-white dark:bg-[#181726] dark:text-white p-2 border border-gray-300 rounded transition focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter Service Name"
            required
          />
        </div>

        <div>
          <label
            className="dark:text-[#fffffff4] block text-sm font-semibold mb-2"
            htmlFor="providerName">
            Your Name
          </label>
          <input
            value={user?.displayName}
            type="text"
            name="providerName"
            className="w-full bg-white dark:bg-[#181726] dark:text-white p-2 border border-gray-300 rounded transition focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Your Name"
            readOnly
          />
        </div>

        <div>
          <label
            className="dark:text-[#fffffff4] block text-sm font-semibold mb-2"
            htmlFor="yourEmail">
            Your Email
          </label>
          <input
            value={user?.email}
            type="email"
            name="providerEmail"
            className="w-full bg-white dark:bg-[#181726] dark:text-white p-2 border border-gray-300 rounded transition focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Your Email"
            readOnly
          />
        </div>

        <div>
          <label
            className="dark:text-[#fffffff4] block text-sm font-semibold mb-2"
            htmlFor="price">
            Price
          </label>
          <input
            defaultValue={singleData.price}
            type="number"
            name="price"
            className="w-full bg-white dark:bg-[#181726] dark:text-white p-2 border border-gray-300 rounded transition focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter Price"
            required
          />
        </div>

        <div>
          <label
            className="dark:text-[#fffffff4] block text-sm font-semibold mb-2"
            htmlFor="serviceArea">
            Service Area
          </label>
          <input
            defaultValue={singleData.serviceArea}
            type="text"
            name="serviceArea"
            className="w-full bg-white dark:bg-[#181726] dark:text-white p-2 border border-gray-300 rounded transition focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter Service Area"
            required
          />
        </div>

        <div>
          <label
            className="dark:text-[#fffffff4] block text-sm font-semibold mb-2"
            htmlFor="description">
            Description
          </label>
          <style>{sty}</style>
          <textarea
            defaultValue={singleData.description}
            name="description"
            required
            className=" resize-none overflow-hidden w-full p-2 border bg-white dark:bg-[#181726] dark:text-white border-gray-300 rounded transition focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter Description"></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring focus:border-blue-700">
            update Service
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateService;
