export default function Portfolio() {
  const projects = [
    {
      id: 1,
      image: "https://markpallesco.kesug.com/wp-content/uploads/2025/05/undefined-4.png",
    },
    {
      id: 2,
      image: "https://markpallesco.kesug.com/wp-content/uploads/2025/05/undefined-1.png",
    },
    {
      id: 3,
      image: "https://markpallesco.kesug.com/wp-content/uploads/2025/05/undefined-3.png",
    },
    {
      id: 4,
      image: "https://markpallesco.kesug.com/wp-content/uploads/2025/05/Home-LJI-Advisory-Group.png",
    },
    {
      id: 5,
      image: "https://markpallesco.kesug.com/wp-content/uploads/2025/05/undefined.png",
    },
    {
      id: 6,
      image: "https://markpallesco.kesug.com/wp-content/uploads/2025/05/Family-Lawyers-Melbourne-_-Tonkin-Legal-Group.png",
    },
  ];

  return (
    <section id="portfolio" className="bg-white py-20 px-5 lg:px-10">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-16">
          <div className="lg:w-1/2">
            <p className="text-green-700 uppercase tracking-widest font-medium">Portfolio</p>
            <h2 className="text-4xl font-bold uppercase text-gray-900 leading-tight">
              My Recent Work
            </h2>
          </div>
          <div className="lg:w-1/2 text-gray-500">
            <p className="mb-4 text-slate-950">
              Some of my recent projects are under NDA. Here’s a quick preview of a few
              works, with permission to display the visuals only.
            </p>
            <a
              href="mailto:angelomark31@gmail.com"
              className="bg-customGreen text-white mt-4 py-3 px-6 rounded-md font-montserrat text-center inline-block hover:bg-green-800 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ id, image }) => (
            <div
              key={id}
              className="group relative block rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-200"
            >
              <div className="relative w-full h-60 overflow-hidden rounded-t-xl">
                <img
                  src={image}
                  alt="Project under NDA"
                  loading="lazy"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white text-2xl font-bold uppercase tracking-wide">
                    NDA
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
