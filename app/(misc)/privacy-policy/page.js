import PPComponent from "@/components/PPComponent";
import SideBarComponent from "@/components/SideBarComponent";
import SpotMovieSideBarComponent from "@/components/SpotMovieSideBarComponent";



export const metadata = {
    title: "Privacy Policy Filmiwood",
    // description: "Filmiwood gathers all the information through social media. We try our best to post all the accurate information, but by mistake, the information might not be 100% accurate.  ",
    keyword: "Privacy Policy filmiwood"
  };


export default function PrivacyPolicy(){
    return<>
    <div className="bg-grey-100 px-6 pt-16 pb-20 flex flex-col md:flex-row">
             {/* First Section (5/6 width) */}
             <div className="w-full md:w-5/6 mb-4 md:mb-0 ">
 
 
 
                 {/* Content for the first section */}
 
<PPComponent/>
                
         
                
 
 
 
             </div>
             {/* Second Section (1/6 width) */}
             <div className="w-full md:w-1/6 sm:container">
 
 
                 {/* Content for the second section */}
 <SpotMovieSideBarComponent/>
 
 
             </div>
         </div>
     </>
}