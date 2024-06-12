import React, { Component } from 'react';
import "./About.css";
import profile_pic_name from "../assets/profile_pic_name.jpg";
export default class About extends Component {
  render() {
    return (
      <div>
        <p>
          <div>
          <div className="split left">
          <div className="centered">
          <img 
          className="profile_image"
          // Image goes here
          alt="Profile Pic"
          ></img>
          </div>
          </div>
          <div className="split right">
          <div className="centered">
          <div className="name_title">Colin Ngo</div>
          <div className="brief_description">
          // Hello! I am currently a rising 3rd-year student with a major in computer science at Cal Poly San Luis Obispo. I'm deeply passionate about helping others through the improvements in technology while discovering opportunities to grow personally. The interaction of computers and humans drives me to create personal projects, honing my problem-solving skills and coding expertise. I thrive on collaboration by working with like-minded individuals who share a common commitment to making a positive impact. My career interests lie in computer vision, machine learning, and AI. 

          I always look forward to connecting with you! Please reach out to me for any inquiries at cngo27@calpoly.edu
          </div>
          </div>
          </div>
          </div>
  
        </p> 
      </div>
    )
  }
}