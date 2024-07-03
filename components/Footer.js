
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BelowFooter from './BelowFooter';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
   
   <footer>
  <div className=" py-4 bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-lg rounded-b-lg pt-9">
    <div className="container px-4 mx-auto">
      <div className="-mx-4 flex flex-wrap justify-between">
        <div className="px-4 my-4 w-full xl:w-1/5">
          <Link href="/" className="block w-56 mb-10">
            <svg
              version="1.1"
              viewBox="0 0 3368 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <g transform="translate(0 -75)">
                  <g transform="translate(0 75)">
                    <rect width={512} height={512} rx={128} fill="#3D5AFE" />
                    <rect
                      x={149}
                      y={176}
                      width={220}
                      height={220}
                      fill="#fff"
                    />
                    <circle cx={259} cy={156} r={40} fill="#fff" />
                    <circle cx={369} cy={286} r={40} fill="#2962FF" />
                  </g>
                  <text
                    fill="white"
                    fontFamily="Nunito-Bold, Nunito"
                    fontSize={512}
                    fontWeight="bold"
                  >
                    <tspan x={654} y={518}>
                      FilmiWood
                    </tspan>
                  </text>
                </g>
              </g>
            </svg>
          </Link>
          <p className="text-justify">
          Filmiwood is a blogging website where we mainly post articles related to Bollywood and Hollywood. Filmiwood, which aims to provide information about films, web series, box office updates, celebrities and influencer biographies. We constantly updating the data and and regularly post the articles.


          </p>
        </div>
        <div className="px-4 my-4 w-full sm:w-auto">
          <div>
            <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
              Pages:
            </h2>
          </div>
          <ul className="leading-8">
            <li>
              <Link href="/about" className="hover:text-blue-400">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/author" className="hover:text-blue-400">
              Authors Page
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-blue-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="hover:text-blue-400">
              Disclaimer
              </Link>
            </li>
          </ul>
        </div>

          <div className="px-4 my-4 w-full sm:w-auto">
          <div>
            <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
              Pages:
            </h2>
          </div>
          <ul className="leading-8">
            <li>
              <Link href="/upcoming-movies" className="hover:text-blue-400">
                Bollywood Upcoming Movies 
              </Link>
            </li>
            <li>
              <Link href="/box-office-update-2024" className="hover:text-blue-400">
                Box Office Update 2024
              </Link>
            </li>
            <li>
              <Link href="/biography" className="hover:text-blue-400">
              Biography 
              </Link>
            </li>
            <li>
              <Link href="/awards" className="hover:text-blue-400">
                Awards
              </Link>
            </li>
            <li>
              <Link href="/celebrity" className="hover:text-blue-400">
              Celebrity
              </Link>
            </li>
          </ul>
        </div>
        {/* <div className="px-4 my-4 w-full sm:w-auto">
          <div>
            <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
              Blog
            </h2>
          </div>
          <ul className="leading-8">
            <li>
              <Link href="#" className="hover:text-blue-400">
                Getting Started With HTML and CSS
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                What Is Flex And When to Use It?
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                How TailwindCSS Can Help Your Productivity?
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                5 Tips to Make Responsive Website
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                See More
              </Link>
            </li>
          </ul>
        </div> */}
        <div className="px-4 my-4 w-full sm:w-auto">
          <div>
            <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
              Pages:
            </h2>
          </div>
          <ul className="leading-8">
            <li>
              <Link href="/about" className="hover:text-blue-400">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/author" className="hover:text-blue-400">
              Authors Page
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-blue-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="hover:text-blue-400">
              Disclaimer
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
 
<BelowFooter/>

</footer>

 
  
  );
};
export default Footer;