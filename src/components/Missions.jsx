import React from 'react';
import EachMission from './EachMission';

const Missions = () => {
  const missionData = [
    {
      title: 'A B E X ',
      description: `The rover will serve as a mobile science lab to investigate Martian-like sites for signs of extinct or extant life.The rover must be equipped with at least one instrument or assay capable of detecting life, chosen by the team. It will collect and analyze subsurface samples of at least 10g from depths of 10 cm or more.The rover must also document sites using wide-angle panoramas (1:3 height-to-width ratio) with GPS coordinates, elevation, and scale, alongside close-up, high-resolution images.The rover will drop this sample at a designated location for future retrieval during the Reconnaissance and Delivery Mission.`,
      imgSrc: '/abex.jpg',
      imagePosition: 'left'

    },
    {
      title: 'R D O',
      description: `The Reconnaissance and Delivery Operation (RDO) mission challenges the rover to locate, photograph, and document objects scattered within a 500m radius, using GPS for precise positioning. The mission consists of two stages: Reconnaissance, where the rover has 10 minutes to locate and document objects, optionally storing one, and Delivery, a 20-minute task to pick up and deliver objects like tools, containers, or rocks (up to 5 kg) to designated GPS coordinates or markers. The terrain includes sand, rocks, slopes, and boulders, with varying levels of difficulty. Teams are scored based on accuracy in locating, handling, and delivering objects within the time limit.`,
      imgSrc: '/abex.jpg',
      imagePosition: 'right'
    },
    {
      title: 'A U T E X',
      description: `In the autonomous mission, rovers will traverse moderately rugged terrain, navigating between markers using arrow signs (30 cm x 20 cm) on white backgrounds, elevated 10-50 cm above the ground. The arrows guide the rover to an endpoint marked by an orange traffic cone. Each arrow is within a 2m radius circle, where the rover must pause for 10 seconds with at least half its body inside the circle before proceeding. Hitting the arrow signs results in no points for that detection.  Teams must declare the start of autonomous mode to the judges, after which only telemetry and video monitoring are allowed, with no commands sent to the rover. The teams should document each arrow sign by collecting its GPS coordinates and the cardinal directions. The teams can collect other data during their autonomous expedition depending on their choice. Using the collected data teams have to prepare a map of the competition site.`,
      imgSrc: '/abex.jpg',
      imagePosition: 'left'

    },
    {
      title: 'I D M O',
      description: `The Instrument Deployment and Maintenance Operation (IDMO) mission involves precise tasks using the rover's robotic manipulators. It includes two stages: Instrument Maintenance, where the rover picks and places a cache, operates panels, interacts with switches, knobs, and plugs, and performs other fine operations; and Deployment, where the rover retrieves and places sample caches in designated patterns and reads codes from the panel for base station verification. Teams can complete sub-missions in any order, earning points for each successful task.`,
      imgSrc: '/abex.jpg',
      imagePosition: 'right'

    }
  ];

  return (
    <div className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col justify-center items-center gap-9">
        <div className="text-white text-4xl tracking-widest font-meth font-bold mb-[5%]">
          MISSIONS
        </div>

        <div className="space-y-16">
          {missionData.map((mission, index) => (
            <EachMission
              key={index}
              title={mission.title}
              description={mission.description}
              imgSrc={mission.imgSrc}
              imagePosition={mission.imagePosition}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Missions;