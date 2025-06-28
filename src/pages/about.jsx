import React, { useEffect, useRef } from "react"
import Header from "../components/Header"
import "../components/HeroCarousel.css"
import LastSection from "../components/lastsection"
import Section2 from "../components/section2"
import bulb from '../assets/bulb.gif';
import "./about.css" 
const About = () => {
  const slide = {
    image: "/images/aboutbg.png",
    title: "Bright Ideas, Built to Scale",
    description:
      "At Luminosa Labs, we build digital experiences that go beyond the expected—scalable, beautiful, and engineered to grow with your vision.",
  }

  const cardsRef = useRef([])

  useEffect(() => {
    const handleScroll = () => {
      const centerY = window.innerHeight / 2

      cardsRef.current.forEach((card) => {
        if (!card) return

        const rect = card.getBoundingClientRect()
        const cardCenterY = rect.top + rect.height / 2

        const distance = Math.abs(centerY - cardCenterY)
        const maxDistance = window.innerHeight / 2

        const scale = 1.1 - Math.min(distance / maxDistance, 1) * 0.15
        const opacity = 1 - Math.min(distance / maxDistance, 1) * 0.2

        card.style.transform = `scale(${scale})`
        card.style.opacity = opacity
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const setCardRef = (el, index) => {
    cardsRef.current[index] = el
  }

  const cardData = [
    ["card1.png", "LOGICAL", "STRATEGIES"],
    ["card2.png", "LIVELY", "COLLABORATION"],
    ["card3.png", "LONG-TERM", "VALUE"],
    ["card4.png", "EMPATHY-", "DRIVEN"],
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
                <p className="font-ag">About Us</p>
                <h1 className="slide-title">{slide.title}</h1>
                <p className="slide-description">{slide.description}</p>
                <div className="slide-buttons">
                  <button
                    className="btn btn-primary"
                    style={{
                      backgroundColor: "rgb(255, 255, 255)",
                      color: "black",
                      padding: "13px 24px",
                      borderRadius: "10px",
                      fontSize: "18px",
                    }}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="mission-section"
        style={{
          padding: "4rem 2rem",
          textAlign: "center",
          backgroundColor: "#f9f9f9",
        }}
      >
        <h4 className="mission-title"
          style={{
            color: "rgba(133, 34, 0, 1)",
            fontSize: "24px",
            textTransform: "uppercase",
            fontWeight: "600",
            marginBottom: "1rem",
            fontFamily: "Work Sans",
          }}
        >
          Our Mission
        </h4>
        <h2 className="mission-subtitle"
          style={{
            fontSize: "54px",
            marginBottom: "1.5rem",
            color: "#1a1a1a",
            fontFamily: "Zain",
          }}
        >
          To transform ambitious ideas into powerful digital
          <br />
          solutions that are scalable, secure, and human-centered.
        </h2>
        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            fontSize: "1.1rem",
            color: "#3248a8",
            lineHeight: "1.6",
            fontFamily: "Work Sans",
          }}
        >
          We exist to empower{" "}
          <span style={{ color: "#3248a8", fontWeight: "600" }}>bold</span> thinkers with the
          tools, systems,
          <br />
          and strategy to shape the future—{" "}
          <span style={{ color: "#3248a8", fontWeight: "600" }}>
            one luminous product at a time.
          </span>
        </p>
      </section>
       <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h3 className="about-subtitle">WHAT DRIVES US</h3>
          <h2 className="about-title">
            We're not just engineers or designers — we're problem-solvers, strategists, and collaborators </h2> 
          <p className="about-description">
            We approach every project with empathy and logic, blending creativity with structure to help our partners grow confidently in a competitive world.
          </p>
        </div>
        <div className="about-image-container">
          <div className="bulb-container">
            <img src={bulb} alt="Innovative ideas" className="bulb-gif" />
            <div className="brown-overlay"></div>
          </div>
        </div>
      </div>
    </section>


      <Section2 />
      <LastSection />
    </>
  )
}

export default About
