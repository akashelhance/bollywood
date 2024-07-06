



import BoxOfficeComponent from "@/components/BoxOfficeComponent";
import PopularPostSideBarComponent from "@/components/PopularPostSideBarComponent";


import RelatedArticleComponent from "@/components/RelatedArticleComponent";

import SpotMovieSideBarComponent from "@/components/SpotMovieSideBarComponent";

import Link from "next/link";


export const metadata = {
    title: "Bollywood Movies Box Office Collection Update-2024",
    description: "Get the complete update on the Box Office Collection for Bollywood Movies, Latest Bollywood Movies Box Office Collection",
    keyword: "rentals, find rental homes"
  };





export default async function BoxOfficePage() {

    return <>

        <div className="bg-grey-100 px-6 pt-16 pb-20 flex flex-col md:flex-row">
            {/* First Section (5/6 width) */}
            <div className="w-full md:w-5/6 mb-4 md:mb-0 ">



                {/* Content for the first section */}


               
             <BoxOfficeComponent/>

            {/* <RelatedArticleComponent/> */}
               



            </div>
            {/* Second Section (1/6 width) */}
            <div className="w-full md:w-1/6 sm:container">


                {/* Content for the second section */}

            <SpotMovieSideBarComponent/>
                    {/* <PopularPostSideBarComponent/> */}


            </div>
        </div>

    </>
}