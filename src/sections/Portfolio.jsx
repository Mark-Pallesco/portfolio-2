export default function Portfolio() {
 const projects = [
   {
     id: 1,
     title: "LOREM IPSUM DOLOR",
     description: "Lorem ipsum dolor sit amet, consectetur.",
     image: "https://markpallesco.kesug.com/wp-content/uploads/2025/05/undefined-4.png",
     url: "https://thesalesmachine.com/",
   },
   {
     id: 2,
     title: "LOREM IPSUM DOLOR",
     description: "Lorem ipsum dolor sit amet, consectetur.",
     image: "https://via.placeholder.com/400x250/f0d0d8/90d0c8?text=",
     url: "#",
   },
   {
     id: 3,
     title: "LOREM IPSUM DOLOR",
     description: "Lorem ipsum dolor sit amet, consectetur.",
     image: "https://via.placeholder.com/400x250/c0e0e8/30d8d0?text=",
     url: "#",
   },
   {
     id: 4,
     title: "LOREM IPSUM DOLOR",
     description: "Lorem ipsum dolor sit amet, consectetur.",
     image: "https://via.placeholder.com/400x250/e0d0b0/a06040?text=",
     url: "#",
   },
 ];

 return (
   <section id="portfolio" className="bg-white py-20 px-5 lg:px-10">
     <div className="max-w-[1440px] mx-auto px-5 lg:px-10">
       <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
         <div className="mb-8 lg:mb-0 lg:w-1/2">
           <p className="text-gray-600 uppercase tracking-widest font-semibold text-sm">
             PORTFOLIO
           </p>
           <h2 className="text-4xl font-bold text-gray-900 leading-tight">
             WHERE IDEAS MEET EXECUTION
           </h2>
         </div>
         <div className="lg:w-1/2 lg:pl-10 text-gray-500">
           <p className="mb-4">
             Using WordPress and various website builders, I transform designs into
             visually appealing, user-friendly websites that deliver an optimal user
             experience while aligning with your project goals.
           </p>
           <a
             href="#"
             className="inline-block px-6 py-3 border border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition duration-300"
           >
             See More Work
           </a>
         </div>
       </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
         {projects.map(({ id, title, description, image, url }) => (
           <a
             key={id}
             href={url}
             target="_blank"
             rel="noopener noreferrer"
             className="group block rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
           >
             <div className="relative w-full h-80 overflow-hidden rounded-t-xl" style={{ backgroundColor: image.split('/')[3] }}>
               <img
                 src={image}
                 alt={title}
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
               />
             </div>
             <div className="p-6 flex justify-between items-center bg-white rounded-b-xl">
               <div>
                 <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                 <p className="text-gray-600 text-sm mt-1">{description}</p>
               </div>
               <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 group-hover:text-gray-900 group-hover:bg-gray-100 transition-colors duration-300">
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
 );
}