
import PopularPostSideBarComponent from "@/components/PopularPostSideBarComponent";
import SpotMovieSideBarComponent from "@/components/SpotMovieSideBarComponent";
import UpcomingMovieCardComponent from "@/components/UpcomingMovieCardComponent";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const metadata = {
    title: "Upcoming Bollywod Movies Update| Upcoming Movies in 2024",
    description: "Get complete information about the upcoming Bollywood movies in 2024.Movies that are released in 2024 with casting and movie plot details",
    keyword: "Upcoming Bollywood Movie 2024, Upcoming Movies 2024, Bollywood Movies releasing in 2024"
  };
  


async function fetchData() {
    const res = await fetch(`${apiUrl}/api/movie/upcoming`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default async function UpcomingMoviesPage() {

    const data = await fetchData()


    return <div className="bg-grey-100 px-6 pt-16 pb-20 flex flex-col md:flex-row">
        {/* First Section (5/6 width) */}
        <div className="w-full md:w-5/6 mb-4 md:mb-0 ">

            {/* Content for the first section */}

            <div className="max-w-7xl mx-auto p-6  shadow-xl rounded-lg bg-teal-50">

                <h1 className="text-4xl font-bold mb-2 text-gray-900 pb-4">

                    Upcoming Bollywood Hindi Movies List (2024)
                </h1>

                {/* <div className="flex items-center mb-4">
                    <Image
                     width={100}
                     height={100}
                        src="https://via.placeholder.com/40"
                        alt="Author Image"
                        className="w-10 h-10 rounded-full mr-4"
                    />
                    <div>
                        <p className="text-gray-900 font-semibold">John Doe</p>
                        <p className="text-gray-600 text-sm">May 28, 2024</p>
                    </div>
                </div> */}


                <hr className="bg-purple-700 mt-2 mb-6" />


                <p className="text-xl text-gray-900 mb-6">
                </p>


                <h2 className="text-xl font-bold mb-2 text-gray-900">Bollywood Upcoming Movies :

                </h2>


                <UpcomingMovieCardComponent data={data} />

            </div>

        </div>
        {/* Second Section (1/6 width) */}
        <div className="w-full md:w-1/6 sm:container">


            {/* Content for the second section */}


            <SpotMovieSideBarComponent />

            {/* <PopularPostSideBarComponent/> */}



        </div>
    </div>
}