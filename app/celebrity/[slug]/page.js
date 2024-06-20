
import CelebCardComponent from "@/components/CelebCardComponent"
import CelebDescWithImageComponent from "@/components/CelebDescWithImageComponent"
import LoadMore from "@/components/LoadMore"
import PopularPostSideBarComponent from "@/components/PopularPostSideBarComponent"
import SpotCelebSideBarComponent from "@/components/SpotCelebSideBarComponent"
import TabLinkCelebComponent from "@/components/TabLinkCelebComponent"
import Link from "next/link"


export default function SingleCelebPage({ params }) {
  return <>

    <div className="bg-grey-100 px-6 pt-16 pb-20 flex flex-col md:flex-row">
      {/* First Section (5/6 width) */}
      <div className="w-full md:w-5/6 mb-4 md:mb-0 ">


    


        {/* Content for the first section */}
        <div className="max-w-8xl  p-6  shadow-xl rounded-lg bg-orange-50">

        <CelebDescWithImageComponent />

          <TabLinkCelebComponent id={params.allotment} />



          <h2 className="text-xl font-bold mb-2 text-gray-900">Lallywood Box Office Report :

          </h2>


          <CelebCardComponent />

          <LoadMore />


        </div>







      </div>
      {/* Second Section (1/6 width) */}
      <div className="w-full md:w-1/6 sm:container">


        {/* Content for the second section */}

        <SpotCelebSideBarComponent />

        <PopularPostSideBarComponent />


      </div>
    </div>



  </>
}