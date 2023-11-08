import { FaBook } from "react-icons/fa";

const SingleService = () => {
  return (
    <div className="m-7">
      {/* main card */}
      <div className="bg-[#cacaca] mb-10 text-black dark:bg-gray-900 dark:text-white p-2 w-auto sm:w-full sm:p-4 sm:h-72 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none">
        <div
          style={{
            backgroundImage: `url("https://cdn.discordapp.com/attachments/1144906364859195453/1170708938291957831/E3kBnnD.jpg?ex=655a06a9&is=654791a9&hm=ad1d9d3dfe68bf282efb6606bbf56246c431a238301184b74bf51bc6b2c6c6f2&")`,
          }}
          className="h-52 sm:h-full sm:w-72 rounded-xl text-black bg-gray-100 bg-center bg-cover"></div>
        <div className="flex sm:flex-1 flex-col gap-2 p-1">
          <h1 className="text-lg sm:text-xl font-semibold text-gray-600 dark:text-white">
            This is the title for your card. This is really cool
          </h1>
          <p
            className="text-gray-500 text-sm 
         mb-7 sm:text-base line-clamp-3 dark:text-white">
            This is the description for your card. This is really really long.
            This is used to describe the content of the card. I hope you like
            the design...
          </p>{" "}
          <div className="flex mt-auto justify-end">
            <button className="border dark:border-white border-black transition-all duration-500 dark:text-white text-black dra py-2 px-4 rounded-full flex items-center space-x-2 dark:hover:bg-white hover:bg-black dark:hover:text-black hover:text-white">
              <FaBook />
              <span>Book Now</span>
            </button>
          </div>
        </div>
      </div>
      {/* 2nd card */}
      <div className="flex flex-col shadow-lg gap-6 bg-gray-300 text-black dark:bg-gray-900 dark:text-white p-6 md:p-12 rounded-lg ">
        <div className="avatar indicator">
          <span className="indicator-item badge">Ayaka</span>
          <div className="w-16 rounded-full">
            <img
              src="https://cdn.discordapp.com/attachments/1065689957525630997/1165311376386957432/q5GjuZ2.png?ex=6558d8ca&is=654663ca&hm=e447efa03ee793ab7357ac64d6349014115df6bab66d6635e0fda4a71ac9bf1d"
              alt="Ayaka's Avatar"
            />
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold mt-4 md:mt-0">
            Ooo update Kore nai maybe
          </h1>
          <p className=" text-lg dark:text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quasi
            natus repellendus rem rerum! Recusandae deserunt eveniet odio autem
            dolorem!
          </p>
        </div>
      </div>

      <div>
        <div className="my-24 text-center text-4xl font-semibold dark:text-[#c5c3c9b7]">
          <h1>Related Services</h1>
        </div>
        <div>
          <div className="flex flex-wrap justify-center gap-4 space-x-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <img
                  src="https://source.unsplash.com/random/300x300/?2"
                  alt=""
                  className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
                />
                <div className="flex flex-col justify-between p-6 space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracki">
                      Donec lectus leo
                    </h2>
                    <p className="dark:text-gray-100">
                      Curabitur luctus erat nunc, sed ullamcorper erat
                      vestibulum eget.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
