import { useState, useCallback } from "react";
import "./styles/Work.css";
import {
  MdArrowBack,
  MdArrowForward,
  MdArrowOutward,
} from "react-icons/md";

type Project = {
  title: string;
  category: string;
  description: string;
  link: string;
  tools: string;
  images: string[];
};

const projects: Project[] = [
  {
    title: "On-Demand Home Services Marketplace",
    category: "On-Demand Services",
    description:
      "A mobile-first marketplace that connects homeowners with vetted service providers, supports real-time booking flows, and keeps job updates moving through live status changes.",
    link: "https://www.gravhl.com/",
    tools: "React Native, TypeScript, WebSockets, OTA",
    images: ["/images/homeowner.png"],
  },
  {
    title: "Live Video E-Commerce",
    category: "E-Commerce",
    description:
      "A live-shopping experience with product discovery, real-time video sessions, and interaction patterns designed for fast buying decisions during streams.",
    link: "https://play.google.com/store/apps/details?id=live.kiko.user&pcampaignid=web_share",
    tools: "React Native, WebRTC, WebSockets",
    images: [
      "/images/kl1.png",
      "/images/kl2.png",
      "/images/kl3.png",
      "/images/kl4.png",
      "/images/kl5.png",
      "/images/kl6.png",
      "/images/kl7.png",
      "/images/kl8.png",
    ],
  },
  {
    title: "Logistics and Supply Chain Management",
    category: "B2B Service",
    description:
      "A field-ready logistics workflow for tracking supply movement, coordinating teams, and keeping operational data readable across mobile screens.",
    link: "https://play.google.com/store/apps/details?id=com.supplymintbeta.dev&hl=en_IN",
    tools: "React Native, JavaScript",
    images: [
      "/images/tc1.png",
      "/images/tc2.png",
      "/images/tc3.png",
      "/images/tc4.png",
      "/images/tc5.png",
    ],
  },
  {
    title: "Map-Based Property Search App",
    category: "Real Estate",
    description:
      "A real estate search interface centered on map exploration, property filtering, and location-aware browsing for buyers comparing homes quickly.",
    link: "https://www.linkedin.com/company/propdam/about/",
    tools: "React Native, REST API, Google Maps",
    images: ["/images/realestate.png"],
  },
  {
    title: "Claim Management App",
    category: "Claim App",
    description:
      "An Expo-powered claim management app that simplifies case intake, claim progress visibility, and update delivery for mobile users.",
    link: "https://play.google.com/store/apps/details?id=com.wkg_claim",
    tools: "React Native, Expo, EAS",
    images: ["/images/wkg1.png", "/images/wkg2.png", "/images/wkg3.png", "/images/wkg4.png"],
  },
];

const ProjectScreens = ({ project }: { project: Project }) => {
  const [screenIndex, setScreenIndex] = useState(0);
  const goToScreen = useCallback(
    (index: number) => {
      const nextIndex =
        index < 0
          ? project.images.length - 1
          : index >= project.images.length
            ? 0
            : index;

      setScreenIndex(nextIndex);
    },
    [project.images.length]
  );

  return (
    <div className="project-screens">
      <div className="project-screens-viewport">
        <div
          className="project-screens-track"
          style={{
            transform: `translateX(-${screenIndex * 100}%)`,
          }}
        >
          {project.images.map((image, index) => (
            <figure className="project-screen" key={image}>
              <img
                src={image}
                alt={`${project.title} screen ${index + 1}`}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </figure>
          ))}
        </div>
      </div>

      <div className="screen-carousel-controls">
        <button
          className="screen-arrow"
          onClick={() => goToScreen(screenIndex - 1)}
          aria-label={`Previous ${project.title} screen`}
          disabled={project.images.length === 1}
          data-cursor="disable"
        >
          <MdArrowBack />
        </button>
        <div className="screen-dots" aria-label={`${project.title} screens`}>
          {project.images.map((image, index) => (
            <button
              key={image}
              className={`screen-dot ${
                index === screenIndex ? "screen-dot-active" : ""
              }`}
              onClick={() => goToScreen(index)}
              aria-label={`Show screen ${index + 1}`}
              disabled={project.images.length === 1}
              data-cursor="disable"
            />
          ))}
        </div>
        <button
          className="screen-arrow"
          onClick={() => goToScreen(screenIndex + 1)}
          aria-label={`Next ${project.title} screen`}
          disabled={project.images.length === 1}
          data-cursor="disable"
        >
          <MdArrowForward />
        </button>
      </div>
    </div>
  );
};

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
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <h4>{project.title}</h4>
                        <p className="carousel-description">
                          {project.description}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        <a
                          className="project-link"
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          data-cursor="disable"
                        >
                          View project <MdArrowOutward />
                        </a>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <ProjectScreens project={project} />
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
