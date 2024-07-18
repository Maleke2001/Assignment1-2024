import "./Article.css";
import drone1 from "../../assets/drone1.png";
import drone2 from "../../assets/drone2.png";
import drone3 from "../../assets/drone3.png";
import drone4 from "../../assets/drone4.png";

export const Article = () => {
  return (
    <div className="article-container">
    
    <div className="article-content">
      <div className="secton-header">
        <p className="section-head">Latest articles</p>
      </div>
      <div className="line">
        <hr></hr>
      </div>
      <div className="cards-container">
        <div className="card">
          <img src={drone1} alt="How to automate Surveillance drones"></img>
          <hr></hr>
          <p>How to automate Surveillance drones</p>
        </div>

        <div className="card">
          <img src={drone2} alt="Robotics and Artificial intelligence"></img>
          <hr></hr>
          <p>Robotics and Artificial intelligence</p>
        </div>

        <div className="card">
          <img src={drone3} alt="Improving Lives through Robotics Prosthetics"></img>
          <hr></hr>
          <p>Improving Lives through Robotics Prosthetics</p>
        </div>

        <div className="card">
          <img src={drone4} alt="Power of Robotics in Agriculture"></img>
          <hr></hr>
          <p>Power of Robotics in Agriculture</p>
        </div>
      </div>
    </div>
      
    </div>
  );
};
