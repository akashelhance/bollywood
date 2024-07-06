import AuthorComponent from "@/components/AuthorComponent";
import SideBarComponent from "@/components/SideBarComponent";
import SpotCelebSideBarComponent from "@/components/SpotCelebSideBarComponent";

export default function Author(){
    return<>
        <div className="bg-grey-100 px-6 pt-16 pb-20 flex flex-col md:flex-row">
             {/* First Section (5/6 width) */}
             <div className="w-full md:w-5/6 mb-4 md:mb-0 ">
 
 
 
                 {/* Content for the first section */}
 

         <AuthorComponent/>
                
 
 
 
             </div>
             {/* Second Section (1/6 width) */}
             <div className="w-full md:w-1/6 sm:container">
 
 
                 {/* Content for the second section */}
 
           <SpotCelebSideBarComponent/>
 
 
             </div>
         </div>
    </>
}