import AwardMainComponents from "@/components/AwardMainComponents";
import AwardMainHeadingComponents from "@/components/AwardMainHeadingComponents";
import PopularPostSideBarComponent from "@/components/PopularPostSideBarComponent";
import SpotCelebSideBarComponent from "@/components/SpotCelebSideBarComponent";
import Link from "next/link";
export default function AwardsPage(){
    return <>

   
<div className="bg-grey-100 px-6 pt-16 pb-20 flex flex-col md:flex-row">
      {/* First Section (5/6 width) */}
      <div className="w-full md:w-5/6 mb-4 md:mb-0 ">



        {/* Content for the first section */}
        <div className="max-w-7xl bg-rose-50 mx-auto p-6  shadow-xl rounded-lg">

        <AwardMainHeadingComponents/>

         <AwardMainComponents/>
  

        </div>

      </div>
      {/* Second Section (1/6 width) */}
      <div className="w-full md:w-1/6 sm:container">


        {/* Content for the second section */}

       <SpotCelebSideBarComponent/>
<PopularPostSideBarComponent/>


      </div>
    </div>

    </>
}


