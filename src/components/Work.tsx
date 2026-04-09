import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "On-Demand Home Services Marketplace",
    category: "On-Demand Services",
    tools: "React Native, TypeScript, WebSockets, OTA",
    images: ["/images/homeowner.png"],
  },
  {
    title: "Live Video E-Commerce",
    category: "E-Commerce",
    tools: "React Native, WebRTC, WebSockets",
    images: ["/images/kiko.png"],
  },
  {
    title: "Logistics and Supply Chain Management",
    category: "B2B Service",
    tools: "React Native, JavaScript",
    images: [
      "/images/tc1.jpg",
      "/images/tc2.jpg",
      "/images/tc3.jpg",
      "/images/tc4.jpg",
      "/images/tc5.jpg",
    ],
  },
  {
    title: "Map-Based Property Search App",
    category: "Real Estate",
    tools: "React Native, REST API, Google Maps",
    images: ["/images/realestate.png"],
  },
  {
    title: "Claim Management App",
    category: "Claim App",
    tools: "React Native, Expo, EAS",
    images: ["/images/wkg.png"],
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                   <div className="carousel-image-wrapper">
  <div className="image-stack">
    {project.images.map((img, i) => (
      <WorkImage
        key={i}
        image={img}
        alt={`${project.title}-${i}`}
        className={`stack-img stack-${i}`}
      />
    ))}
  </div>
</div>
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
