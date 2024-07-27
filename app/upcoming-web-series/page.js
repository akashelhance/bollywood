
import PopularPostSideBarComponent from "@/components/PopularPostSideBarComponent";
import SpotSeriesSideBarComponent from "@/components/SpotSeriesSideBarComponent";
import UpcomingWebSeriesComponent from "@/components/UpcomingWebSeriesComponent";
import Image from "next/image";

const apiUrl = process.env.API_URL;

export const metadata = {
    title: "Upcoming Web Series Update| Upcoming Web Series in 2024",
    description: "Get complete information about the upcoming Web Series in 2024.Web Series that are released in 2024 with casting and web series plot details",
    keyword: "Upcoming web series in 2024, Upcoming web series 2024, Web Series releasing in 2024"
  };


async function fetchData() {
    const res = await fetch(`${apiUrl}/api/webseries/upcoming` , { cache: 'no-cache', next: { revalidate: 0 }});

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}


export default async function UpComingWebSeriesPage() {

    const data = await fetchData()

    return <>

        <div className="bg-grey-100 px-6 pt-16 pb-20 flex flex-col md:flex-row">
            {/* First Section (5/6 width) */}


            <div className="w-full md:w-5/6 mb-4 md:mb-0 ">



                {/* Content for the first section */}

                <div className="max-w-7xl mx-auto p-6  shadow-xl rounded-lg bg-rose-50">



                    <h1 className="text-4xl font-bold mb-2 text-gray-900 pb-4">

                        Upcoming Web Series List (2024)
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
                    If you are looking for upcoming web series, then explore this page to get complete information about upcoming web series in 2024. Get an update on the web series's cast, plot, and genre. Also, you will get to know where you can watch the web series, like if it is releasing on which OTT platform like Netflix, Amazon Prime, or Zee 5.

                    </p>


                    <h2 className="text-xl font-bold mb-2 text-gray-900">Upcoming Web Series :

                    </h2>


                    <UpcomingWebSeriesComponent data={data} />

                </div>

            </div>
            {/* Second Section (1/6 width) */}
            <div className="w-full md:w-1/6 sm:container">


                {/* Content for the second section */}
                <SpotSeriesSideBarComponent/>
                {/* <PopularPostSideBarComponent/> */}

            </div>
        </div>
    </>
}