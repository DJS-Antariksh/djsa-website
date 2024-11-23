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
      description: `RDO DESCRIPTION GOES HERE`,
      imgSrc: '/abex.jpg',
      imagePosition: 'right'
    },
    {
      title: 'A U T E X',
      description: `AUTEX DESCRIPTION GOES HERE`,
      imgSrc: '/abex.jpg',
      imagePosition: 'left'

    },
    {
      title: 'I D M O',
      description: `IDMO DESCRIPTION GOES HERE`,
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