import Header from "../Components/Header";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "The Sales Machine",
      image:
        "https://markpallesco.kesug.com/wp-content/uploads/2025/05/undefined-4.png",
      url: "https://thesalesmachine.com/",
    },
    {
      id: 2,
      title: "Vegishake",
      image:
        "https://markpallesco.kesug.com/wp-content/uploads/2025/05/undefined-1.png",
      url: "https://www.vegishake.co.uk/",
    },
    {
      id: 3,
      title: "CleverPays",
      image:
        "https://markpallesco.kesug.com/wp-content/uploads/2025/05/undefined-3.png",
      url: "https://cleverpays.ca/",
    },
    {
      id: 4,
      title: "LJI Advisory Group",
      image:
        "https://markpallesco.kesug.com/wp-content/uploads/2025/05/Home-LJI-Advisory-Group.png",
      url: "https://ljiadvisorygroup.com.au/",
    },
    {
      id: 5,
      title: "Mike Sarraille",
      image:
        "https://markpallesco.kesug.com/wp-content/uploads/2025/05/undefined.png",
      url: "https://mikesarraille.com/",
    },
    {
      id: 6,
      title: "Tonkin Law",
      image:
        "https://markpallesco.kesug.com/wp-content/uploads/2025/05/Family-Lawyers-Melbourne-_-Tonkin-Legal-Group.png",
      url: "https://www.tonkinlaw.com/",
    },
  ];

  return (
    <>
     <Header />
    <section id="projects" className="bg-white py-36 px-5 lg:px-10">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
          <div className="mb-8 lg:mb-0 lg:w-1/2">
            <p className="text-green-700 uppercase tracking-widest font-medium">
              PROJECTS
            </p>
            <h2 className="text-4xl font-bold uppercase text-gray-900 leading-tight">
              My Portfolio Work
            </h2>
          </div>
          <div className="lg:w-1/2 lg:pl-10 text-gray-500">
            <p className="mb-4 text-slate-950">
              This is a collection of client projects I’ve built using WordPress, Webflow,
              and other CMS platforms. Each site focuses on clean design,
              performance, and user experience.
            </p>
            <a
              href="mailto:angelomark31@gmail.com"
              className="bg-customGreen text-white mt-2 w-full sm:w-1/2 lg:w-1/4 py-3 px-6 rounded-md font-montserrat text-center"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ id, title, image, url }) => (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
            >
              <div className="relative w-full h-60 overflow-hidden rounded-t-xl">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex justify-between items-center bg-white rounded-b-xl">
                <h3 className="text-xl font-bold text-customGreen">{title}</h3>
                <div className="w-10 h-10 rounded-full border border-customGreen flex items-center justify-center text-customGreen group-hover:text-white group-hover:bg-customGreen transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
    
    </>
    
  );
}
