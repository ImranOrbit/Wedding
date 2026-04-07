import About from "../images/about.png"; // image import

const AboutSection = () => {
  return (
    <section className="w-full min-h-screen bg-[#f4f1ea] flex flex-col lg:flex-row">
      {/* Left Image */}
      <div className="lg:w-1/2 w-full h-[300px] sm:h-[400px] lg:h-auto">
        <img
          src={About}
          alt="Meridian Grand"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="lg:w-1/2 w-full flex items-center justify-center px-6 sm:px-10 lg:px-16 py-10 lg:py-0">
        <div className="max-w-xl">
          <p className="text-sm tracking-widest text-[#b49a5a] mb-4 uppercase">
            About Us
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-6">
            Welcome to <br /> Meridian Grand
          </h1>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
            Meridian Grand is a luxury Wedding and Reception Venue in North
            London. We are unique because we know that each event will only
            happen once in a lifetime – and so we do everything possible to
            ensure perfection for your special day.
          </p>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
            We truly care about our clients and always go the extra mile for
            each and every bride, groom, family and client who comes through our
            doors.
          </p>

          <button className="bg-[#b49a5a] hover:bg-[#9d874e] text-white px-6 py-3 text-sm tracking-wide uppercase transition duration-300">
            About Us →
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;