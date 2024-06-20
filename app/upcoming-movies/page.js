import LoadMore from "@/components/LoadMore";
import SideBarComponent from "@/components/SideBarComponent";
import UpcomingMovieCardComponent from "@/components/UpcomingMovieCardComponent";

export default function UpcomingMoviesPage() {

    const data = [
        {
            "title": "Movie 1",
            "verdict": "Average",
            "poster": "http://localhost:8000/movies/posters/456.png",
            "genres": "Horror",
            "release_date": "2024-06-17",
            "title_slug": "koi-yo-moview",
            "language": "Hindi",
            "cast": [
                {
                    "name": "Salman khan",
                    "celebrity_slug": "salman-khan"
                },

                {
                    "name": "Shah Rukh Khan",
                    "celebrity_slug": "Shah-Rukh-khan"
                }
            ],
            "duration": "90 minutes",
            "plot": "Desjndnknfjn",
            "trailer_url": "",
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
            "available_on": "Theater, OTT"
        },
        {
            "title": "Movie 2",
            "verdict": null,
            "poster": "http://localhost:8000",
            "genres": "Horror",
            "release_date": "2024-06-19",
            "title_slug": "not-reelased",
            "language": "Hindi",
            "cast": [],
            "duration": "120 minutes",
            "plot": "Nothing just a plot",
            "trailer_url": "http://www.fb.com",
            "similar_movies": [
                {
                    "title": "kOI YO mOVIEW",
                    "title_slug": "koi-yo-moview"
                },
                {
                    "title": "UIuiuiui",
                    "title_slug": "uiuiuiui"
                }
            ],
            "available_on": "OTT"
        }
    ]

    return <div className="bg-grey-100 px-6 pt-16 pb-20 flex flex-col md:flex-row">
        {/* First Section (5/6 width) */}
        <div className="w-full md:w-5/6 mb-4 md:mb-0 ">



            {/* Content for the first section */}

            <div className="max-w-7xl mx-auto p-6  shadow-xl rounded-lg bg-teal-50">



                <h1 className="text-4xl font-bold mb-2 text-gray-900 pb-4">

                    UPCOMING BOLLYWOOD HINDI MOVIES LIST (2024)
                </h1>




                <div className="flex items-center mb-4">
                    <img
                        src="https://via.placeholder.com/40"
                        alt="Author Image"
                        className="w-10 h-10 rounded-full mr-4"
                    />
                    <div>
                        <p className="text-gray-900 font-semibold">John Doe</p>
                        <p className="text-gray-600 text-sm">May 28, 2024</p>
                    </div>
                </div>


                <hr className="bg-purple-700 mt-2 mb-6" />


                <p className="text-xl text-gray-900 mb-6">
                    frequently use their prominenw attention to important social problems and enhance society. Hollywood celebrities as well as South Indian (Tamil, Telugu, Kannada, and Malayalam) and Bollywood industry celebrities are included here, providing the most recent stuff. Check out this website for the birthdays of your favourite South Indian, Hollywood, and Bollywood celebrities.
                </p>


                <h2 className="text-xl font-bold mb-2 text-gray-900">Bollywood Upcoming Movies :

                </h2>

               
                    <UpcomingMovieCardComponent data={data} />
               




                


            </div>








        </div>
        {/* Second Section (1/6 width) */}
        <div className="w-full md:w-1/6 sm:container">


            {/* Content for the second section */}

            <SideBarComponent />


        </div>
    </div>
}