import CelebDescWithImageComponent from "@/components/CelebDescWithImageComponent"
import LoadMore from "@/components/LoadMore"
import PopularPostSideBarComponent from "@/components/PopularPostSideBarComponent"


import SpotCelebSideBarComponent from "@/components/SpotCelebSideBarComponent"
import TabLinkCelebComponent from "@/components/TabLinkCelebComponent"
import UpcomingMovieSlugCardComponent from "@/components/UpcomingMovieSlugCardComponent"




export default function UpcomingMoviesSlugPage({ params }) {

     const data = {
        "id": 1,
        "image": "http://localhost:8000/celebrities/read-recommend-logo.png",
        "industry": [
            {
                "id": 1,
                "name": "Bollywood",
                "name_slug": "bollywood"
            }
        ],
        "roles": [
            {
                "id": 1,
                "name": "ACTOR",
                "name_slug": "actor"
            }
        ],
        "upcoming_movies": [
            {
                "title": "Kalki 780 AD",
                "verdict": "Average",
                "poster": "http://localhost:8000/movies/posters/456.png",
                "genres": "Horror",
                "release_date": "2024-06-17",
                "title_slug": "koi-yo-moview",
                "language": "Hindi",
                "cast": [
                    {
                        "name": "Srk",
                        "celebrity_slug": "srk-khan"
                    }
                ],
                "duration": "90 minutes",
                "plot": "Desjndnknfjn",
                "trailer_url": "http://readrecommend.com",
                "similar_movies": [
                    {
                        "title": "Not reelased",
                        "title_slug": "not-reelased"
                    },
                    {
                        "title": "UIuiuiui",
                        "title_slug": "uiuiuiui"
                    }
                ],
                "available_on": "Theater"
            }
        ],
        "first_name": "Akash",
        "last_name": "Elhance",
        "celebrity_slug": "akash-elhance",
        "description": "Desc Desc 5",
        "is_published": true,
        "created_at": "2024-06-08T12:43:08.312674Z",
        "updated_at": "2024-06-09T08:26:20.333593Z"
    }
    return <>

        <div className="bg-grey-100 px-6 pt-16 pb-20 flex flex-col md:flex-row">
            {/* First Section (5/6 width) */}
            <div className="w-full md:w-5/6 mb-4 md:mb-0 ">





                {/* Content for the first section */}
                <div className="max-w-8xl  p-6  shadow-xl rounded-lg bg-orange-50">

                    <CelebDescWithImageComponent data={data} />




                    {/* Content for the Product Recommend section */}
                    <TabLinkCelebComponent  id={params.slug} />
                           
                            <UpcomingMovieSlugCardComponent data={data}/>
                          

                   
                

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