
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import footerImg from '../assets/Social-networking-cuate.png';

function Contact() {
  return (
    <section id='contact' className="bg-[#121212] py-10">
      <div className="max-w-[1440px] mx-auto px-10 flex flex-col lg:flex-row items-center">
        
        {/* Illustration */}
        <div className='w-full'>
          <img src={footerImg} alt="Contact Illustration" className="w-full  mx-auto" />
        </div>
        
        {/* Contact Information */}
        <div className="lg:w-full text-center lg:text-left lg:pl-20">
          <h2 className="text-white text-4xl font-bold mb-8">LETS DISCUSS YOUR PROJECT</h2>
          
          <div className="mb-6">
            <div className="flex items-center justify-center lg:justify-start mb-2">
              <div className="bg-customGreen text-white rounded-full p-3 mr-4">
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <a href="mailto:angelomark31@gmail.com" className="text-white text-lg">angelomark31@gmail.com</a>
              </div>
            </div>
            <div className="border-b border-gray-700 pb-6 w-full lg:w-3/4 mx-auto lg:mx-0"></div>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center justify-center lg:justify-start mb-2">
              <div className="bg-customGreen text-white rounded-full p-3 mr-4">
                <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white text-lg">Bacoor City, Cavite</p>
              </div>
            </div>
            <div className="border-b border-gray-700 pb-6 w-full lg:w-3/4 mx-auto lg:mx-0"></div>
          </div>
          
          {/* Social Connect */}
          <div>
            <h3 className="text-gray-400 text-lg mb-4">LETS CONNECT</h3>
            <div className="flex space-x-4 justify-center lg:justify-start">
              <a href="https://www.facebook.com/Pallesco.Mark/" className="bg-transparent border border-gray-700 text-white rounded-full p-3 hover:bg-customGreen transition duration-300">
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
              <a href="https://www.linkedin.com/in/pallesco-mark/" className="bg-transparent border border-gray-700 text-white rounded-full p-3 hover:bg-customGreen transition duration-300">
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </a>
              <a href="https://github.com/Mark-Pallesco" className="bg-transparent border border-gray-700 text-white rounded-full p-3 hover:bg-customGreen transition duration-300">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
            </div>
          </div>
        </div>
        
      </div>
      <div className="mt-10 text-center text-gray-500 text-sm">
        © 2025 Copyright All Right Reserved
      </div>
    </section>
  );
}

export default Contact;