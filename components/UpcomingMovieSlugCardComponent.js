import Link from "next/link"
import Image from "next/image"

export default function UpcomingMovieSlugCardComponent({data}) {
    return <>
  <div>
            <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-grey-900 font-bold pt-8 hover:text-red-700 ">
                {data.first_name} {data.last_name} Upcoming Movies
            </h1>
            <div className="pt-4 pb-2 flex flex-col md:flex-row ">
                {data.upcoming_movies.map((movie, index) => (
                    <div key={index} className="w-full md:w-1/2 mb-2 md:mb-0 m-2">
                        <div className="max-w-4xl mx-auto bg-rose-50 shadow-md rounded-lg overflow-hidden transition duration-300 hover:shadow-xl">
                            <div className="p-6 border-b border-gray-200">
                                <h1 className="text-2xl font-bold">{movie.title}</h1>
                                <p className="text-gray-600">Language: {movie.language}</p>
                            </div>
                            <div className="flex flex-wrap p-6 ">
                                <div className="w-full md:w-1/3 pt-12 sm:pt-2">
                                    <Image
                                     width={100}
                                     height={100}
                                        src={movie.poster}
                                        alt="Movie Image"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                <div className="w-full md:w-2/3 pl-0 md:pl-6 mt-4 md:mt-0">
                                    <h2 className="text-xl font-semibold mb-2">Expected Release Date</h2>
                                    <p className="text-gray-700 mb-4">
                                        {movie.release_date}
                                    </p>
                                    <h2 className="text-xl font-semibold mb-2">Top Cast</h2>
                                    <p className="text-gray-700 mb-4">
                                        {movie.cast.map((member, i) => member.name).join(', ')}
                                    </p>
                                    <h2 className="text-xl font-semibold mb-2">Genres</h2>
                                    <p className="text-gray-700 mb-4">
                                        {movie.genres}
                                    </p>
                                    <h2 className="text-xl font-semibold mb-2">Available on</h2>
                                    <p className="text-gray-700 mb-4">
                                        {movie.available_on}
                                    </p>
                                </div>
                                <p className="w-full text-gray-700 mt-4 md:mt-0 md:col-span-2">
                                    {movie.plot}
                                </p>
                                <div className="w-full md:col-span-2 mt-4">
                                    <div className="flex flex-row space-x-4">
                                        <h2 className="text-lg font-semibold">Similar To:</h2>
                                        {movie.similar_movies.map((similar, i) => (
                                            <Link key={i} href="#" className="text-blue-500 hover:underline">
                                                {similar.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="w-full flex flex-col md:flex-row justify-end mt-4 md:mt-0 md:col-span-2">
                                    <Link href={movie.trailer_url} target="_blank" rel="noopener noreferrer">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-2 md:mr-2 transition duration-300 hover:shadow-md w-1/2">Watch Trailer</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>



    </>
}