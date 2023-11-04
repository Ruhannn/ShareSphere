import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return <div>homee</div>;
};

export default Home;
