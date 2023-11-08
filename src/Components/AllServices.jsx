import "./AllServices.css";
const AllServices = () => {
  return (
    <>
      <div className="min-h-screen max-w-7xl mx-auto">
        <div className="mx-auto max-w-md my-10">
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
        <div className="card card-side bg-base-200 dark:bg-[#4e4a79] dark:text-white shadow-xl mx-12 flex flex-col md:flex-row lg:flex-row">
          <figure>
            <img
              src="https://cdn.discordapp.com/attachments/1089969086190075994/1170318565686116452/GY5E97A.png?ex=65589b19&is=65462619&hm=1ca84a7d32b4f99ce89d0b3b088c4689b6d5cdf07f1ef43c6ae32527f4423a1a&"
              alt="Movie"
              className="rounded-xl md:rounded-none lg:rounded-none"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllServices;
