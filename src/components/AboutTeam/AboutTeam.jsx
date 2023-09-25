import ImageSlider from "./ImageSlider";

const AboutTeam = () => {
  const slides = [
    {
      url: "https://th.bing.com/th/id/R.7cdf60c7cd8b2b14995694dcd7c99e06?rik=3obl%2fhI6QdNIMA&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2ffree-beautiful-place-wallpaper-hd-173.jpg&ehk=92RRpT4hrYheMDBZkK0HhLLXx9%2fGDjnafeDmbgjE1K8%3d&risl=1&pid=ImgRaw&r=0",
    },
    {
      url: "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    },
    {
      url: "https://th.bing.com/th/id/OIP.ts14J2Z7Q8DYNohIc6ndJQAAAA?pid=ImgDet&w=450&h=311&rs=1",
    },
    { url: "https://wallpapercave.com/wp/wp3386769.jpg" },
    { url: "https://wallpaperaccess.com/full/809523.jpg" },
    { url: "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <>
      <div>
        <div className="flex justify-center mt-16 mb-2 text-3xl text-white font-meth">
          About the Team
        </div>
        <div className="text-white font-poppins font-light  flex flex-row align-items justify-center m-40 mt-16 mb-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nulla
          atque quibusdam fuga delectus dolor animi vel voluptates iure magnam
          fugiat nobis non, quaerat, ea totam accusamus ducimus nemo unde. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Adipisci ad dolorum
          magni? Ullam quas sequi ab totam nihil? Inventore earum dolor quo
          commodi consequatur temporibus ratione blanditiis sed officiis quis?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum dolorum,
          eveniet beatae nisi quisquam asperiores ratione labore illo incidunt,
          cupiditate voluptatem aliquid ullam facilis adipisci magnam culpa
          laboriosam vel recusandae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et laboriosam qui dolores beatae fuga eligendi, cumque quam sequi quos unde possimus recusandae consequatur pariatur, praesentium aperiam quas repellat quae ipsa.
        </div>
      </div>

      <section className="events mb-40">
        <div className="events-carousel " style={containerStyles}>
          <ImageSlider slides={slides} />
        </div>
      </section>
    </>
  );
};

export default AboutTeam;
