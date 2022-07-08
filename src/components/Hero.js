import React from "react";

// import woman image
import banner from "../assets/img/banner.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-16">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2200"
              className="text-lg text-orange-400 text-md mb-1"
            >
              Hey, I'm Faisal! 👋
            </p>
            <h1
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1900"
              className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]"
            >
              Junior Frontend <br /> Developer
            </h1>
            <p
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1600"
              className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left"
            >
              Passionate front-end web developer with 1 year of experience using
              JavaScript, HTML5, and CSS to build all aspects of the user
              experience and user interface for client-facing landing pages.
            </p>
            <button
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1300"
              className="btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all"
            >
              <a
                href="https://drive.google.com/file/d/15yE9Y1a6ZXT1iq6EXtLPdCicPXrNzTQD/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </button>
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="2000"
            className="hidden lg:flex flex-1 justify-end items-end h-full"
          >
            <img src={banner} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
