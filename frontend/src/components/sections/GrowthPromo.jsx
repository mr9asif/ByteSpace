import courseCard from "../../assets/Course_Card_1.png";
import yellowShape from "../../assets/Frame (13).png";
import growthImage from "../../assets/Image (2).png";

const GrowthPromo = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 overflow-hidden bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* ================= LEFT CONTENT ================= */}
          <div className="w-full lg:flex-1 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5 sm:mb-6 leading-tight">
              Your Path to Professional
              <br className="hidden sm:block" />
              Growth Starts Here!
            </h2>

            <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 mb-8 sm:mb-10 max-w-lg mx-auto lg:mx-0">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            {/* ================= STATISTICS ================= */}
            <div className="flex items-center justify-center lg:justify-start gap-8 sm:gap-12">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">
                  12K
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">Students</p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">
                  70+
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">Courses</p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">
                  16
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">Creators</p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT VISUAL ================= */}
          <div
            className="
              w-full
              lg:flex-1
              relative
              min-h-[400px]
              sm:min-h-[480px]
              lg:min-h-[500px]
            "
          >
            {/* Soft Background */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-lime-100/70
                via-white
                to-blue-50
                rounded-[3rem]
              "
            />

            {/* ================= COURSE CARD ================= */}
            {/* Put this BEFORE profile image in the layer order */}
            <div
              className="
                absolute
                z-30
                left-1/2
                -translate-x-1/2
                top-[200px]
                sm:top-[230px]
                lg:left-4
                lg:translate-x-0
                lg:top-[65px]
                w-[180px]
                sm:w-[210px]
                lg:w-[220px]
              "
            >
              <img
                src={courseCard}
                alt="Course card"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* ================= YELLOW DECORATIVE SHAPE ================= */}
            <img
              src={yellowShape}
              alt=""
              className="
                absolute
                z-52
                w-20
                sm:w-24
                lg:w-28
                right-`
                sm:right-3
                lg:-right-[-60px]
                top-20
                sm:top-24
                lg:top-16
                object-contain
              "
            />

            {/* ================= MAIN PROFILE IMAGE ================= */}
            {/* z-40 = ABOVE COURSE CARD */}
            <div
              className="
                absolute
                z-40
                left-1/2
                -translate-x-1/2
                top-4
                sm:top-2
                lg:top-0
                w-[270px]
                sm:w-[360px]
                lg:w-[430px]
              "
            >
              <img
                src={growthImage}
                alt="Professional learning"
                className="
                  w-full
                  h-auto
                  object-contain
                "
              />
            </div>

            {/* ================= LEARNING PROGRESS ================= */}
            <div
              className="
                absolute
                z-50
                right-0
                sm:right-4
                lg:right-28
                bottom-20
                sm:bottom-16
                lg:bottom-68
                bg-white
                rounded-xl
                shadow-xl
                border
                border-gray-100
                p-4
                w-[150px]
                sm:w-[175px]
              "
            >
              <p className="text-[10px] sm:text-xs text-gray-500 mb-1">
                Learning Progress
              </p>

              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                55%
              </h3>

              <div className="w-full h-1.5 bg-gray-100 rounded-full mt-2 overflow-hidden">
                <div className="w-[55%] h-full bg-primary rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthPromo;
