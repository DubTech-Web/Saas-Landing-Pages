export default function Features() {
  const features = [
    {
      title: "Collaboration Teams",
      description: "Here you can handle projects together with team virtually",
      image: "src/assets/images/Frame 247.png", // Replace with actual image path
    },
    {
      title: "Cloud Storage",
      description: "No need to worry about storage because we provide storage up to 2 TB",
      image: "src/assets/images/Group 183.png",
    },
    {
      title: "Daily Analytics",
      description: "We always provide useful information to make it easier for you every day",
      image: "src/assets/images/Frame 54.png",
    },
  ];
  return (
    <section className="bg-gradient-to-r from-pink-50 from-0% via-[#F9F9F9] to-white 
    mt-12 px-6 mb-20">
      {/* Header */}
      <div className="mx-7 md:grid grid-cols-3 mb-8 sm:flex flex-col">
        <h2 className="font-[Inter] text-[50px] leading-12 font-[700] text-[#191A15]">
          Our Features you can get
        </h2>

        <p className="text-[#A6A6A6] mt-2">
          We offer a variety of interesting features that help increase your
          productivity at work and manage your project easily.
        </p>
        
        <div className="text-center mt-6">
          <button className="bg-[#54BD95] text-[18px] text-white px-6 py-3 rounded-[70px] hover:bg-green-600">
            Get Started
          </button>
        </div>
      </div>

      {/* Feature Cards */}
      <div className=" flex flex-col md:grid grid-cols-3 gap-6 w-auto sm: gap-y-4 ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-6 text-center">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-full object-cover mb-5" />
              
              <h3 className="text-lg font-semibold mt-7 text-left">
              {feature.title}
            </h3>
            <p className="text-gray-600 mt-2 text-left">
              {feature.description}
            </p>
          </div>
        ))}
        
      </div>
    </section>
  );
}
