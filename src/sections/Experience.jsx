

export default function Experience() {
  const experiences = [
    {
      date: '2024 - Present',
      title: 'LOREM IPSUM DOLOR',
      position: 'CEO',
      description: 'Lorem ipsum dolor sit amet, consectetur.',
    },
    {
      date: '2024 - Present',
      title: 'LOREM IPSUM DOLOR',
      position: 'CEO',
      description: 'Lorem ipsum dolor sit amet, consectetur.',
    },
    {
      date: '2024 - Present',
      title: 'LOREM IPSUM DOLOR',
      position: 'CEO',
      description: 'Lorem ipsum dolor sit amet, consectetur.',
    },
    {
      date: '2024 - Present',
      title: 'LOREM IPSUM DOLOR',
      position: 'CEO',
      description: 'Lorem ipsum dolor sit amet, consectetur.',
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
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-600 h-full"></div>
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`mb-8 flex items-center w-full ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              {index % 2 === 0 && (
                <div className="relative w-1/2 pr-16 text-right">
                  <div className="relative p-6 bg-[#333] border border-gray-600 rounded-lg shadow-lg text-white">
                    <p className="text-sm text-yellow-400 mb-1">{experience.date}</p>
                    <h3 className="text-xl font-bold mb-1">{experience.title}</h3>
                    <p className="text-sm mb-4">{experience.position}</p>
                    <ul>
                      <li className="flex items-center mb-2">
                        <svg
                          className="w-4 h-4 mr-2 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-gray-300">{experience.description}</span>
                      </li>
                      <li className="flex items-center mb-2">
                        <svg
                          className="w-4 h-4 mr-2 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-gray-300">{experience.description}</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-gray-300">{experience.description}</span>
                      </li>
                    </ul>
                    <div className="absolute top-1/2 right-0 w-6 h-6 bg-[#121212] border border-gray-600 rounded-full transform translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              )}
              {index % 2 !== 0 && (
                <div className="relative w-1/2 pl-16">
                  <div className="relative p-6 bg-[#333] border border-gray-600 rounded-lg shadow-lg text-white">
                    <p className="text-sm text-yellow-400 mb-1">{experience.date}</p>
                    <h3 className="text-xl font-bold mb-1">{experience.title}</h3>
                    <p className="text-sm mb-4">{experience.position}</p>
                    <ul>
                      <li className="flex items-center mb-2">
                        <svg
                          className="w-4 h-4 mr-2 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-gray-300">{experience.description}</span>
                      </li>
                      <li className="flex items-center mb-2">
                        <svg
                          className="w-4 h-4 mr-2 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-gray-300">{experience.description}</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-gray-300">{experience.description}</span>
                      </li>
                    </ul>
                    <div className="absolute top-1/2 left-0 w-6 h-6 bg-[#121212] border border-gray-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}