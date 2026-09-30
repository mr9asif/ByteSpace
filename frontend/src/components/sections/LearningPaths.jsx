import logo1 from "../../assets/Frame (12).png";
import logo3 from "../../assets/Style=Outlined (1).png";
import logo4 from "../../assets/Style=Outlined.png";
import logo2 from "../../assets/Style=Round.png";

import SectionHeading from "../ui/SectionHeading";

const LearningPaths = () => {
  const paths = [
    {
      name: "Design",
      icon: logo1,
    },
    {
      name: "Development",
      icon: logo2,
    },
    {
      name: "IT & Software",
      icon: logo3,
    },
    {
      name: "Business",
      icon: logo4,
    },
    {
      name: "Marketing",
      icon: logo1,
    },
    {
      name: "Photography",
      icon: logo2,
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <SectionHeading
          title="Explore Diverse Learning Paths at Bytespace"
          subtitle="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />

        {/* Learning Paths */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {paths.map((path) => (
            <div
              key={path.name}
              className="
                flex flex-col
                items-center
                justify-center
                bg-white
                rounded-3xl
                p-6
                shadow-sm
                border border-gray-200
                hover:shadow-md
                transition-all
                duration-300
                cursor-pointer
                w-40
                h-40
                hover:-translate-y-1
              "
            >
              {/* Yellow/Lime Circular Icon Background */}
              <div
                className="
                  w-14
                  h-14
                  rounded-full
                  bg-[#C8FF00]
                  flex
                  items-center
                  justify-center
                  mb-4
                "
              >
                <img
                  src={path.icon}
                  alt={path.name}
                  className="w-7 h-7 object-contain"
                />
              </div>

              {/* Category Name */}
              <span className="font-medium text-gray-800 text-sm text-center">
                {path.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPaths;
