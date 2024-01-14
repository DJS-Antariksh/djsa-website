import ImageSlider from "../AboutTeam/ImageSlider";

import about4 from "../../assets/about4.jpg";
import about5 from "../../assets/about5.jpg";

const Irc = () => {
  const slides = [
    { url: about4 },
    
  ];

  return (
    <div id="about" className="overflow-x-hidden flex h-[60vh]">
      {/* Image Slider */}
      <div className="w-1/3 ml-[10%] h-[40vh]">
        <ImageSlider slides={slides} />
      </div>

      {/* Content */}
      <div className="w-1/2 ml-[5%]">
        <div>
          <div className="flex justify-center mt-16 mb-2 text-3xl text-white md:text-2xl sm:text-1xl font-meth component_title">
            IRC
          </div>
          <div className="flex flex-row justify-center m-5 mt-16  font-light text-white lg:m-20 font-poppins align-items md:m-10 sm:m-5 sm:my-10">
            DJS Antariksh is the official Rover challenge team of Dwarkadas J.
            Sanghvi College of Engineering, Mumbai, India. It was founded in the
            year 2019-20. The team comprises 100+ passionate undergraduate
            students from various domains of engineering, working together to
            explore rover technologies. The team's motto, 'To Decipher
            Unimaginable', embodies its commitment to space exploration. Its
            vision is to expand the boundaries of innovation through the
            optimal utilization of technology, culminating in the creation of a
            cutting-edge Martian Rover. This advanced technology will serve as
            a catalyst, inspiring and fueling the spirit of space exploration.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Irc;
