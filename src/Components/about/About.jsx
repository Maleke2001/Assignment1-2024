import "./About.css";
import aboutImg from '../../assets/drone8.png';

export const About = () => {
  return (
    <div className="about-container">
      <div className="about-img">
        <img src={aboutImg} alt="About us"></img>
      </div>

      <div className="about-content">
        <div>
          <p className="section-head">About us</p>
        </div>
        <div className="line">
          <hr></hr>
        </div>
       
        <p className="about-paragraph">Welcome to our dronoticz, where innovation and technology converge to
        shape the future. We revolutionize industries and improve lives
        worldwide through our passion for pushing the boundaries of what robots
        can do. With expertise in AI, computer vision, mechanical engineering,
        and automation, we lead the way in the robotics revolution. Our
        brilliant team creates intelligent machines that seamlessly integrate
        into daily life, enhancing productivity, safety, and efficiency. Join us
        on this exciting journey as we unlock new frontiers, solve complex
        challenges, and shape a future where intelligent machines work
        hand-in-hand with humans. Discover the power of robotics and be part of
        the revolution.
        </p>
      </div>
    </div>
  );
};
