import React from "react";

const Project = ({ item }) => {

  const {_id, image, category, name, liveSite, codeLink} = item


  return (
    <div
      data-aos="zoom-in-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      key={_id}
      className="flex flex-col items-center text-center"
    >
      <div className="mb-8">
        <img className="rounded-2xl" src={image} alt="" />
      </div>
      <p className="capitalize text-accent text-sm mb-3">{category}</p>
      <h3 className="text-2xl font-semibold capitalize mb-3">{name}</h3>

      <div class="flex space-x-40">
      

        <div>
        <a
            target="_blank"
            rel="noreferrer"
            href={liveSite}
            class="badge text-white py-2 px-2 rounded-md bg-orange-600 border-0 badge-outline"
          >
            Live Site
          </a>
        </div>
          

        
        <div>
        <a
            target="_blank"
            rel="noreferrer"
            href={codeLink}
            class="badge text-white py-2 px-2 rounded-md bg-orange-600 border-0 badge-outline"
          >
            Code Link
          </a>
        </div>

      </div>
    </div>
  );
};

export default Project;
