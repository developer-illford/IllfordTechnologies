import React from "react";
import "../Components/Contactss.css";
function Contactss() {
  return (
    <div className="contact-main-div" id="contact">
      <div className="contact-div">
        <div className="contact-img-div">
          <img src="images/mock-contact.png" alt="" className="contact-img" />
        </div>
        <div className="contact-details">
          <div className="contact-heading">
            <p>SEND MESSAGE</p>
            <h2>
              DROP <span> US A LINE</span>
            </h2>
          </div>
          <div className="contact-inputs">
          <form action="https://formsubmit.co/harih6176@gmail.com" method="POST" className="contact-form" >
              <div className="input-first">
                <input type="text" placeholder="Name"  name="Name" required/>
                <input type="text" placeholder="Company" className="Company"  name="Company"/>
              </div>
              <div className="second-input">
                <input type="email" placeholder="Email Address" className="Email" required  name="Email"/>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Phone Number"
                  pattern="[0-9]*"
                  maxLength={10}
                  name="Phone Number"
                  required
                />
              </div>
              <input
                type="text"
                name="Requirements"
                id=""
                placeholder="Requirements"
                className="contact-requirement"
              />
         <input type="hidden" name="_autoresponse" value="your custom message" />
              <input type="hidden" name="_autoresponse" value="your custom message" />
              <div className="contact-btn-div">
                <button className="contact-btn">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactss;
