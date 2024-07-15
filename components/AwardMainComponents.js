import Link from 'next/link';
import Image from 'next/image';

const awards = [
    {
        "id": 1,
        "image": "http://localhost:8000",
        "name": "lalu award2",
        "description": "",
        "name_slug": "lalu-award2",
        "awarded_for": "Aise hi de dete hai",
        "country": "India",
        "presented_by": "FIFA",
        "website": "http://readrecommend.com",
        "first_awarded": "1905",
        "last_awarded": "2024"
    },
    {
        "id": 2,
        "image": "http://localhost:8000",
        "name": "lalu award2",
        "description": "",
        "name_slug": "lalu-award2",
        "awarded_for": "Aise hi de dete hai",
        "country": "India",
        "presented_by": "FIFA",
        "website": "http://readrecommend.com",
        "first_awarded": "1905",
        "last_awarded": "2024"
    },
    {
        "id": 3,
        "image": "http://localhost:8000",
        "name": "lalu award2",
        "description": "",
        "name_slug": "lalu-award2",
        "awarded_for": "Aise hi de dete hai",
        "country": "India",
        "presented_by": "FIFA",
        "website": "http://readrecommend.com",
        "first_awarded": "1905",
        "last_awarded": "2024"
    }
];

const AwardMainComponents = () => {
    return (
        <div className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {awards.map((award) => (
                    <div key={award.id} className="bg-white rounded-lg shadow-lg flex flex-col sm:flex-row max-w-4xl mb-4">
                        {/* Image Section */}
                        <div className="w-full sm:w-1/3">
                            <Link href={`/award/${award.name_slug}`}>
                                <Image
                                 width={100}
                                 height={100}
                                    src={award.image || 'https://via.placeholder.com/300'}
                                    alt={award.name}
                                    className="object-cover w-full h-auto rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
                                />
                            </Link>
                        </div>
                        {/* Text Section */}
                        <div className="w-full sm:w-2/3 p-6">
                            <Link href={`/awards/${award.name_slug}`}>
                                <h2 className="text-2xl font-bold mb-2 hover:text-rose-500">
                                    {award.name}
                                </h2>
                            </Link>
                            <p className="text-gray-900 mb-4">
                                {award.description || 'No description available.'}
                            </p>
                            <div className="flex flex-row gap-4">
                                <Link href={award.website || ""} className="text-lg text-rose-500 hover:underline hover:text-rose-700">
                                    Winners
                                </Link>

                                <Link href={award.website || ""} className="text-lg text-rose-500 hover:underline hover:text-rose-700">
                                Nomination
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AwardMainComponents;
