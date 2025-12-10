import Header from "../Components/Header";

export default function Projects() {
  const projectGroups = [
    {
      platform: "Keynote Speaker",
      projects: [
        { name: "Mike Sarraille", url: "https://mikesarraille.com/" },
        { name: "Book Joel Steele", url: "https://bookjoelsteele.com/" },
        { name: "Dr. Reza Zahedi", url: "https://drrezazahedi.com/" },
        { name: "Jason Milen", url: "https://jasonmilen.com" },
        { name: "Gilbert", url: "https://gilbert.com/" },
        { name: "Call Me Boo", url: "https://callmeboo.com/" },
        { name: "Stephen J. Dietrich", url: "https://stephenjdietrich.com/home-v2/" },
      ],
    },

    {
      platform: "WordPress Projects",
      projects: [
        { name: "Vegishake", url: "https://www.vegishake.co.uk/" },
        { name: "Industry Leadr", url: "https://industryleadr.com/" },
        { name: "Seventeahouse", url: "https://seventeahouse.com/" },
        { name: "Terraxy", url: "https://terraxy.com/" },
        { name: "Made Creative Co", url: "https://madecreativeco.com.au/" },
        { name: "Rise Up London", url: "https://riseuplondon.com/" },
        { name: "Go Tours Hawaii", url: "https://gotourshawaii.com/" },
        { name: "UDO Systems", url: "https://udosystems.com/" },
        { name: "Northbase PCS", url: "https://pcs.northbase.io/" },
        { name: "D55", url: "https://d55.fe4.myftpupload.com/" },
        { name: "CleverPays", url: "https://cleverpays.ca/" },
        { name: "Canadian Cigarettes", url: "https://canadiancigarettes.co/" },
        { name: "UrbanScape SEO", url: "https://urbanscapeseo.com/" },
        { name: "EcomXF", url: "https://ecomxf.com/" },
        { name: "Michael Meyer Law (LP)", url: "https://lp.michaelmeyerlaw.com/" },
        { name: "Kandy Kingdom", url: "https://kandykingdom.com.au/" },
        { name: "Amritsari Chatore", url: "https://amritsarichatore.ca/" },
        { name: "Tonkin Law", url: "https://www.tonkinlaw.com/" },
        { name: "Dev Wigs", url: "https://www.devwigs.com/" },
        { name: "LJI Advisory Group", url: "https://ljiadvisorygroup.com.au/" },
        { name: "Impact USA Advisory", url: "https://impactusadvisory.com/" },
        { name: "Industry LeadR", url: "https://industryleadr.com/" },
      ],
    },

    {
      platform: "Webflow Projects",
      projects: [
        { name: "Urbanavas", url: "https://urbanavas-v2.webflow.io/" },
        { name: "Circle Properties", url: "https://www.circleprop.ca/" },
        { name: "PowerSync", url: "https://powersync-com-au.webflow.io/" },
        { name: "Artbook", url: "https://artbook-f9247d.webflow.io/" },
        { name: "Hans", url: "https://hans-cb88e8.webflow.io/" },
        { name: "Shoe Care", url: "https://shoe-care-0.webflow.io/" },
        { name: "Bloem", url: "https://bloem-8c7ebb.webflow.io/" },
      ],
    },

    {
      platform: "Framer Projects",
      projects: [
        { name: "Filtr", url: "https://www.filtr.review/" },
        { name: "Practical Darling", url: "https://practical-darling-065877.framer.app/" },
        { name: "Cultural Steps", url: "https://cultural-steps-203643.framer.app/" },
      ],
    },

    {
      platform: "Squarespace Project",
      projects: [
        { name: "Jill Schulman", url: "https://www.jillschulman.com/" },
      ],
    },
  ];

  return (
    <>
      <Header />

      <section className="bg-white py-36 px-5 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl font-bold uppercase mb-12">Projects</h2>

          {projectGroups.map((group, index) => (
            <div key={index} className="mb-16">
              <h3 className="text-2xl font-semibold text-customGreen mb-6">
                {group.platform}
              </h3>

              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.projects.map((project, i) => (
                  <li key={i}>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 border border-gray-200 rounded-lg hover:bg-customGreen hover:text-white transition"
                    >
                      {project.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
