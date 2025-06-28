// src/components/LastSection.jsx
import React from "react"
 
import "./lastsection.css"


const LastSection = ({
  subtitle = "GET STARTED WITH US",
  title = "Let's Build Something\nExtraordinary Together ",
  description = "Your vision deserves more than just execution—it needs innovation, strategy, and a touch of brilliance. Whether you're launching a new product, revamping your platform, or integrating AI, we're here to turn your ideas into reality.",
  buttonText = "Contact Us",
  buttonLink = "/Contact",
}) => {
  return ( 
    <section id="contact" className="contact-sections">
      <div className="container">
        <p className="section-subtitle">{subtitle}</p>
        <h2 className="section-title">
          {title.split("\n").map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              <br />
            </React.Fragment>
          ))} 
        </h2>
        <p className="section-description">{description}</p>
        <div className="contact-button-container">
          <a href={buttonLink} className="btn btn-outline">
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  )
}

export default LastSection
