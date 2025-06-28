// src/components/ServiceSection.jsx
"use client"

import { useEffect, useRef } from "react"
import "./ServiceSection.css"

const ServiceSection = () => {
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

  const setCardRef = (index) => (el) => {
    cardsRef.current[index] = el
  }

  const services = [
    {
      icon: "/images/product.svg",
      alt: "Product Development",
      title: "PRODUCT\nDEVELOPMENT",
      description: 
        "From MVPs to full-scale platforms, we build reliable, future-ready software that scales effortlessly with your business.",
    },
    {
      icon: "/images/Inline.svg",
      alt: "Software Re-engineering",
      title: "SOFTWARE RE-\nENGINEERING",
      description:
        "We modernize legacy systems with logical solutions that enhance performance and reduce technical debt.",
    },
    {
      icon: "/images/brain.svg",
      alt: "AI & Chatbots",
      title: "AI &\nCHATBOTS",
      description:
        "We transform customer interactions with intelligent bots that offer real-time support and a human touch.",
    },
    {
      icon: "/images/pen.svg",
      alt: "Design & Branding",
      title: "DESIGN &\nBRANDING",
      description:
        "We design with intention, creating digital experiences that connect, engage, and leave a lasting impression.",
    },
  ]

  return (
    <section className="service-section">
      <div className="container">
        <div className="firstparagraph">
          <p className="subtitle1">WHAT DO WE DO?</p>
          <h2 className="title1"> 
            Light the Way with 
            <br />
            Smart, Scalable Solutions
          </h2>
          <p className="description1">
            We blend creativity with technology to develop solutions that drive growth and elevate brands. Our services
            cover every step of the digital journey, ensuring your business not only meets but exceeds its goals.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" ref={setCardRef(index)} key={index}>
              <div className="icon-circle">
                <img src={service.icon} alt={service.alt} className="service-icon" />
              </div>
              <h3 className="service-title">
                {service.title.split("\n").map((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                ))}
              </h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceSection
