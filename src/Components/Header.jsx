function Header() {
  return (
        <div className="absolute  w-full text-white z-10 bg-darkbg border-b border-white border-opacity-10" >
            <div  className="px-10 py-5 relative">
                <header className="flex justify-between" >
                    <h3 className="text-4xl text-white font-bold" ><a href="#">mrk.dev</a></h3>
                    <nav>
                        <ul className="flex gap-4" >
                        <li className="hover:bg-white hover:text-darkbg p-2 rounded-sm "><a href="#home">Home</a></li>
                        <li className="hover:bg-white hover:text-darkbg p-2 rounded-sm"><a href="#about">About</a></li>
                        <li className="hover:bg-white hover:text-darkbg p-2 rounded-sm"><a href="#services">Skills</a></li>
                        <li className="hover:bg-white hover:text-darkbg p-2 rounded-sm"><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                    </header>
            </div>
        </div>

  );
}

export default Header;
