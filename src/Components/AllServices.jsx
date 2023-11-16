/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import useTitle from "../hook/useTitle";
import axios from "axios";
import Loading from "./Loading";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const AllServices = () => {
  useTitle("All Services");
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [displayedServices, setDisplayedServices] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACK_END_API}/services`
        );
        setServices(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    if (searchText) {
      const filteredServices = displayedServices.filter((item) =>
        item.serviceName.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredData(filteredServices);
    } else {
      setFilteredData(displayedServices);
    }
  }, [searchText, displayedServices]);
  useEffect(() => {
    setDisplayedServices(services.slice(0, 6));
  }, [services]);

  const showAllServices = () => {
    const elementToHide = document.getElementById("allbtn");
    elementToHide.style.display = "none";
    setDisplayedServices(services);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="min-h-screen max-w-7xl mx-auto mt-9">
        <div className="mx-auto max-w-md ">
          <form className="relative mx-auto w-max ">
            <input
              placeholder="Search"
              onChange={(text) => {
                setSearchText(text.target.value);
              }}
              type="search"
              className="cursor-pointer transition-all duration-500 text-black dark:text-white relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </form>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 my-8">
          {filteredData.length > 0 ? (
            filteredData.map((service) => (
              <div
                key={service._id}
                className="card card-side w-full bg-base-200 dark:bg-[#4e4a79] dark:text-white shadow-xl flex flex-col md:flex-row lg:flex-row">
                <figure>
                  <img
                    src={service.pictureUrl}
                    alt=""
                    className="rounded-xl md:w-96 lg:w-96 md:rounded-none h-full object-cover lg:rounded-none"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{service.serviceName}</h2>

                  <p>{service.description}</p>

                  <div className="avatar mt-4 indicator">
                    <span className="indicator-item badge">
                      {service.providerName}
                    </span>
                    <div className="w-16 rounded-full">
                      <img
                        src={service.providerPhoto}
                        alt={service.providerName}
                      />
                    </div>
                  </div>
                  <p className="text-2xl font-bold mb-2">
                    Service Area: <span>{service.serviceArea}</span>
                  </p>
                  <p className="text-lg">
                    Service Price:{" "}
                    <span className="font-bold">{service.price}</span>
                  </p>
                  <div className="card-actions justify-end">
                    <Link
                      to={`service/${service._id}`}
                      onClick={showAllServices}
                      className="btn btn-xs sm:btn-sm hover:animate-pulse md:btn-md">
                      View Detail
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <>
  <div className="flex flex-col items-center justify-center h-screen text-center">
  <h1 className="text-3xl font-bold mb-4 dark:text-[#ffffffe9]">
    Oops! No Results Found
  </h1>
  <div>
    <p className="text-gray-600 mb-2 dark:text-gray-100">
      It seems like what you're looking for isn't here.
    </p>
    <p className="text-gray-600 mb-2 dark:text-gray-100">
      Don't worry, let's try again or explore something else!
    </p>
    <div className="flex justify-center">
      <img
        className="w-44"
        src="https://cdn.discordapp.com/attachments/1151870132549865536/1173519591683665951/MWIHO94.gif"
        alt="Sad Kitty"
      />
    </div>
  </div>
</div>

            </>
          )}
        </div>
        {filteredData.length > 0 && (
          <div className="flex justify-center my-20">
            <button
              id="allbtn"
              onClick={showAllServices}
              className="btn btn-xs sm:btn-sm md:btn-md">
              All Services
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default AllServices;
