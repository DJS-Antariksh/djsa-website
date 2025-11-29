import React from 'react';
import EachMission from '../EachMission';

const Missions = () => {
  const missionData = [
    {
      title: 'A B E X ',
      description: `The rover will serve as a mobile science lab to investigate Mars analog environments for signs of extinct or extant life. The rover must be equipped with at least one instrument or assay capable of detecting life, chosen by the team. It will collect and analyze subsurface samples of at least 10g from depths of 10 cm or more from multiple sites. The rover must also document sites using wide-angle panoramas (1:3 height-to-width ratio) with GPS coordinates, elevation, cardinal directions, and scale, alongside close-up, high-resolution images. The rover will drop a sample at a designated location for future retrieval during the Reconnaissance and Autonomous  Delivery Mission.`,
      imgSrc: '/abex2.jpg',
      imagePosition: 'left'

    },
    {
      title: 'R A D O',
      description: `The Reconnaissance and Autonomous Delivery Operation (RADO)  mission requires the  rover to operate across varied terrain where in the first stage, the rover performs reconnaissance for 10 minutes, searching for objects, capturing their photos and GPS coordinates, and optionally storing one of them. The second stage is a 20 minute autonomous delivery task where the rover must pick up and deliver objects such as tools, containers, or rocks to specified GPS points and  colour markers. Teams are evaluated on their ability to correctly locate, store, and deliver objects and the accuracy of placement within the allotted time.`,
      imgSrc: '/tasks/RADO.jpg',
      imagePosition: 'right'
    },
    {
      title: 'I D M O',
      description: `The Instrument Deployment and Maintenance Operation (IDMO) mission involves precise tasks using the rover's robotic arm. It includes two stages: Instrument Maintenance, where the rover picks and places a cache, operates panels, interacts with switches, knobs, joysticks, and plugs, and performs other fine operations; and Instrument Deployment, where the rover retrieves and places sample caches in designated locations near collection panel and reads codes, patterns or text displayed near the panel for verification by judges.`,
      imgSrc: '/tasks/IDMO.JPG',
      imagePosition: 'left'

    },
    {
      title: <>B P P <span className="font-[Calibri] text-[22px]">&</span> P I M A</>,
      description: `The Business and Partnership Plan (BPP) mission examines the ability of a team to develop business skills, build partnerships, and secure sponsorships. It emphasises effective planning, communication, and teamwork with industry and academia to help ensure the project’s long-term success. The Project Implementation and Management Assessment (PIMA) evaluates the project and the final rover design through direct interaction between teams and judges. Teams present their development process, addressing important engineering and management elements, from strategic planning to manufacturing, testing, and spin-offs from the project. `,
      imgSrc: '/tasks/BPP.jpg',
      imagePosition: 'right',
      customStyle: 'pl-12'

    },
    {
      title: 'E X H I B I T I O N',
      description: `The Rover Exhibition facilitates interaction between teams, judges, and the local academia fostering interest and inspiring students. Teams showcase the capabilities of their rovers through standee flex banners, helping cultivate professional connections that support future collaboration. The exhibition also aims to motivate young individuals to explore the fields of science and robotics by highlighting their significance and relevance in today's world.`,
      imgSrc: '/tasks/EXHIBITION.jpg',
      imagePosition: 'left'

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
              customStyle={mission.customStyle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Missions;