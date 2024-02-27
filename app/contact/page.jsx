import React from "react";
import "../contact/contact.css";
import Contactss from "../Components/Contact";
import Footer from "../Components/Footer";
import Head from "next/head";

function Contact() {
  return (
    <div className="contact-container">
      {/* Add meta tags for SEO */}
      <Head>
        {/* Primary Meta Tags */}
        <title>Contact Illford Technologies| Web Design Services Kochi and Web Development Services Kochi</title>
        <meta name="title" content="Contact Illford Technologies| Web Design Services Kochi and Web Development Services Kochi" />
        <meta name="description" content="Contact Illford Technologies for expert Web design services Kochi and Web Development Services Kochi. Evaluate reliable digital marketing services in Kochi to ensure a flawless online experience." />
        <meta name="keywords" content="Web Development Contact Kochi, Contact for Web Designing Company Kochi, Contact for UI/UX Designing  Kochi, Contact Web Development Firm Kerala, Contact for Web Development Services Kochi, Contact for Web Development Services Ernakulam, Web Designing Agency Kerala, Contact for Digital Marketing Solutions Kochi, Contact for Web Development Kochi, Contact for Web Designing services Kochi" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="15 days" />
        <meta name="author" content="Illford Technologies" />
        <meta name="content-language" content="english" />
        <meta name="rating" content="General" />
        <meta name="robots" content="follow,index" />
        <link rel="canonical" href="https://illfordtechnologies.in/contact" />
        <meta name="DC.title" content="Contact Illford Technologies| Web Design Services Kochi and Web Development Services Kochi" />
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Kochi" />
        <meta name="geo.position" content="9.967428;76.245444" />
        <meta name="ICBM" content="9.967428, 76.245444" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://illfordtechnologies.in/contact" />
        <meta property="og:title" content="Contact Illford Technologies| Web Design Services Kochi and Web Development Services Kochi" />
        <meta property="og:description" content="Contact Illford Technologies for expert Web design services Kochi and Web Development Services Kochi. Evaluate reliable digital marketing services in Kochi to ensure a flawless online experience." />
        <meta property="og:image" content="" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://illfordtechnologies.in/contact" />
        <meta property="twitter:title" content="Contact Illford Technologies| Web Design Services Kochi and Web Development Services Kochi" />
        <meta property="twitter:description" content="Contact Illford Technologies for expert Web design services Kochi and Web Development Services Kochi. Evaluate reliable digital marketing services in Kochi to ensure a flawless online experience." />
        <meta property="twitter:image" content="" />

      </Head>
      <div className="contact-image-div">
        <div className="contact-content">
          <p> Contact Us</p> 
        </div>
      </div>
      {/* contact section div */}
      <div className="contact-section-div">
        <div className="home-contact-section">
          <div className="contact-intro">
            <p className="home-contact-first-tsxt"> Come visit us at </p>
            <h1>Our Address</h1>
            <div className="contactss">
              <div className="home-contact-item">
                <img
                  src="/images/location.webp"
                  alt=""
                  className="contactpage-img"
                />
                <div className="contact-adress-section">
                  <h6>Our Address</h6>

                  <p>

                    Illford Digital, BCG Tower, Door No: 11E, Kakkanad, Kochi,
                    <br />
                    Eranakulam, India, 682037
                  </p>
                </div>
              </div>
              <div className="home-contact-item">
                <img
                  src="/images/telephone.webp"
                  alt=""
                  className="contactpage-img"
                />
                <div className="contact-adress-section">
                  <h6>Our Phone NUmber</h6>
                  <p>+91 9847861800</p>
                </div>
              </div>
              <div className="home-contact-item">
                <img
                  src="/images/mail.webp"
                  alt=""
                  className="contactpage-img"
                />
                <div className="contact-adress-section">
                  <h6>Our Email</h6>
                  <p>contact@illfordtechnologies.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="home-contact-img">
            <img src="/images/mobile1-contact.webp" alt="" />
          </div>
        </div>
      </div>
      <Contactss />
      <div className="home-contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.1201171215625!2d76.34238547501876!3d10.006935872915362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c9238baaaab%3A0xbbdec061a97e0a8f!2sIllford%20Technologies%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1701421882403!5m2!1sen!2sin"
          width={600}
          height={450}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
