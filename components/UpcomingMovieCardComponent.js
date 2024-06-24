import Link from "next/link"

export default function UpcomingMovieCardComponent({ data }) {
    return <>
        <div>
            <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-red-500 font-bold pt-8 hover:text-red-700 ">
                Upcoming Movies
            </h1>
            <div className="pt-4 pb-2 flex flex-wrap">
  {data.map((movie, index) => (
    <div key={index} className="w-full md:w-1/2 mb-4 px-2">
      <div className="bg-white shadow-md rounded-lg overflow-hidden transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold transition duration-500 ease-in-out hover:text-rose-500">
            {movie.title}
          </h1>
          <p className="text-gray-600 transition duration-500 ease-in-out hover:text-gray-800">
            Language: {movie.language}
          </p>
        </div>
        <div className="flex flex-wrap p-6">
          <div className="w-full md:w-1/3 pt-12 sm:pt-2">
            <img
              src={movie.poster}
              alt="Movie Image"
              className="w-full h-auto object-cover transition duration-500 ease-in-out hover:opacity-90 hover:scale-105"
            />
          </div>
          <div className="w-full md:w-2/3 pl-0 md:pl-6 mt-4 md:mt-0">
            <h2 className="text-xl font-semibold mb-2 transition duration-500 ease-in-out hover:text-rose-500">
              Expected Release Date
            </h2>
            <p className="text-gray-700 mb-4 transition duration-500 ease-in-out hover:text-gray-800">
              {movie.release_date}
            </p>
            <h2 className="text-xl font-semibold mb-2 transition duration-500 ease-in-out hover:text-rose-500">
              Top Cast
            </h2>
            <p className="text-gray-700 mb-4 transition duration-500 ease-in-out hover:text-gray-800">
              {movie.cast.length > 0 ? movie.cast.map((member, i) => (
                <Link
                  key={i}
                  href={`/biography/${member.celebrity_slug}`}
                  className="text-blue-500 hover:underline transition duration-500 ease-in-out hover:text-blue-700"
                >
                  {member.name}
                </Link>
              )).reduce((prev, curr) => [prev, ', ', curr]) : "No cast information available"}
            </p>
            <h2 className="text-xl font-semibold mb-2 transition duration-500 ease-in-out hover:text-rose-500">
              Genres
            </h2>
            <p className="text-gray-700 mb-4 transition duration-500 ease-in-out hover:text-gray-800">
              {movie.genres}
            </p>
            <h2 className="text-xl font-semibold mb-2 transition duration-500 ease-in-out hover:text-rose-500">
              Available on
            </h2>
            <p className="text-gray-700 mb-4 transition duration-500 ease-in-out hover:text-gray-800">
              {movie.available_on ? movie.available_on : "Information not available"}
            </p>
          </div>
          <p className="w-full text-gray-700 mt-4 md:mt-0 md:col-span-2 transition duration-500 ease-in-out hover:text-gray-800">
            {movie.plot}
          </p>
          <div className="w-full md:col-span-2 mt-4">
            <div className="flex flex-row space-x-4">
              <h2 className="text-lg font-semibold transition duration-500 ease-in-out hover:text-rose-500">
                Similar To:
              </h2>
              {movie.similar_movies.map((similar, i) => (
                <Link
                  key={i}
                  href="#"
                  className="text-blue-500 hover:underline transition duration-500 ease-in-out hover:text-blue-700"
                >
                  {similar.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-end mt-4 md:mt-0 md:col-span-2">
            {movie.trailer_url ? (
              <Link href={movie.trailer_url} target="_blank" rel="noopener noreferrer">
                <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-lg rounded-b-lg font-bold py-2 px-4 rounded inline-flex items-center transform transition-transform duration-500 ease-in-out shadow-md hover:bg-purple-800 hover:scale-105">
                  Watch Trailer
                </button>
              </Link>
            ) : (
              <button className="bg-gray-500 text-white font-bold py-2 px-4 rounded-full mb-2 md:mr-2 w-1/2 cursor-not-allowed" disabled>
                No Trailer Available
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

        </div>

    </>
}