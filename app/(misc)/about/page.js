import AboutComponents from "@/components/AboutComponents";
import SideBarComponent from "@/components/SideBarComponent";
import SpotCelebSideBarComponent from "@/components/SpotCelebSideBarComponent";

export const metadata = {
    title: "About Filmiwood| Movie, Box office, Web Series and Biography",
    description: "Filmiwood provides information about films, web series, and box office updates, along with a biography of celebrities and their influences.",
    keyword: "Bollywood Movie Update, Box office Collection Update, Upcoming movie and web series"
  };


export default function About(){
    return<>

<div className="bg-grey-100 px-6 pt-16 pb-20 flex flex-col md:flex-row">
            {/* First Section (5/6 width) */}
            <div className="w-full md:w-5/6 mb-4 md:mb-0 ">

               
          <AboutComponents/>
               
            </div>
            {/* Second Section (1/6 width) */}
            <div className="w-full md:w-1/6 sm:container">


                {/* Content for the second section */}

        <SpotCelebSideBarComponent/>


            </div>
        </div>

    </>
}