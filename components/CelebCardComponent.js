import Link from "next/link"

export default function CelebCardComponent() {

    const celebrities = [
        {
            id: 1,
            image: "http://localhost:8000/celebrities/read-recommend-logo.png",
            industry: [
                {
                    id: 1,
                    name: "Bollywood",
                    name_slug: "bollywood"
                }
            ],
            roles: [
                {
                    id: 1,
                    name: "ACTOR",
                    name_slug: "actor"
                }
            ],
            first_name: "Akash",
            last_name: "Elhance",
            celebrity_slug: "akash-elhance",
            description: "Desc Desc 5",
            is_published: true,
            created_at: "2024-06-08T12:43:08.312674Z",
            updated_at: "2024-06-09T08:26:20.333593Z"
        },
        {
            id: 2,
            image: "http://localhost:8000",
            industry: [
                {
                    id: 1,
                    name: "Bollywood",
                    name_slug: "bollywood"
                }
            ],
            roles: [
                {
                    id: 1,
                    name: "ACTOR",
                    name_slug: "actor"
                }
            ],
            first_name: "Anirudh",
            last_name: "Mittal",
            celebrity_slug: "anirudh-mittal",
            description: "Desc desc 33",
            is_published: true,
            created_at: "2024-06-09T08:18:16.111637Z",
            updated_at: "2024-06-09T08:23:24.360877Z"
        },

        {
            id: 3,
            image: "http://localhost:8000",
            industry: [
                {
                    id: 1,
                    name: "Bollywood",
                    name_slug: "bollywood"
                }
            ],
            roles: [
                {
                    id: 1,
                    name: "ACTOR",
                    name_slug: "actor"
                }
            ],
            first_name: "h",
            last_name: "Mittal",
            celebrity_slug: "anirudh-mittal",
            description: "Desc desc 33",
            is_published: true,
            created_at: "2024-06-09T08:18:16.111637Z",
            updated_at: "2024-06-09T08:23:24.360877Z"
        }
    ];



    if (!celebrities || celebrities.length === 0) {
        return null; // Handle the case where celebrities is undefined or empty
    }
    return <>
        <div className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Card 1 */}

                {celebrities.map((celebrity) => (
                    <div key={celebrity.id} className="bg-white rounded-lg shadow-lg flex flex-col sm:flex-row max-w-4xl mb-4">
                        {/* Image Section */}
                        <div className="w-full sm:w-1/3">
                            <Link href={`/celebrity/${celebrity.celebrity_slug}`}>
                                <img
                                    src={celebrity.image || 'https://via.placeholder.com/300'}
                                    alt={`${celebrity.first_name} ${celebrity.last_name}`}
                                    className="object-cover w-full h-auto rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
                                />
                            </Link>
                        </div>
                        {/* Text Section */}
                        <div className="w-full sm:w-2/3 p-6">
                            <Link href={`/biography/${celebrity.celebrity_slug}`}>
                                <h2 className="text-2xl font-bold mb-2 hover:text-rose-500">
                                    {celebrity.first_name} {celebrity.last_name}
                                </h2>
                            </Link>
                            <p className="text-gray-900 mb-4">
                                {celebrity.description}
                            </p>
                            <div className="flex flex-row gap-4">
                                <Link href={`/biography/${celebrity.celebrity_slug}`} className="text-lg text-rose-500 hover:underline hover:text-rose-700">
                                    Biography
                                </Link>
                                <Link href={`/upcoming-movies/${celebrity.celebrity_slug}`} className="text-rose-500 text-lg hover:underline hover:text-rose-700">
                                    Upcoming Movie
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}



                {/* Card 2 */}



                {/* Card 3 */}

            </div>
        </div>

    </>

}