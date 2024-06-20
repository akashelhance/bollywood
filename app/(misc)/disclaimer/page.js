import DisclaimerComponent from "@/components/DisclaimerComponent";
import SideBarComponent from "@/components/SideBarComponent";

export default function Disclaimer(){
    return<>
   <div className="bg-grey-100 px-6 pt-16 pb-20 flex flex-col md:flex-row">
            {/* First Section (5/6 width) */}
            <div className="w-full md:w-5/6 mb-4 md:mb-0 ">



                {/* Content for the first section */}
<DisclaimerComponent/>
               
        
               



            </div>
            {/* Second Section (1/6 width) */}
            <div className="w-full md:w-1/6 sm:container">


                {/* Content for the second section */}

            <SideBarComponent/>


            </div>
        </div>
    </>
}