import axios from "axios";
import { useState } from "react";
import { AiOutlineDollar } from "react-icons/ai";
import Loading from "./Loading";
import { useEffect } from "react";
const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <Loading />;
  }

  if (services.length === 0) {
    return <p>No services available</p>;
  }
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 items-center justify-center mx-auto p-3">
        {services.slice(0, 6).map((service) => (
          <div
            key={service._id}
            className="flex flex-col max-w-md p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-[#eaf1ff] dark:bg-[#13103b] text-gray-100">
            <div className="flex space-x-4">
              <img
                alt={service.providerName}
                src={service.providerPhoto}
                className="object-cover w-12 h-12 rounded-full shadow"
              />
              <div className="flex flex-col space-y-1">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-sm font-semibold text-[#85acff]">
                  {service.providerName}
                </a>
                <span className="text-xs text-gray-400">
                  {service.providerEmail}
                </span>
              </div>
            </div>
            <div>
              <img
                src={service.pictureUrl}
                alt=""
                className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500 rounded"
              />
              <h2 className="mb-1 text-xl font-semibold text-[#83aaff]">
                {service.serviceName}
              </h2>
              <p className="text-sm text-gray-400">{service.description}</p>
            </div>
            <div className="flex flex-wrap justify-between">
              <div className="space-x-2">
                <button
                  type="button"
                  className="flex items-center p-1 space-x-1.5">
                  <AiOutlineDollar className="text-lg"></AiOutlineDollar>
                  <span>{service.price}</span>
                </button>
              </div>

              <div className="space-x-2">
                <button
                  type="button"
                  className="flex px-5 py-2 items-center rounded-md uppercase bg-[#0d0b28] space-x-1.5">
                  view details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
