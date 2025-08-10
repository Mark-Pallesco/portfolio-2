export default function Experience() {
  const experiences = [
    {
      date: 'Nov 2023 - Present',
      title: 'Web Developer',
      description: 'I use WordPress and various website builders to create designs that are both visually appealing and user-friendly.',
    },
    {
      date: 'Oct 2023 - Nov 2023',
      title: 'Full Stack Web Developer',
      description: 'Developed an eCommerce platform using the MERN stack, integrating features for product management, user authentication, and secure payment processing to deliver a seamless online shopping experience.',
    },
    {
      date: 'March 2023 - June 2023',
      title: 'Web Developer (React.js) Intern',
      description: 'Collaborated with a team of developers and designers to create dynamic and responsive web applications using React.js, contributing to the enhancement of user experience and interface design',
    },
  ];

  return (
    <section id="experience" className="bg-slate-950 py-20">
      <div className="max-w-[1140px] mx-auto px-5 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-gray-400 uppercase tracking-widest font-medium text-sm">
            WORK EXPERIENCE
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2">
            EXPERIENCE THAT SHAPES MY WORK
          </h2>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-600 h-full"></div>

          {experiences.map((experience, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`mb-8 flex w-full ${isLeft ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`relative w-1/2 ${isLeft ? 'pr-16' : 'pl-16'}`}
                >
                  <div
                    className={`relative p-6 bg-[#333] border border-gray-600 rounded-lg shadow-lg text-white ${
                      isLeft ? 'text-right' : 'text-left'
                    }`}
                  >
                    <p className="text-sm text-yellow-400 mb-1">{experience.date}</p>
                    <h3 className="text-xl font-bold mb-1">{experience.title}</h3>

                    <div
                      className={`flex ${isLeft ? 'justify-end' : 'justify-start'}`}
                    >
                      <span className="text-gray-300">{experience.description}</span>
                    </div>

                    {/* Timeline dot */}
                    <div
                      className={`absolute top-1/2 w-6 h-6 bg-[#121212] border border-gray-600 rounded-full transform -translate-y-1/2 flex items-center justify-center ${
                        isLeft
                          ? 'right-0 translate-x-1/2'
                          : 'left-0 -translate-x-1/2'
                      }`}
                    >
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
