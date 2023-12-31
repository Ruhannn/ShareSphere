import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
const AutoplaySlider = withAutoplay(AwesomeSlider);
const Banner = () => {
  return (
    <>
      <AutoplaySlider
        play={true}
        interval={3000}
        cancelOnInteraction={false}
        animation="scaleOutAnimation"
        className="cot h-[calc(100vh-450px)]"
        transitionDelay={250}
        mobileTouch={true}
        bullets={false}>
        <div data-src="https://i.ibb.co/wLLPk7L/peakpx-2.jpg" />
        <div data-src="https://i.ibb.co/N75LhWC/wp10583237-housekeeping-wallpapers.jpg" />
        <div data-src="https://i.ibb.co/jr2bnXh/hnst-9ed1-210608.jpg" />
        <div data-src="https://i.ibb.co/hM1wh2D/1338084.png" />
      </AutoplaySlider>
    </>
  );
};

export default Banner;
