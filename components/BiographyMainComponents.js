
import Link from "next/link";

import Image from "next/image";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;


async function fetchData() {
    const res = await fetch(`${apiUrl}/api/celebrity/`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}


export default async function BiographyMainComponents() {

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        const truncatedText = text.slice(0, maxLength);
        const lastSpaceIndex = truncatedText.lastIndexOf(' ');
        return truncatedText.slice(0, lastSpaceIndex) + '...';
    };


    const celebrities = await fetchData()


    if (!celebrities || celebrities.length === 0) {
        return null; // Handle the case where celebrities is undefined or empty
    }

    return <>
        <div className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {celebrities.map((celebrity) => (
                    <div key={celebrity.id} className="bg-white rounded-lg shadow-lg flex flex-col sm:flex-row max-w-4xl mb-4">
                        {/* Image Section */}
                        <div className="w-full sm:w-1/3 flex-shrink-0">
                            <Link href={`/celebrity/${celebrity.celebrity_slug}`}>
                                <Image
                                 width={100}
                                 height={100}
                                    src={celebrity.image || 'https://via.placeholder.com/300'}
                                    alt={`${celebrity.first_name} ${celebrity.last_name}`}
                                    className="object-cover w-full h-48 sm:h-64 md:h-72 lg:h-80 rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
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
                                {celebrity.description.length > 325 ? (
                                    <>
                                        {truncateText(celebrity.description, 325)}
                                        <Link href={`/biography/${celebrity.celebrity_slug}`} className="text-rose-500 hover:underline">
                                            Read more
                                        </Link>
                                    </>
                                ) : (
                                    celebrity.description
                                )}
                            </p>
                            <div className="flex flex-row gap-4">

                                <Link href={`/biography/${celebrity.celebrity_slug}`} className="text-lg text-rose-500 hover:underline hover:text-rose-700">
                                    Biography
                                </Link>
                                {celebrity.upcoming_movies_count > 0 && (
                                    <Link href={`/upcoming-movies/${celebrity.celebrity_slug}`} className="text-rose-500 text-lg hover:underline hover:text-rose-700">
                                        Upcoming Movies
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>


    </>
}