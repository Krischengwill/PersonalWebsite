import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import { fadeInUp,slideInLeft } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Img from "../scss/img/profile.jpg";
const styles = {
  fadeInUp: {
    animation: 'x 12s',
    animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
  },
  slideInLeft:{
    animation:'x 9s',
    animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
  }
}
const AboutSection = () => (
  <StyleRoot>
  <ScrollableAnchor id="about">
    <section className="content-section bg-light">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-10 mx-auto" style={styles.fadeInUp}>
            <h2>
              A Short Description About Myself
            </h2>
            <img className="proimg"src ={Img} alt=""/>
            <br/>
            <p className="lead mb-5" style={styles.slideInLeft}>
              Hi, My Name is Cheng Qi.I am really glad that you can take a short time to visit my personal website.I was graduated from Western University.My major is Electrical and Computer Engineering.
              I currently work as a Junior Software Developer in a start up called Cya.live which is located in Downdown of Toronto.
            </p>
            <a
              className="btn btn-dark btn-xl js-scroll-trigger"
              href="#services"
            >
              My Hobbies
            </a>
          </div>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
  </StyleRoot>
);

export default AboutSection;
