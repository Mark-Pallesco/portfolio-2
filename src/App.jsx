import Header from "./Components/Header";
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('Lorem Lorem');
  const [inputValue, setInputValue] = useState(''); 

  const handleChange = (event) => {
    setInputValue(event.target.value); 
  };

  const updateName = () => {
    setName(inputValue);
    setInputValue(''); 
  };

  return (
    <div className="bg-darkbg">
      <Header />
      <main className="w-full h-screen flex justify-center items-center bg-grid-gray-500 bg-grid-8" id="info">
        <section className="text-white gap-4 flex flex-col items-center w-full z-10 ">
          <h3 className="font-sans text-2xl sm:text-xl">Lorem, ipsum.</h3>
          <h1 className="font-bold text-5xl md:text-4xl sm:text-3xl">{name}</h1>
          <h2 className="text-2xl sm:text-xl">Lorem, ipsum dolor.</h2>
          <button 
            className="px-8 py-2 bg-transparent text-xl text-white rounded-3xl border border-white hover:bg-white hover:text-darkbg transition duration-300"
          >
            Learn More
          </button>
        </section>
      </main>

      <div id="about" >
          <div className="w-full" >
                <div className="text-white" >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi autem obcaecati corporis minus, facilis perferendis suscipit quibusdam sit? Autem, repudiandae?</p>
                    <h2>Lorem Lorem</h2>
                </div>
          </div>
      </div>

    </div>
  );
}
