"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (path) => {
    setSelected(path);
    setIsOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/search?query=${searchQuery}`);
  };

  return (
    <nav className="bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-lg rounded-b-lg fixed w-full top-0 left-0 z-50 p-4">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">Your Logo</div>
        <button
          className="block lg:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
        <div className={`lg:flex flex-grow justify-center items-center ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-8 lg:items-center">
            <NavItem href="/" selected={selected} onItemClick={handleItemClick}>Home</NavItem>
            <NavItem href="/upcoming-movies" selected={selected} onItemClick={handleItemClick}>Upcoming Movies</NavItem>
            <NavItem href="/upcoming-web-series" selected={selected} onItemClick={handleItemClick}>Upcoming Web Series</NavItem>

            <NavItem href="/box-office-update-2024" selected={selected} onItemClick={handleItemClick}>Box Office</NavItem>
            {/* <NavItem href="/biography" selected={selected} onItemClick={handleItemClick}>Biography</NavItem> */}
            {/* <NavItem href="/awards" selected={selected} onItemClick={handleItemClick}>Awards</NavItem> */}
            <NavItem href="/celebrity" selected={selected} onItemClick={handleItemClick}>Celebrity</NavItem>
          </ul>
        </div>
        {/* <div className={`hidden lg:flex lg:ml-auto`}>
          <form onSubmit={handleSearch} className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 rounded text-black"
            />
            <button type="submit" className="ml-2 p-2 bg-rose-700 rounded text-white">Search</button>
          </form>
        </div> */}
      </div>
    </nav>
  );
};

const NavItem = ({ href, selected, onItemClick, children }) => {
  return (
    <li className="py-2 lg:py-0" onClick={() => onItemClick(href)}>
      <Link href={href} className={`text-lg lg:text-xl hover:bg-rose-700 hover:text-white font-semibold p-2 rounded ${selected === href ? 'bg-rose-700 text-white font-bold' : ''}`}>
        {children}
      </Link>
    </li>
  );
};

export default Navbar;
