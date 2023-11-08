import { Link } from "react-router-dom";
import Banner from "../Components/Banner";
import Services from "../Components/Services";
import useTitle from "../hook/useTitle";
import Gallery from "../Components/Gallery";
import FAQ from "../Components/FAQ";
import Team from "../Components/Team";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <div>
        <Banner></Banner>
      </div>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center font-extrabold text-5xl my-8 text-blue-500">
          Available services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 items-center justify-center mx-auto p-3">
          <Services></Services>
        </div>
        <div className="flex justify-center my-10">
          <Link to='/all-services' className="btn bg-blue-400 dark:bg-[#3d3f58] text-[#ffffff] border-none ">
            all services
          </Link>
        </div>
      </div>
      <section>
        <Gallery></Gallery>
      </section>
      <section>
        <Team></Team>
      </section>
      <section>
        <FAQ></FAQ>
      </section>
    </>
  );
};

export default Home;
