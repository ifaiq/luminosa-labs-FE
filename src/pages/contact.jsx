"use client"

import { useState } from "react"
import "./contact.css"
import Header from "../components/Header"
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  return (  
    <div className="contact-page">
      <Header />
      {/* Main Content */}
      <main className="main-content">
        <div className="contact-container">
          <div className="contact-card">
            <div className="contact-info">
             <div className="contact-heading">
              <div className="contact-label">CONTACT US</div>
              <div className="contact-title">Get Started</div>
              </div>
              <p className="contact-description">
                Ready to bring your idea to life or revamp your existing codebase?  
                <br/> Get in touch with us today.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span>(510) 393 - 4860</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <span>tech@luminosalabs.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>
                    2121 N. California Blvd Suite 243,
                    <br />
                    Walnut Creek, CA 94596
                  </span>
                </div>
              </div>
            </div>

            <div className="contact-form-section">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-button">
                  Submit Form
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ContactPage
