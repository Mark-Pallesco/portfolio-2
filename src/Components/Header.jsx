function Header() {
  return (
        <div className="absolute  w-full text-white z-10 bg-blue-950" >
            <div  className="px-10 py-5 max-w-7xl mr-auto ml-auto relative">
                <header className="flex justify-between" >
                    <h3 className="text-4xl text-white font-bold" ><a href="#">MRKPALLE</a></h3>
                    <nav>
                        <ul className="flex gap-4 font-montserrat">
                            <li className="p-2 font-medium"><a href="#home">HOMES</a></li>
                            <li className="p-2 font-medium"><a href="#about">SERVICES</a></li>
                            <li className="p-2 font-medium"><a href="#services">EXPERIENCE</a></li>
                            <li className="p-2 font-medium"><a href="#contact">PORTFOLIO</a></li>
                            <li className="p-2 font-medium"><a href="#contact">CONTACT</a></li>
                        </ul>
                    </nav>
                    <button className="bg-customGreen py-3 px-6 rounded-md" >Download CV</button>
                    </header>
            </div>
        </div>

  );
}

export default Header;
