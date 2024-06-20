"use client"

import { useState } from 'react';
import Link from 'next/link';

export default function TabLinkCelebComponent({ id }) {
  const [activeLink, setActiveLink] = useState(null);

  const links = [
    { text: "Biography", href: `/biography/${id}` },
    { text: "Upcoming Movies", href: `/upcoming-movies/${id}` },
    { text: "Awards", href: `/awards/${id}` },
    { text: "Car Collection", href: `/car-collection/${id}` },
    { text: "Product Recommend", href: `/product-recommend/${id}` },

  ];

  if (!links || links.length === 0) {
    return null; // Return null if no links are provided
  }

  const handleLinkClick = (linkText) => {
    setActiveLink(linkText);
  };

  return (


<div className="flex flex-row flex-wrap items-center justify-center pl-4 md:pl-24">
  {links.map((link, index) => (
    <Link
      key={index}
      href={link.href}
      onClick={() => handleLinkClick(link.text)}
      className={`px-2 py-1 text-lg mx-1 my-2 transition duration-150 ${
        activeLink === link.text
          ? 'bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-b-lg font-bold py-2 px-4 inline-flex items-center transform transition-transform duration-300 shadow-lg border-2 border-white'
          : 'bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-b-lg font-bold py-2 px-4 inline-flex items-center transform transition-transform duration-300 shadow-md'
      } hover:scale-105 hover:shadow-lg`}
    >
      {link.text}
    </Link>
  ))}
</div>



  );
}
