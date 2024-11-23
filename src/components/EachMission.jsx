import React from 'react';

const EachMission = ({ title, description, imgSrc, imagePosition }) => {
  return (
    <div className="w-full mb-12">
      <div className={`flex ${imagePosition === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-[5%] justify-items-center`}>
        <div className="w-full md:w-1/3">
          <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
            <img
              src={imgSrc}
              alt={`${title} mission`}
              className={`w-[80%] h-[80%] object-cover transform hover:scale-105 transition-transform duration-300`}
            />
          </div>
        </div>

        <div className="w-full md:w-2/3 space-y-4 flex flex-col items-center">
          <h2 className="text-white font-meth text-3xl font-semibold tracking-wide">
            {title}
          </h2>
          
          <p className="text-gray-300 font-poppins text-xl leading-relaxed text-justify">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EachMission;