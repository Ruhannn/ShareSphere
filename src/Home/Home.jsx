import Services from "../Components/Services";
import useTitle from "../hook/useTitle";
const Home = () => {
  useTitle("Home");
  return (
    <>
      <div className="min-h-screen max-w-7xl mx-auto">
      <h1
          className="text-center font-extrabold text-5xl my-8 text-blue-500">
          Our service
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 mx-5 items-center justify-center">
          <Services></Services>
        </div>
        <div>
          
        </div>
      </div>
    </>
  );
};

export default Home;
