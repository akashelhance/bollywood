
import AwardsComponents from "@/components/AwardsComponents"
import CelebDescWithImageComponent from "@/components/CelebDescWithImageComponent"
import PopularPostSideBarComponent from "@/components/PopularPostSideBarComponent"
import SpotCelebSideBarComponent from "@/components/SpotCelebSideBarComponent"
import TabLinkCelebComponent from "@/components/TabLinkCelebComponent"

export default function awardsSlugPage(){
    const data = 
        {
          id: 1,
          image: "http://localhost:8000/celebrities/read-recommend-logo.png",
          industry: [
            { id: 1, name: "Bollywood", name_slug: "bollywood" }
          ],
          roles: [
            { id: 1, name: "ACTOR", name_slug: "actor" }
          ],
          awards: [
            {
              id: 2,
              category: "Best Actor",
              year: 2020,
              movie: {
                title: "Dilwale Dulhania Le Jayenge",
                verdict: "Flop",
                poster: "http://localhost:8000/movies/posters/456_lXvXi5f.png",
                genres: "adventure"
              },
              award_name: "Filmfare Awards",
              winner: true,
              event: 1,
              person: 1
            }
          ],
          first_name: "Akash",
          last_name: "Elchance",
          celebrity_slug: "akash-elchance",
          description: "Desc Desc 5",
          is_published: true,
          created_at: "2024-06-08T12:43:08.312674Z",
          updated_at: "2024-06-09T08:26:20.333593Z"
        }
      ;

    return    <div className="bg-grey-100 px-6 pt-16 pb-20 flex flex-col md:flex-row">
    {/* First Section (5/6 width) */}
    <div className="w-full md:w-5/6 mb-4 md:mb-0 ">





        {/* Content for the first section */}
        <div className="max-w-8xl  p-6 shadow-xl rounded-lg bg-orange-50">

            <CelebDescWithImageComponent data={data}/>

            <AwardsComponents data={[data]}/>


            <TabLinkCelebComponent />






        </div>


    </div>
    {/* Second Section (1/6 width) */}
    <div className="w-full md:w-1/6 sm:container">


        {/* Content for the second section */}

        <SpotCelebSideBarComponent />

        <PopularPostSideBarComponent />


    </div>
</div>
}