import { FaEdit, FaTrash } from "react-icons/fa";
import useTitle from "../hook/useTitle";
const MyServices = () => {
  useTitle("My Services");

  return (
    <div className="min-h-screen flex flex-wrap justify-center items-center">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="card mx-2 my-4 w-full sm:w-[45%] md:w-[30%] lg:w-[20%] h-[450px] glass">
          <figure>
            <img
              src="https://cdn.discordapp.com/attachments/1144906364859195453/1170708938291957831/E3kBnnD.jpg"
              alt="car!"
              className="w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg">Life hack</h2>
            <p className="text-sm">How to park your car at your garage?</p>
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
