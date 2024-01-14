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
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Irc;
