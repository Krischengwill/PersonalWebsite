import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
const portfolioItems = [
  {
    imgSrc: "./img/portfolio-1.jpg",
    heading: "Chat-Room",
    description: "A Little Chat Room with Login and Room Select",

  },
  {
    imgSrc: "./img/portfolio-2.jpg",
    heading: "A Game of Snake",
    description:
      "A Game of Snake"


  },
  {
    imgSrc: "./img/portfolio-3.jpg",
    heading: "A Game of Tetris",
    description:
      "A Game of Tetris"
  },
  {
    imgSrc: "./img/portfolio-4.jpg",
    heading: "Code Conveter",
    description:
      "A Code Conveter Excesising HTML CSS Javascript"
  }
];
const PortfolioSection = () => (
  <ScrollableAnchor id="portfolio">
    <section className="content-section">
      <div className="container">
        <div className="content-section-heading text-center">
          <h3 className="text-secondary mb-0">Portfolio</h3>
          <h2 className="mb-5">Recent Projects</h2>
        </div>
        <div className="row no-gutters">
          {portfolioItems.map((project, index) => (
            <div className="col-lg-6" key={`portfolio_item_${index}`}>
              <a className="portfolio-item" href="https://github.com/Krischengwill" target="_blank">
                <span className="caption">
                  <span className="caption-content">
                    <h2>{project.heading}</h2>
                    <p className="mb-0">{project.description}</p>
                  </span>
                </span>
                <img className="img-fluid"  src={project.imgSrc} alt=""/>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default PortfolioSection;
