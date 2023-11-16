import { FaBook } from "react-icons/fa";

import { useEffect, useState } from "react";
import ModalContent from "./ModalContent";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../hook/useTitle";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";
const SingleService = () => {
  const serviceData = useLoaderData();
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  useTitle(serviceData.serviceName);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACK_END_API}/services`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [serviceData._id]);

  const filteredData = data.filter(
    (data) => serviceData.providerEmail === data.providerEmail
  );

  return (
    <div className="m-7">
      {/* main card */}
      <div className="bg-[#cacaca] mb-10 text-black dark:bg-gray-900 dark:text-white p-2 w-auto sm:w-full sm:p-4 sm:h-72 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none">
        <div
          style={{
            backgroundImage: `url("${serviceData.pictureUrl}")`,
          }}
          className="h-52 sm:h-full sm:w-72 rounded-xl text-black bg-gray-100 bg-center bg-cover"></div>
        <div className="flex sm:flex-1 flex-col gap-2 p-1">
          <h1 className="text-lg sm:text-xl font-semibold text-gray-600 dark:text-white">
            {serviceData.serviceName}
          </h1>
          <p
            className="text-gray-500 text-sm 
         mb-7 sm:text-base line-clamp-3 dark:text-white">
            {serviceData.description}
          </p>
          <div className="flex mt-auto justify-end">
            <button
              onClick={openModal}
              disabled={user.email === serviceData.providerEmail}
              className={`border dark:border-white border-black transition-all duration-500 dark:text-white text-black dra py-2 px-4 rounded-full flex items-center space-x-2 dark:hover:bg-white hover:bg-black dark:hover:text-black hover:text-white ${user.email === serviceData.providerEmail && "opacity-[.3]"}`}>
              <FaBook />
              <span>Book Now</span>
            </button>
            {isOpen && (
              <div className="fixed inset-0 z-10 overflow-y-auto ">
                <div className="flex  items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  <div
                    className="fixed  inset-0 transition-opacity"
                    aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                  </div>

                  <span
                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true">
                    &#8203;
                  </span>

                  <div
                    className="inline-block align-bottom  bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:max-w-7xl"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline">
                    <div className="bg-white dark:bg-[#393658] px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                          <svg
                            className="h-6 w-6 text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 9v2m0 4h.01m-6 0h12v-2H6v2zM12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z"></path>
                          </svg>
                        </div>
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <h3
                            className="text-lg leading-6 font-medium text-gray-900 dark:text-[#ffffffed] "
                            id="modal-headline">
                            Review Info Before Book
                          </h3>
                          <div className="mt-2 flex flex-col md:flex-row lg:flex-row items-center justify-center">
                            <ModalContent
                              serviceData={serviceData}
                              closeModal={closeModal}
                            />
                            <div className="mt-2 flex flex-col md:flex-row lg:flex-row sm:items-center justify-center">
                              <img
                                className="w-full max-w-[450px] h-auto rounded-lg mx-auto md:max-w-[300px] lg:max-w-[400px]"
                                src={serviceData.pictureUrl}
                                alt="Food Image"
                              />

                              <div className="mt-4 md:mt-0 md:ml-4 text-black lg:ml-4 dark:text-[#ffffffc6] ">
                                <h1 className="text-2xl font-bold text-center md:text-left lg:text-left">
                                  {serviceData.serviceName}
                                </h1>
                                <p className="mt-2 text-center md:text-left lg:text-left">
                                  {serviceData.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-[#27253c]  px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      <button
                        onClick={closeModal}
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* 2nd card */}
      <div className="flex flex-col shadow-lg gap-6 bg-gray-300 text-black dark:bg-gray-900 dark:text-white p-6 md:p-12 rounded-lg ">
        <div className="avatar indicator">
          <span className="indicator-item badge">
            {serviceData.providerName}
          </span>
          <div className="w-16 rounded-full">
            <img
              src={serviceData.providerPhoto}
              alt={serviceData.providerName}
            />
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold mt-4 md:mt-0">
            {serviceData.providerEmail}
          </h1>
          <p className=" text-lg dark:text-white">{serviceData.serviceArea}</p>
        </div>
      </div>

      <div>
        <div className="my-24 text-center text-4xl font-semibold dark:text-[#c5c3c9b7]">
          <h1>Related Services</h1>
        </div>
        <div>
          <div className="flex flex-wrap justify-center gap-4 space-x-4">
            {filteredData.map(
              (relatedData) =>
                relatedData._id !== serviceData._id && (
                  <Link
                    to={`/all-services/service/${relatedData._id}`}
                    key={relatedData._id}
                    className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                    <img
                      src={relatedData.pictureUrl}
                      alt=""
                      className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
                    />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                      <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">
                          {relatedData.serviceName}
                        </h2>
                        <p className="dark:text-gray-100">
                          {relatedData.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
