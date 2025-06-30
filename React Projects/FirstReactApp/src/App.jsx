import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="header">
        <div className="wrapper">
          <div className="logo">
            <img src="travele-logo-main.png" alt="Travele Logo" />
          </div>
          <div className="navigation-menu">
            <ul>
              <li>Home</li>
              <li>Tour</li>
              <li>Packages</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <button className="primary-button">Book Now</button>
        </div>
      </div>
      <div className="hero-section splide splide">
        <div className="splide__track">
          <div className="splide__list">
            <div
              className="slider splide__slide"
              //   style="
              //   background: linear-gradient(#00000060, #00000060),
              //     url('slider-banner-1.jpg');
              // "
            >
              <div className="content">
                <h1 className="animate__animated animate__backInUp">
                  Experience the
                  <br />
                  nature's beauty
                </h1>
                <p className="animate__animated animate__slideInRight">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
                  adipisci necessitatibus doloribus voluptate saepe cupiditate
                  aperiam. Laudantium hic adipisci explicabo obcaecati tenetur
                  cum veniam cumque.
                </p>
                <button className="primary-button animate__animated animate__zoomInRight">
                  Continue Reading
                </button>
              </div>
            </div>
            <div
              className="slider splide__slide"
              //   style="
              //   background: linear-gradient(#00000060, #00000060),
              //     url('slider-banner-2.jpg');
              // "
            >
              <div className="content">
                <h1 className="animate__animated animate__backInUp">
                  Travelling Around
                  <br />
                  The World
                </h1>
                <p className="animate__animated animate__slideInRight">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
                  adipisci necessitatibus doloribus voluptate saepe cupiditate
                  aperiam. Laudantium hic adipisci explicabo obcaecati tenetur
                  cum veniam cumque.
                </p>
                <button className="primary-button animate__animated animate__zoomInRight">
                  Continue Reading
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="highlights">
        <div className="highlight-image">
          <img src="slider-banner-1.jpg" alt="" srcSet="" />
        </div>
        <div className="highlight-content">
          <div className="inline">
            <div className="line"></div>
            Callback for more
          </div>
          <h2>Go travel. Discover. Remember us!!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            deserunt quae dolorum explicabo aperiam facere?
          </p>
          <div className="grid-area">
            <div className="grid-line horizontal"></div>
            <div className="grid-line vertical"></div>
            <div className="grid-item">
              <img src="icons/icon1.png" alt="Icon 1" />
              <div className="values">
                <span>500K+</span> Satisfied Clients
              </div>
            </div>
            <div className="grid-item">
              <img src="icons/icon2.png" alt="Icon 2" />
              <div className="values">
                <span>250K+</span> Satisfied Clients
              </div>
            </div>
            <div className="grid-item">
              <img src="icons/icon3.png" alt="Icon 3" />
              <div className="values">
                <span>15K+</span> Satisfied Clients
              </div>
            </div>
            <div className="grid-item">
              <img src="icons/icon4.png" alt="Icon 4" />
              <div className="values">
                <span>10K+</span> Satisfied Clients
              </div>
            </div>
          </div>
          <div className="call-to-action">
            <img src="icons/icon5.png" alt="" />
            <div>
              <p>Our 24/7 Emergency Phone Services</p>
              <a href="">Call: 123-456-7890</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-content">
          <div className="navigation-menu">
            <ul>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="logo">
            <img src="travele-logo.png" alt="Travele Logo" />
          </div>
          <p>Copyright © 2025 Travele. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default App;
