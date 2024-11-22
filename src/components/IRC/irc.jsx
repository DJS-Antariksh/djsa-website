import ImageSlider from "../AboutTeam/ImageSlider";

import Autex from "../../assets/Autex.jpeg";
import Abex from "../../assets/Abex.jpeg";
import abex1 from "../../assets/abex1.jpg";

import irc23 from "../../assets/irc-2023.jpg";
import outreach1 from "../../assets/outreach1.jpg"
import outreach2 from "../../assets/outreach2.jpg"

import task1 from "../../assets/1.jpg"
import task2 from "../../assets/2.jpg"
import task3 from "../../assets/3.jpg"

import "./irc.css";

// new change

const Irc = () => {
  const ircTasks = [{ url: abex1 }, { url: task2 },{ url: task1 }];
  const outreach = [{ url: outreach2 }, { url: irc23 }];

  return (
    <>
      <div className="mb-[5rem] flex justify-center mt-4 text-[9rem] font-bold text-white md:text-2xl sm:text-1xl font-meth component_title">
        International Rover Challenge - IRC
      </div>
      <div className="flex flex-row justify-center mt-4 mb-6 ml-8 mr-8 font-light text-white font-poppins align-items">
        The International Rover Challenge (IRC) is an annual competition held by
        Space Robotics Society (SPROS) for university teams all across the
        globe. It tests the Martian rover prototypes created by these teams by
        putting them through a variety of tasks carefully simulated to prepare
        them for real-world missions.
      </div>

      <div className="flex mt-8 overflow-hidden">
        <div className="w-1/3 ml-[5%]">
          <ImageSlider slides={ircTasks} />
        </div>
        <div className="w-2/3 ml-[5%]">
          <ul className="font-light text-white flex-column font-poppins align-items irc-task">
            <li>
              <h4 className="font-bold">Astrobiology Expedition</h4>
              <p className="text-sm">
                An astrobiological expedition task involves exploring
                extraterrestrial environments to search for signs of life or
                conditions conducive to life beyond Earth.
              </p>
            </li>
            <br />
            <li>
              <h4 className="font-bold">Autonomous Expedition</h4>
              <p className="text-sm">
                The autonomous expedition task involves deploying
                self-navigating systems to explore, navigate, and complete
                missions in various environments without human intervention.
              </p>
            </li>
            <br />
            <li>
              <h4 className="font-bold">
                Reconnaissance and Delivery Operation
              </h4>
              <p className="text-sm">
                Reconnaissance and delivery tasks encompass searching for items
                and transporting them to specific locations using unmanned
                systems or autonomous vehicles.
              </p>
            </li>
            <br />
            <li>
              <h4 className="font-bold">
                Instrument Deployment and Maintenance Operation
              </h4>
              <p className="text-sm">
                Instrument deployment and maintenance tasks entail placing and
                maintaining scientific equipment in designated locations for
                data collection and analysis.
              </p>
            </li>
            <br />
            <li>
              <h4 className="font-bold">
                Project Implementation Management Assessment
              </h4>
              <p className="text-sm">
                PIMA will have one-to-one interaction between the teams and the
                judges. The teams will have to give a presentation to the judges
                about their rover development.
              </p>
            </li>
            <br />
            <li>
              <h4 className="font-bold">Business and Partnership Plan</h4>
              <p className="text-sm">
                The objective of the BPP is to evaluate the team's ability to
                develop the business acumen of the team and encourage them to
                build partnerships with the industry and academia which aids
                them in the development of their project.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 overflow-hidden">
        <h4 className="flex justify-center text-white font-meth component_title align-items">
          Outreach
        </h4>
        <div className="flex mt-8 mb-16">
          <ul className="ml-[5%] mr-[5%] mt-[5%] text-white text-xl">
            <li>
              • Establishing the Indian Rover Community, successfully brought
              together rover teams across India for mutual support.
            </li>
            <li>
              • Recently, we unveiled our impressive Martian rover at our
              college, sharing our journey and inspiring newcomers while
              highlighting our team's achievements in the IRC.
            </li>
            <li>
              • Notably, our engaging #IRC2024 & #SPROS posts on social media
              garnered significant attention, maintaining an active global
              presence across major platforms. Personally, we advocate for peers
              to vote in the EU Registry web awards.
            </li>
            <li>
              • Media recognition in leading local and national newspapers has
              spotlighted our project and involvement in the International Rover
              Challenge, showcasing our team's remarkable accomplishments.
            </li>
            <li>
              • Additionally, we conducted multiple orientations throughout the
              year, informing students and the college's management about our
              team and the IRC.
            </li>
          </ul>
          <div className="w-3/4 mr-[7%] mb-[5%] h-[30rem]">
            <ImageSlider slides={outreach} />
          </div>
        </div>
      </div>

      {/* <div className="mt-8 mb-4">
        <h4 className="flex justify-center mt-32 text-white align-items font-meth component_title">
          International Rover Challenge Experience
        </h4>
        <div className="font-light text-white font-poppins align-items">
          <div class="flex justify-center flex-wrap">
            <img
              class="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg m-2"
              src={irc23}
              alt="irc23"
            ></img>
            <img
              class="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg m-2"
              src={irc23}
              alt="irc23"
            ></img>
            <img
              class="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg m-2"
              src={irc23}
              alt="irc23"
            ></img>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Irc;
