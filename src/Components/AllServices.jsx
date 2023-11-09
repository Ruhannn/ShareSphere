import { useState } from "react";
import useTitle from "../hook/useTitle";

const AllServices = () => {
  useTitle("All Services");
  const [showAll, setShowAll] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);

  const servicesToShow = showAll
    ? Array.from({ length: 4 })
    : Array.from({ length: 2 });

  const loadAllServices = () => {
    setShowAll(true);
    setButtonVisible(false);
  };

  return (
    <>
      <div className="min-h-screen max-w-7xl mx-auto mt-9">
        <div className="mx-auto max-w-md ">
          <form className="relative mx-auto w-max ">
            <input
              placeholder="Search"
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
        <div className="flex flex-col gap-5 my-8">
          {servicesToShow.map((_, index) => (
            <div
              key={index}
              className="card card-side bg-base-200 dark:bg-[#4e4a79] dark:text-white shadow-xl mx-12 flex flex-col md:flex-row lg:flex-row">
              <figure key={index}>
                <img
                  src="https://cdn.discordapp.com/attachments/1089969086190075994/1170318565686116452/GY5E97A.png?ex=65589b19&is=65462619&hm=1ca84a7d32b4f99ce89d0b3b088c4689b6d5cdf07f1ef43c6ae32527f4423a1a&"
                  alt="Movie"
                  className="rounded-xl md:rounded-none h-full w-full object-cover lg:rounded-none"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="avatar mt-4 indicator">
                  <span className="indicator-item badge">Ayaka</span>
                  <div className="w-16 rounded-full">
                    <img
                      src="https://cdn.discordapp.com/attachments/1065689957525630997/1165311376386957432/q5GjuZ2.png?ex=6558d8ca&is=654663ca&hm=e447efa03ee793ab7357ac64d6349014115df6bab66d6635e0fda4a71ac9bf1d"
                      alt="Ayaka's Avatar"
                    />
                  </div>
                </div>

                <p className="text-2xl font-bold mb-2">Service Area</p>
                <p className="text-lg">Service Price</p>

                <div className="card-actions justify-end">
                  <button className="btn btn-xs sm:btn-sm md:btn-md">
                    View Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {buttonVisible && (
          <div className="flex justify-center mt-4">
            <button
              className="btn btn-xs sm:btn-sm md:btn-md"
              onClick={loadAllServices}>
              All Services
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default AllServices;
