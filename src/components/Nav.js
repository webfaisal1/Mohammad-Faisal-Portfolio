import React from "react";

// import navigation data
import { navigation } from "../data";

// import Link
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        <li className="text-white hover:text-accent cursor-pointer">
          <Link to="home" activeClass="active" spy={true} smooth={true} duration={500} offset={-70} className="transition-all duration-300">
            Home
          </Link>
        </li>
        <li className="text-white hover:text-accent cursor-pointer">
          <Link to="about" activeClass="active" spy={true} smooth={true} duration={500} offset={-70} className="transition-all duration-300">
            About
          </Link>
        </li>
        <li className="text-white hover:text-accent cursor-pointer">
          <Link to="portfolio" activeClass="active" spy={true} smooth={true} duration={500} offset={-70} className="transition-all duration-300">
            Portfolio
          </Link>
        </li>
        <li className="text-white hover:text-accent cursor-pointer">
          <Link to="services" activeClass="active" spy={true} smooth={true} duration={500} offset={-70} className="transition-all duration-300">
            Services
          </Link>
        </li>
        <li className="text-white hover:text-accent cursor-pointer">
          <Link to="testimonials" activeClass="active" spy={true} smooth={true} duration={500} offset={-70} className="transition-all duration-300">
          testimonials
          </Link>
        </li>
        <li className="text-white hover:text-accent cursor-pointer">
          <Link to="blog" activeClass="active" spy={true} smooth={true} duration={500} offset={-70} className="transition-all duration-300">
            Blog
          </Link>
        </li>
        <li className="text-white hover:text-accent cursor-pointer">
          <Link to="contact" activeClass="active" spy={true} smooth={true} duration={500} offset={-70} className="transition-all duration-300">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
