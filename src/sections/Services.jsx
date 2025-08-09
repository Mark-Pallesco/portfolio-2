import dataImg from '../assets/Data-points-cuate-1.png';

export default function Services() {
  return (
    <section id="services">
      <div className="max-w-[1440px] mx-auto py-20 px-5 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Left Side - Text & Image */}
        <div className="flex flex-col justify-center">
          <p className="text-green-700 uppercase tracking-widest font-medium">Services</p>
          <h2 className="text-3xl lg:text-4xl uppercase font-bold leading-snug mb-8">
            Come on, I will help you <br /> build your dream project.
          </h2>
          <img src={dataImg} alt="Services Illustration" className="max-w-full h-auto" />
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-col gap-10">
          {[
            { title: "WordPress Development", desc: "Using WordPress and various website builders, I transform designs into visually appealing, user-friendly websites that deliver an optimal user experience while aligning with your project goals." },
            { title: "E-Commerce Website", desc: "Creating powerful WooCommerce stores that drive sales and enhance customer engagement." },
            { title: "Maintenance & Support", desc: "Providing ongoing technical support to keep your website running smoothly." }
          ].map((service, i) => (
            <div key={i} className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold uppercase">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
              {i < 2 && <hr className="border-t border-green-600 mt-4" />}
            </div>
          ))}

          {/* Stats */}
          <div className="flex flex-wrap gap-4 mt-10">
            <div className="bg-yellow-100 px-6 py-4 rounded-md text-center">
              <p className="text-2xl font-bold">2+</p>
              <p className="text-sm">Years of Experience</p>
            </div>
            <div className="bg-purple-100 px-6 py-4 rounded-md text-center">
              <p className="text-2xl font-bold">80+</p>
              <p className="text-sm">Total Projects</p>
            </div>
            <div className="bg-green-100 px-6 py-4 rounded-md text-center">
              <p className="text-2xl font-bold">50+</p>
              <p className="text-sm">Happy Clients</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
