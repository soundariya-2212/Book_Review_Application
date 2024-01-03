import React from 'react';
import '../assets/Css/About.css';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'; // Import lucide icons
// import Sidebar from './components/Sidebar.js';
function About() {
  return (
    <>
      <div className="about">
        <h1 className="ab">About The Millions</h1>
      </div>
      <div className="para">
        <p>
          Welcome to The Millions, an online publication devoted to books, arts, and culture. Founded by C. Max Magee in
          2003, The Millions began as part of the early wave of “book blogs” but soon evolved into a thriving online
          magazine. We publish reviews, essays, and interviews, as well as our biannual Great Book Previews and annual
          Year in Reading series. At a time when literary publications and discourse are in peril, The Millions remains
          committed to publishing thoughtful and thought-provoking writing about books, arts, and culture in its many
          guises.
        </p>
      </div>
      <div className="edit">
        <h3>Editor</h3>
      </div>
      <div className="name">
        <p>Sophia Stewart</p>
      </div>
      <div className="web">
        <h3>Web Manager</h3>
      </div>
      <div className="name1">
        <p>Dani Fishman</p>
      </div>
      <div className="intern">
        <h3>Intern</h3>
      </div>
      <div className="name2">
        <p>Liv Albright</p>
      </div>
      <div className="footer">
        <footer class="footer">
          <div class="container">
            <div class="row">
              <div class="footer-col">
                <h4>company</h4>
                <ul>
                  <li>
                    <Link to="#">about us</Link>
                  </li>
                  <li>
                    <Link to="#">our services</Link>
                  </li>
                  <li>
                    <Link to="#">privacy policy</Link>
                  </li>
                  <li>
                    <Link to="#">affiliate program</Link>
                  </li>
                </ul>
              </div>
              <div class="footer-col">
                <h4>get help</h4>
                <ul>
                  <li>
                    <Link to="#">FAQ</Link>
                  </li>
                  <li>
                    <Link to="#">shipping</Link>
                  </li>
                  <li>
                    <Link to="#">returns</Link>
                  </li>
                  <li>
                    <Link to="#">order status</Link>
                  </li>
                  <li>
                    <Link to="#">payment options</Link>
                  </li>
                </ul>
              </div>
              <div class="footer-col">
                <h4>Book Types</h4>
                <ul>
                  <li>
                    <Link to="#">Friction</Link>
                  </li>
                  <li>
                    <Link to="#">Humor</Link>
                  </li>
                  <li>
                    <Link to="#">Non-Fiction</Link>
                  </li>
                  <li>
                    <Link to="#">Romance</Link>
                  </li>
                </ul>
              </div>
              <div class="footer-col">
                <h4>follow us</h4>
                <div class="social-links">
                  <Link to="/">
                    <Facebook size={24} />
                  </Link>
                  <Link to="/">
                    <Twitter size={24} />
                  </Link>
                  <Link to="/">
                    <Instagram size={24} />
                  </Link>
                  <Link to="/">
                    <Linkedin size={24} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default About;
