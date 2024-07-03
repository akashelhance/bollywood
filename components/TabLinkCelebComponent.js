"use client"

import { useState } from 'react';
import Link from 'next/link';


const TabLink = ({ href, text, active, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    className={`px-2 py-1 text-lg mx-1 my-2 transition duration-150 ${
      active
        ? 'bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-b-lg font-bold py-2 px-4 inline-flex items-center transform transition-transform duration-300 shadow-lg border-2 border-white'
        : 'bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-b-lg font-bold py-2 px-4 inline-flex items-center transform transition-transform duration-300 shadow-md'
    } hover:scale-105 hover:shadow-lg`}
  >
    {text}
  </Link>
);

export default function TabLinkCelebComponent({ id,data }) {
  
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (text) => {
    setActiveLink(text);
  };

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


  return (


<div className="flex flex-row flex-wrap items-center justify-center pl-4 md:pl-24">

<div className="flex flex-wrap justify-center">
      {/* <TabLink
        href={`/biography/${data.celebrity_slug}`}
        text="Biography"
        active={activeLink === 'Biography'}
        onClick={() => handleLinkClick('Biography')}
      /> */}
      {data.upcoming_movies_count > 0 && (
        <TabLink
          href={`/upcoming-movies/${data.celebrity_slug}`}
          text="Upcoming Movies"
          active={activeLink === 'Upcoming Movies'}
          onClick={() => handleLinkClick('Upcoming Movies')}
        />
      )}
      {data.recommended_products_count > 0 && (
        <TabLink
          href={`/recommended-products/${data.celebrity_slug}`}
          text="Recommended Products"
          active={activeLink === 'Recommended Products'}
          onClick={() => handleLinkClick('Recommended Products')}
        />
      )}
      {data.awards_count > 0 && (
        <TabLink
          href={`/awards/${data.celebrity_slug}`}
          text="Awards"
          active={activeLink === 'Awards'}
          onClick={() => handleLinkClick('Awards')}
        />
      )}
      {data.vehicle_collection_count > 0 && (
        <TabLink
          href={`/vehicle-collection/${data.celebrity_slug}`}
          text="Vehicle Collection"
          active={activeLink === 'Vehicle Collection'}
          onClick={() => handleLinkClick('Vehicle Collection')}
        />
      )}
    </div>

</div>



  );
}
