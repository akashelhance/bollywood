
import Link from "next/link"
import Image from "next/image"


export default function RelatedArticleComponent() {
    return <>

        <div className="">
            <div className="max-w-7xl mx-auto p-6 shadow-xl rounded-lg">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Related Articles
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-gray-500">
                        Check out these related articles to learn more.
                    </p>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {/* Related Article Card (Replace with dynamic content) */}
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                        <Image
                         width={100}
                         height={100}
                            src="https://via.placeholder.com/150"
                            alt="Article Image"
                            className="object-cover w-full h-40 sm:h-48"
                        />
                        <div className="px-4 py-5 sm:p-6">
                            <h3 className="text-lg font-semibold leading-6 text-gray-900">
                                Check out these related articles to learn more.
                            </h3>
                            <p className="mt-2 max-w-2xl text-sm text-gray-500">
                                Brief description of the related article.

                                Check out these related articles to learn more.
                                Check out these related articles to learn more.
                                Check out these related articles to learn more.
                                Check out these related articles to learn more.

                            </p>
                        </div>
                        <div className="px-4 py-4 bg-gray-50 sm:px-6">
                            <a
                                href="#"
                                className="text-base font-semibold text-purple-600 hover:text-purple-500"
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                    {/* Repeat the above card structure for each related article */}

                    {/* You can replace the placeholder content with your actual related articles */}
                </div>
            </div>
        </div>
    </>
}