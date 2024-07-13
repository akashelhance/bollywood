
import BoxOfficeComponent from "@/components/BoxOfficeComponent";
import SpotMovieSideBarComponent from "@/components/SpotMovieSideBarComponent";


export const metadata = {
    title: "BollyWood Box Office Collection 2024 Report & Verdict|Bollywood movies box collection update",
    description: "Get complete information about the BollyWood Box Office Collection 2024 Report & Verdict",
    keyword: "Bollywood Box Office Collection in 2024, Box Office Update 2024, Movie Hit or Flop"
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