import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
const AutoplaySlider = withAutoplay(AwesomeSlider);
const Banner = () => {
  return (
    <AutoplaySlider
      play={true}
      interval={3000}
      cancelOnInteraction={false}
      animation="scaleOutAnimation"
      className="h-[calc(100vh-400px)]"
      transitionDelay={250}
      mobileTouch={true}
      bullets={false}>
      <div data-src="https://i.ibb.co/jGw39cC/4419157.jpg" />
      <div data-src="https://i.ibb.co/V3CBXGL/4452317.jpg" />
      <div data-src="https://i.ibb.co/qDSp9FQ/4492606.jpg" />
      <div data-src="https://i.ibb.co/6NP7nL3/5193124.jpg" />
    </AutoplaySlider>
  );
};

export default Banner;
