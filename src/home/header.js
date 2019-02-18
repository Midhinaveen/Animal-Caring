import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
class Header extends Component {
    render() {
        return (
          <div>
          <nav className="navbar navbar-light navbar-expand-lg fixed-top nav-clr ">
              <div className="container">
                  <a className="navbar-brand d-lg-none" href="index.html">Adoption</a>

                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">

                      <ul className="navbar-nav mr-auto">
                          <li className="nav-item">
                              <a className="nav-link" href="about-us.html">About Us</a>
                          </li>
                          <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="http://example.com" id="nav-item__menu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  Menu
                      </a>
                       </li>
                      </ul>

                      <a className="navbar-brand d-none d-lg-flex" href="index.html">
                          Adoption
              </a>
                      <ul className="navbar-nav ml-auto">
                          <li className="nav-item">
                              <a className="nav-link" href="news-and-events.html">News &amp; Events</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="gallery.html">Gallery</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="contact-us.html">Contact</a>
                          </li>
                      </ul>

                  </div>

              </div>
          </nav>

      </div>
                )
    }
}
export default Header;