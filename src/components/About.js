import React from "react";
import { Link } from "react-scroll";

// import img
import aboutMe from "../assets/img/aboutMe.jpg";

const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div
        data-aos="zoom-in-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="container mx-auto"
      >
        <div className="flex flex-col items-center xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[400px] md:mx-auto lg:mx-0 rounded-2xl"
            src={aboutMe}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Mohammad Faisal
              </h2>
              <p className="mb-4 text-orange-300">
                Junior Frontend Web Developer
              </p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                Hello, I'm a Front End Developer near{" "}
                <a
                  href="https://www.linkedin.com/in/developer-build-b50b3a239/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="font-bold text-orange-400">
                    Developer Build
                  </span>
                </a>{" "}
                . I love structure and order and I also stand for quality. I
                love spending time on fixing little details and optimizing Code
                Link.
                <br />
                <br />
                Also I like working in a team, you'll learn faster and much
                more. As the saying goes, two heads are better than one.
              </p>
            </div>
            <button className="btn btn-md bg-accent hover:bg-secondary-hover transition-all">
              {/* <a href="#contact">Contact me</a> */}
              <Link
                to="contact"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}
                offset={-70}
                className="transition-all duration-300"
              >
                Contact Me
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
