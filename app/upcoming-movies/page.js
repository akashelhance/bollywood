import LoadMore from "@/components/LoadMore";
import SideBarComponent from "@/components/SideBarComponent";
import UpcomingMovieCardComponent from "@/components/UpcomingMovieCardComponent";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;


async function fetchData() {
    const res = await fetch(`${apiUrl}/api/movie/upcoming`);
  
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
  
    return res.json();
  }

export default async function UpcomingMoviesPage() {

    const data= await fetchData()

    
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