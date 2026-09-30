import { Search, Star } from "lucide-react";
import clone2 from "../../assets/Cone (1).png";
import clone from "../../assets/Cone.png";
import frame7 from "../../assets/Frame (7).png";
import maskGroup from "../../assets/Mask Group (1).png";
import whiteRing from "../../assets/Mask Group (2).png";
const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] pt-20 overflow-hidden bg-[#073BE8] text-white">
      {/* =========================
          BACKGROUND GRID
      ========================== */}
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
        }}
      />

      {/* =========================
          DECORATIVE LEFT SHAPE
      ========================== */}
      <div className="absolute  top-[190px] z-10 hidden md:block">
        <img src={maskGroup} alt="mask" />
      </div>

      {/* =========================
          LEFT WHITE RING
      ========================== */}
      <div className="absolute -left-12 bottom-[20px] z-10 hidden lg:block">
        <img src={whiteRing} alt="" />
      </div>

      {/* =========================
          LEFT WHITE SQUIGGLE
      ========================== */}
      <div className="absolute left-[15%] top-[470px] z-10 hidden md:block">
        <img src={frame7} alt="" />
      </div>

      {/* =========================
          RIGHT LIME SHAPE
      ========================== */}
      <div className="absolute -right-8 top-[210px] z-10 hidden md:block">
        <img src={clone} alt="" />
      </div>

      {/* =========================
          RIGHT WHITE TRIANGLE
      ========================== */}
      <div className="absolute right-[13%] top-[480px] z-10 hidden lg:block">
        <img src={clone2} alt="" />
      </div>

      {/* =========================
          RIGHT WHITE SQUIGGLE
      ========================== */}
      <div className="absolute right-[2%]  bottom-[20px] z-10 hidden md:block">
        <img src={frame7} width={300} alt="" />
      </div>

      {/* =========================
          MAIN CONTENT
      ========================== */}
      <div className="relative z-20 mx-auto flex min-h-[calc(100vh-80px)] max-w-[1500px] flex-col items-center px-5 pt-14 md:pt-16">
        {/* Heading */}
        <div className="max-w-[950px] text-center">
          <h1 className="text-5xl font-bold leading-[1.02] tracking-[-2px] sm:text-6xl md:text-7xl lg:text-[70px]">
            Get Access to Hundreds
            <br />
            Courses Available
          </h1>

          <p className="mx-auto mt-10 max-w-[850px] text-sm leading-6 text-white/90 sm:text-base">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>
        </div>

        {/* =========================
            SEARCH
        ========================== */}
        <div className="mt-12 flex w-full max-w-[580px] items-center rounded-full bg-white p-1.5 shadow-xl">
          <div className="flex flex-1 items-center gap-3 px-4">
            <Search
              size={22}
              strokeWidth={2}
              className="shrink-0 text-gray-400"
            />

            <input
              type="text"
              placeholder="Course, topic, creator"
              className="w-full bg-transparent py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400 sm:text-base"
            />
          </div>

          <button
            type="button"
            className="rounded-full bg-[#D9FF00] px-7 py-3 text-sm font-medium text-black transition hover:bg-[#c8ed00] sm:px-8"
          >
            Search
          </button>
        </div>

        {/* =========================
            HERO VISUAL AREA
        ========================== */}
        <div className="relative mt-12 h-[470px] w-full max-w-[1100px] sm:h-[520px]">
          {/* Lime Green Circle */}
          <div className="absolute bottom-[-240px] left-1/2 h-[620px] w-[850px] -translate-x-1/2 rounded-[50%] bg-[#D9FF00] sm:h-[700px] sm:w-[1000px]" />

          {/* =========================
              PERSON IMAGE
          ========================== */}
          <div className="absolute bottom-[-5px] left-1/2 z-10 h-[430px] w-[330px] -translate-x-1/2 overflow-hidden sm:h-[500px] sm:w-[390px]">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=700&q=90"
              alt="Student"
              className="h-full w-full object-cover object-top"
            />

            {/* Soft fade at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#D9FF00] to-transparent" />
          </div>

          {/* =========================
              UI/UX CARD
          ========================== */}
          <div className="absolute left-[5%] top-[130px] z-30 rounded-xl bg-white px-4 py-4 text-gray-900 shadow-lg sm:left-[8%] sm:px-5">
            <p className="text-sm font-medium">UI/UX Design</p>

            <p className="mt-1 text-xs text-gray-400">
              200 Courses&nbsp;&nbsp;•&nbsp;&nbsp;1000+ Students
            </p>
          </div>

          {/* =========================
              LEARNING PROGRESS
          ========================== */}
          <div className="absolute right-[3%] top-[150px] z-30 w-[200px] rounded-xl bg-white px-5 py-4 text-gray-900 shadow-lg sm:right-[8%]">
            <p className="text-sm text-gray-500">Learning Progress</p>

            <p className="mt-1 text-4xl font-semibold">55%</p>

            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-200">
              <div className="h-full w-[55%] rounded-full bg-[#D9FF00]" />
            </div>
          </div>

          {/* =========================
              HAPPY STUDENTS
          ========================== */}
          <div className="absolute bottom-[35px] left-[2%] z-30 rounded-xl bg-white px-4 py-4 text-gray-900 shadow-lg sm:left-[10%] sm:px-5">
            <p className="text-sm font-medium">Happy Students</p>

            <div className="flex items-center gap-1">
              <span className="text-xs text-gray-500">4.5</span>
              <Star size={12} fill="#D9FF00" className="text-[#D9FF00]" />
              <span className="text-xs text-gray-400">(240)</span>
            </div>

            {/* Student avatars */}
            <div className="mt-3 flex items-center">
              {[
                "https://i.pravatar.cc/80?img=11",
                "https://i.pravatar.cc/80?img=12",
                "https://i.pravatar.cc/80?img=13",
                "https://i.pravatar.cc/80?img=14",
                "https://i.pravatar.cc/80?img=15",
              ].map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt=""
                  className="-ml-2 h-8 w-8 rounded-full border-2 border-white object-cover first:ml-0"
                />
              ))}

              <div className="-ml-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#D9FF00] text-[10px] font-semibold text-black">
                2K+
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
