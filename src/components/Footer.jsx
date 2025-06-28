import React from 'react';
import './Footer.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-branding">
          <div className="logo-container">
             <img src="/images/lumb.svg" alt="Luminosa Logo" className="footer-logo" />
            <span className="company-name">LUMINOSA</span>
          </div>
        </div>
        
        <div className="footer-contact">
          <h3>CONTACT US</h3>
          <address>
            2121 N. California Blvd Suite 243,
                    <br />
                    Walnut Creek, CA 94596
          </address>
        </div>
        
        <div className="footer-legal">
          <div className="copyright">
            © 2025 Luminosa Labs. All Rights Reserved.
          </div>
          <div className="legal-links">
            <a href="/privacy-policy" className="legal-link">Privacy Policy</a>
            <a href="/terms-of-use" className="legal-link">Terms of Use</a>
          </div>
        </div>
        
        <div className="footer-social">
          <a href="https://www.linkedin.com/company/luminosa-labs/?viewAsMember=true" className="social-link" target="_blank" rel="noopener">
            <svg className="linkedin-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;