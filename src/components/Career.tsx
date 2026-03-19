import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior React Native Developer</h4>
                <h5>Gravhl</h5>
              </div>
              <h4>2022 -NOW</h4>
            </div>
            <p>
              ● Led end-to-end development of a scalable react native mobile application from scratch.
              <br />
              ● Designed modular and scalable user interface architecture to support rapid feature iteration.
              <br />
              ● Created reusable components by following atom molecule approach.
              <br />
              ● Implemented job posting and contractor bidding workflows.
              <br />
              ● Built real-time chat system between customers and service providers capable of supporting
              thousands of users with minimum latency.
              <br />
              ● Integrated push notifications and background updates using Firebase and reduced feature
              delivery time roughly by 40% using OTA updater.
              <br />
              ● Implemented internationalization (i18n) and dynamic theme support (dark/light modes).
              <br />
              ● Collaborated with product and design teams to prepare the platform for launch.
              <br />
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>React Native Developer</h4>
                <h5>SmoothTag Technologies</h5>
              </div>
              <h4>2021 - 2022</h4>
            </div>
            <p>
              ● Built the mobile application from scratch using React Native.
              <br />
              ● Implemented live video streaming and video call shopping experience supporting active
              streams of roughly 5000 simultaneous viewers.
              <br />
              ● Designed modular reusable components for scalable UI development.
              <br />
              ● Integrated real-time engagement features for interactive shopping.
              <br />
              ● Successfully launched the application on app stores, achieving 10,000 downloads in the first 3
              months.
              <br />
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>React Native Developer</h4>
                <h5>Gravhl</h5>
              </div>
              <h4>2019 - 2021</h4>
            </div>
            <p>
              ● Built logistics and supply chain mobile applications from scratch.
              <br />
              ● Implemented shipment tracking and order management workflows improved order visibility of
              approximately 200 daily active logistics personnel.
              <br />
              ● Optimized onboarding and order flows for better user experience.
              <br />
              ● Successfully deployed applications for client use achieving a crash free session rate of 98%
              post launch.
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
