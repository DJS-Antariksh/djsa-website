import ImageSlider from "../AboutTeam/ImageSlider";

import Autex from "../../assets/Autex.jpeg";
import Abex from "../../assets/Abex.jpeg";
import "./irc.css";

const Irc = () => {
  const slides = [{ url: Autex }, { url: Abex }];

  return (
    <div className="flex h-[100vh] overflow-scroll">
      {/* Image Slider */}
      <div className="w-1/3 ml-[5%] h-[60vh] mt-24">
        <ImageSlider slides={slides} />
      </div>

      {/* Content */}
      <div className="w-2/3 ml-[5%] mt-8">
        <div>
          <div className="flex justify-center text-3xl font-bold text-white md:text-2xl sm:text-1xl font-meth component_title">
          International Rover Challenge - IRC
          </div>
          <div className="flex flex-row justify-center mt-4 font-light text-white font-poppins align-items">
            The International Rover Challenge (IRC) is an annual competition
            held by Space Robotics Society (SPROS) for university teams all
            across the globe. It tests the Martian rover prototypes created by
            these teams by putting them through a variety of tasks carefully
            simulated to prepare them for real-world missions.
          </div>
          <br/>
          <ul className="mt-2 font-light text-white list-disc flex-column font-poppins align-items irc-task">
            <li>
              <h4 className="font-bold">Astrobiology Expedition</h4>
              <p className="text-sm">An astrobiological expedition task involves exploring
              extraterrestrial environments to search for signs of life or
              conditions conducive to life beyond Earth.</p>
            </li>
            <br/>
            <li>
              <h4 className="font-bold">Autonomous Expedition</h4>
              <p className="text-sm">The autonomous expedition task involves deploying self-navigating
              systems to explore, navigate, and complete missions in various
              environments without human intervention.</p>
            </li>
            <br/>
            <li>
              <h4 className="font-bold">
                Reconnaissance and Delivery Operation
              </h4>
              <p className="text-sm">Reconnaissance and delivery tasks encompass searching for items
              and transporting them to specific locations using unmanned systems
              or autonomous vehicles.</p>
            </li>
            <br/>
            <li>
              <h4 className="font-bold">
                Instrument Deployment and Maintenance Operation
              </h4>
              <p className="text-sm">Instrument deployment and maintenance tasks entail placing and
              maintaining scientific equipment in designated locations for data
              collection and analysis.</p>
            </li>
            <br/>
            <li>
              <h4 className="font-bold">
                Project Implementation Management Assessment
              </h4>
              <p className="text-sm">PIMA will have one-to-one interaction between the teams and the
              judges. The teams will have to give a presentation to the judges
              about their rover development.</p>
            </li>
            <br/>
            <li>
              <h4 className="font-bold">
                Business and Partnership Plan
              </h4>
              <p className="text-sm">The objective of the BPP is to evaluate the team's ability to
              develop the business acumen of the team and encourage them to
              build partnerships with the industry and academia which aids them
              in the development of their project.</p>
            </li>
          </ul>
          <br/>
          <div className="mt-4 font-light text-white font-poppins align-items">
          <h4 className="font-meth component_title">Contribution</h4>
          <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias saepe ipsum, esse voluptatibus tenetur molestiae quaerat dicta illo unde laboriosam numquam dolor impedit porro reiciendis accusantium nesciunt praesentium, minus explicabo?</p></div>
        </div>
      </div>
    </div>
  );
};

export default Irc;
