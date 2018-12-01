import React from "react";
import { lightSpeedIn,slideInLeft } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
const styles = {
  lightSpeedIn: {
    animation: 'x 8s',
    animationName: Radium.keyframes(lightSpeedIn, 'lightSpeedIn')
  },
  slideInLeft:{
    animation:'x 10s',
    animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
  }
}
const Header = () => (
  <StyleRoot>
  <header className="masthead d-flex">
    <div className="container text-center my-auto">
      <h1 className="mb-1" style={styles.lightSpeedIn}>My Portfolio</h1>
      <h3 className="mb-5" >
        <em>Chris Cheng Qi's Personal Website</em>
      </h3>
      <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about" style={styles.slideInLeft}>
        Find More About Me
      </a>
    </div>
    <div className="overlay" />
  </header>
  </StyleRoot>
);
export default Header;
