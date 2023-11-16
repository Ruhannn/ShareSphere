import { Link } from "react-router-dom";
import Banner from "../Components/Banner";
import Services from "../Components/Services";
import useTitle from "../hook/useTitle";
import Gallery from "../Components/Gallery";
import FAQ from "../Components/FAQ";
import Team from "../Components/Team";

const Home = () => {
  const scrollToSection = () => {
    const section = document.getElementById("take-a-look");
    section.scrollIntoView({ behavior: "smooth" });
  };
  useTitle("Home");
  return (
    <>
      <div>
        <Banner></Banner>
        <div className="dark:bg-[#211e34] min-h-[400px] gap-6 dark:text-white items-center justify-center flex flex-col p-4 md:p-8 lg:p-12">
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 dark:text-white">
              <span className="text-indigo-400">Step into</span> ShareSphere:
              Your Hub for Exceptional Services
            </h1>
            <p className="text-sm md:text-base lg:text-lg">
              Discover a world of top-notch services tailored just for you.
              ShareSphere is your go-to destination for seamless solutions and
              unparalleled experiences.
            </p>
          </div>
          <button onClick={scrollToSection} className="rounded animate-bounce relative h-12 w-40 overflow-hidden border border-indigo-600 text-indigo-600 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-indigo-600 before:duration-300 before:ease-out hover:text-white hover:shadow-indigo-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
            <span className="relative z-10">Get Started</span>
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center font-extrabold text-5xl my-8 text-blue-500">
          Popular services
        </h1>
        <div id="take-a-look">
          <Services></Services>
        </div>
        <div className="flex justify-center my-10">
          <Link
            to="/all-services"
            className="btn bg-blue-400 dark:bg-[#3d3f58] text-[#ffffff] border-none ">
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
