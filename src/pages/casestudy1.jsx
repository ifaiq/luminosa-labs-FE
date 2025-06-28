import React from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import "../components/HeroCarousel.css"
import './CaseStudy.css';


const CaseStudy1 = () => {
  const slide = {
    image: "/images/bg2.png",
    title: "From Bottlenecks to Breakthroughs",
    description:
      "We helped Styles overcome serious technical hurdles, re-engineering their platform into a fast, scalable SaaS solution that fueled 45% year-over-year growth. ",
  }
   const caseStudies = [
    {
      title: "From Startup Struggles to Scalable Success",
      description:
        "We re-engineered a confidential UAE-based product, building a solid backend foundation that fueled growth to 150K customers and record-breaking sales.",
      tags: ["Product Development", "Re-Engineering"],
      image: "/images/case2.png",
      link: "/casestudy2",
    },
    {
      title: "Redefining Safe and Empowering Rides for Women",
      description:
        "We built a women-first ride-hailing platform focused on safety, trust, and affordability—empowering women to travel confidently through real-time tracking, secure driver screening, and a supportive community-driven experience.",
      tags: ["Product Development", "Design & Branding"],
      image: "/images/case3.png",
      link: "/casestudy3",
    },
  ]

  return (
    <>
      <Header logoText="LUMINOSA" /> 
      <section className="hero-carousel">
        <div className="carousel-container" style={{ transform: "translateX(0%)" }}>
          <div className="carousel-slide">
            <div className="slide-image-container">
              <div className="slide-overlay"></div>
              <img
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                className="slide-image"
              />
            </div>
            <div className="slide-content-wrapper">
              <div className="slide-content">
                <div className="tags">
               <span className="tag3">Product Development</span>
               <span className="tag3">Re-Engineering</span>
               </div>
               <p className="font-ag2">Case Study</p>
                <h1 className="slide-title">{slide.title}</h1>
                <p className="slide-description">{slide.description}</p>
                <p className="date">5 min Read • July 12, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="case-study-content">
        <div className="case-study-container">
      <div className="header-section">
        <div className="left-content">
          <p className="seamless-text">SEAMLESS EXPERIENCES</p>
          <h1 className="main-title">Re-engineering a broken SaaS backend into a high-performing platform</h1>
        </div>
        <div className="right-content">
          <h3 className="overview-title">OVERVIEW</h3>
          <p className="overview-text">
            Stylz is a Software-as-a-Service (SaaS) platform designed for a client in Saudi Arabia. The platform serves
            as a digital ecosystem for businesses in the beauty and wellness industry, providing booking, management,
            and customer engagement features. However, despite its potential, the existing system suffered from serious
            technical bottlenecks, making it difficult to scale and innovate.
          </p>
        </div>
      </div>

      <div className="content-grid">
        <div className="content-card">
          <h1 className="card-title">CHALLENGE</h1>
          <p className="card-text">
            Stylz struggled with a tightly coupled, undocumented backend that caused performance lags and made scaling
            nearly impossible.
          </p>
        </div>

        <div className="content-card">
          <h3 className="card-title">OUR SOLUTION</h3>
          <p className="card-text">
            Luminosa fully re-engineered Stylz's backend using Django, optimized its database, and refactored the
            frontend to deliver a faster, modular, and future-ready SaaS platform.
          </p>
        </div>

        <div className="content-card">
          <h3 className="card-title">KEY IMPACT</h3>
          <p className="card-text">
            The transformation enabled a 45% YoY growth in new customers for three consecutive years by drastically
            improving system performance, scalability, and reliability.
          </p>
        </div>
      </div>
    </div>
        </section>
         <div className="detailed-challenge-section">
        <h2 className="detailed-challenge-title">THE CHALLENGE</h2>
        <p>Before our intervention, Stylz was plagued with several technical and architectural issues:</p>
        <ul className="challenge-list">
          <li>
            <strong>Tightly Coupled Codebase:</strong> The existing backend (BE) was not modular, making feature updates
            and bug fixes cumbersome.
          </li>
          <li>
            <strong>Poor Maintainability:</strong> Lack of a clear architectural pattern meant that even minor
            modifications risked breaking core functionalities.
          </li>
          <li>
            <strong>Performance Bottlenecks:</strong> The slow response times of the backend caused significant lag on
            both the web and mobile applications.
          </li>
          <li>
            <strong>Lack of Documentation:</strong> No formal documentation existed for the legacy system, making
            onboarding and debugging highly inefficient.
          </li>
        </ul>
      </div>
      <section className="solution-section">
        <div className="solution-header">
          <h2 className="solution-subtitle">OUR SOLUTION</h2>
          <h1 className="solution-title">
            We took a structural and strategic approach to re-engineering the Stylz platform
          </h1>
        </div>

        <div className="solution-timeline">
          <div className="timeline-step">
            <h3 className="step-title">BUSINESS DISCOVERY</h3>
            <h4 className="step-subtitle">Understanding the Business & Domain</h4>
            <p className="step-description">
              Since software engineering is more than just writing code, we invested time in understanding the business
              logic and industry requirements.
            </p>
            <p className="step-description">
              We collaborated closely with the client to map out workflows, business processes, and customer
              expectations.
            </p>
          </div>

          <div className="timeline-step">
            <h3 className="step-title">LEGACY SYSTEM AUDIT</h3>
            <h4 className="step-subtitle">Reverse Engineering the Legacy System</h4>
            <p className="step-description">
              With almost no documentation available, we deconstructed the existing backend system to identify pain
              points and inefficiencies.
            </p>
            <p className="step-description">
              We analyzed database schemas, API interactions, and application workflows to create a roadmap for
              restructuring.
            </p>
          </div>

          <div className="timeline-step">
            <h3 className="step-title">BACKEND RE-ARCHITECTURE</h3>
            <h4 className="step-subtitle">Full Backend Re-engineering</h4>
            <p className="step-description">
              We completely rewrote the backend in Django, ensuring it followed best practices in architecture and
              maintainability. The new system was designed with a modular approach, making it easier to extend and
              integrate new features.
            </p>
            <p className="step-description">
              We optimized database structures using MySQL, ensuring better indexing and query performance.
            </p>
          </div>

          <div className="timeline-step">
            <h3 className="step-title">PRODUCT DEVELOPMENT</h3>
            <h4 className="step-subtitle">Frontend Optimization</h4>
            <p className="step-description">
              While the backend was the primary focus, we also improved the frontend experience.
            </p>
            <p className="step-description">
              The web application (React) and mobile app (React Native) were refactored to communicate more efficiently
              with the new backend.
            </p>
            <p className="step-description">
              We implemented caching mechanisms and optimized API calls to improve speed and responsiveness.
            </p>
          </div>
        </div>
      </section>
      <div className="impact-section">
      <p className="key-impact">KEY IMPACT</p>
      <h2 className="impact-heading">
        The re-engineered Stylz platform delivered
        <br /> significant benefits to the client
      </h2>

      <div className="impact-grid">
        <div className="impact-card">
          <h3>
              <img src="/images/tick.svg" alt="Check icon" />
              Enhanced Maintainability & Scalability
            </h3>
          <p>
            The new modular architecture enabled the client to add new features
            seamlessly without disrupting existing functionalities.
          </p>
          <p>
            The system was now future-proof, capable of handling increasing
            traffic and data load.
          </p>
        </div>

        <div className="impact-card">
          <h3> 
             <img src="/images/tick.svg" alt="Check icon" />
            Reduction in Bugs & Downtime</h3>
          <p>
            With a more structured backend, the number of recurring bugs dropped
            significantly. This allowed the client to focus on business
            expansion rather than firefighting technical issues.
          </p>
        </div>

        <div className="impact-card">
          <h3>
             <img src="/images/tick.svg" alt="Check icon" />
             Business Growth & Customer Acquisition</h3>
          <p>
            With a stable and efficient system in place, the client was able to
            roll out new features more frequently.
          </p>
        </div>

        <div className="impact-card">
          <h3> 
             <img src="/images/tick.svg" alt="Check icon" />
            Improved System Performance</h3>
          <p>
            The platform's response time was reduced drastically, making the app
            and web experience smoother for end users.
          </p>
        </div>
      </div>
    </div>
     <div className="conclusion-container">
      <div className="growth-banner">
        <p>This contributed to a 45% Year-on-Year (YoY) growth<br />in new customers for three consecutive years.</p>
      </div>

      <div className="conclusion-background">
        <div className="conclusion-content">
          <h3>CONCLUSION</h3>
          <p>
            By applying strategic software engineering principles and leveraging our expertise in Django,
            React, and MySQL, Luminosa successfully transformed Stylz from a struggling platform into a
            robust, scalable, and high-performing SaaS product. This project reinforced the importance
            of understanding business logic, re-engineering systems with scalability in mind, and
            maintaining a strong focus on user experience.
          </p>
          <p>
            With the new architecture in place, Stylz is now well-positioned for future growth,
            innovation, and market leadership in Saudi Arabia's beauty and wellness industry.
          </p>
        </div>
      </div>
    </div>
    <section className="case-studies-section" style={{ padding: "4rem 2rem" }}>
  <h2 className="text-left text-lg font-bold uppercase " style={{  fontSize: '18px',color: "rgba(133, 34, 0, 1)" , fontFamily:"Work Sans"}}>
    EXPLORE OUR CASE STUDIES
  </h2>
  <h3 className="text-left mb-10" style={{ color: "#000", fontSize: "54px", fontWeight: "400" , fontFamily: "Zain"}}>
    Read More
  </h3>

  <div className="case-studies-grid">
    {caseStudies.map((study, index) => (
      <div className="case-card" key={index}>
        <img src={study.image} alt={study.title} className="case-image" />
        <div className="case-tags">
          {study.tags.map((tag, i) => (
            <span key={i}  style={{ backgroundColor: "rgb(163, 72, 11)", color: "#fff", padding: "4px 10px", borderRadius: "12px", fontSize: "12px" }}>{tag}</span>
          ))}
        </div>
        <h4  style={{ fontFamily:"Zain", fontSize:"26px", fontWeight: "700", marginTop: "1rem",  }}>{study.title}</h4>
        <p style={{ fontSize: "16px", fontWeight:"400",  fontFamily:"Work Sans", marginTop: "0.5rem" , color: "rgb(70, 19, 2)" }}>{study.description}</p>
        <Link to={study.link} className="read-more-link">Read More →</Link>
      </div>
    ))}
  </div>
</section>

        
    </>
  ) 
};

export default CaseStudy1;