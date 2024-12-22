import ImageSlider from "./ImageSlider";
import about1 from "../../assets/about1.jpg"
import about2 from "../../assets/about2.jpg"
import about3 from "../../assets/about3.jpg"
import about4 from "../../assets/about4.jpg"
import about5 from "../../assets/about5.jpg"
import about6 from "../../assets/about6.jpg"
import about7 from "../../assets/about7.jpg"
import about8 from "../../assets/about8.JPG"

const AboutTeam = () => {
  const slides = [
    {url: about7},
    {url: about6},
    {url: about8},
    {url: about1},
    {url: about2},
    {url: about3},
    {url: about4},
    {url: about5}
  ];
  const containerStyles = {
    width: "30rem",
    height: "10rem",
    margin: "0 auto",
  };
  return (
    <div id="about" className="overflow-x-hidden">
      <div>
        <div className="flex justify-center mt-16 mb-2 text-3xl text-white md:text-2xl sm:text-1xl font-meth component_title">
          About the Team
        </div>
        <div className="flex flex-row text-center justify-center m-5 mt-16 mb-16 font-light text-white lg:m-20 font-poppins align-items md:m-10 sm:m-5 sm:my-10">
          DJS Antariksh is the official Rover challenge team of Dwarkadas J.
          Sanghvi College of Engineering, Mumbai, India. It was founded in the
          year 2019-20. The team comprises 100+ passionate undergraduate students
          from various domains of engineering, working together to explore rover
          technologies. The team's motto, 'To Decipher Unimaginable', embodies
          its commitment to space exploration. Its vision is to expand the
          boundaries of innovation through the optimal utilization of
          technology, culminating in the creation of a cutting-edge Martian
          Rover. This advanced technology will serve as a catalyst, inspiring
          and fueling the spirit of space exploration.
        </div>
      </div>

      <section className="mb-40 events flex mr-5">
        <div className="justify-center md:mr-[34.5%] events-carousel w-[50%] h-[10rem] md:w-[35%] md:h-[20rem] m-auto">
          <ImageSlider slides={slides} />
        </div>
      </section>
    </div>
  );
};

export default AboutTeam;