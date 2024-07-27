import Link from "next/link"
import Image from "next/image"

export default function CarCollectionPostComponent() {
    return <>

        <div className="mx-auto shadow-xl rounded-lg bg-rose-50">
            {/* Full-width Image */}


            {/* Blog Title */}
            <h1 className="text-4xl p-4 font-bold mb-2 text-gray-900">Best Platform for Affiliate Marketing in India 2024| Earn Money Online</h1>

            {/* Blog Categories */}
            <div className="text-gray-900 p-4 font-semibold text-lg mb-4 pt-2">
                Categories:
                <Link href="#" className="text-purple-900 font-bold">Affiliate Marketing</Link> |
                <Link href="#" className="text-purple-900 font-bold">Online Earning</Link> |
                <Link href="#" className="text-purple-900 font-bold">India 2024</Link>
            </div>







            <div className="max-w-screen-lg mx-auto p-4">
                <Image
                    width={100}
                    height={100}
                    src="https://source.unsplash.com/random/1200x800"
                    alt="Featured Image"
                    className="w-full h-auto shadow-lg rounded-md"
                />
            </div>



            <hr className="bg-purple-700 mt-2 mb-6" />

            {/* Blog Description */}
            <p className="text-lg text-gray-700 mb-6">
                Affiliate marketing is the best way to earn extra money. In affiliate marketing, you need to share the product link that you like with your friends and family. Suppose you are a content creator, then there is a high chance that you can make huge money using affiliate marketing as you have a larger audience with whom you can share the affiliate link. In this article, we will discuss the best platform for affiliate marketing.
            </p>

            <p className="text-lg text-gray-700 mb-6">
                The best part about affiliate marketing is that you can do it part-time as well. You can do affiliate marketing along with your job or your business. If you are a content creator, then by using affiliate marketing, you can start earning more. If you are a student, then I suggest you start working on affiliate marketing to start earning.
            </p>

            <h2 className="text-2xl font-bold mb-2 text-gray-900">Best Platform for Affiliate Marketing:</h2>

            <p className="text-lg text-gray-700 mb-6">
                Affiliate marketing is the best way to earn extra money. In affiliate marketing, you need to share the product link that you like with your friends and family. Suppose you are a content creator, then there is a high chance that you can make huge money using affiliate marketing as you have a larger audience with whom you can share the affiliate link. In this article, we will discuss the best platform for affiliate marketing.
            </p>

            <p className="text-lg text-gray-700 mb-6">
                The best part about affiliate marketing is that you can do it part-time as well. You can do affiliate marketing along with your job or your business. If you are a content creator, then by using affiliate marketing, you can start earning more. If you are a student, then I suggest you start working on affiliate marketing to start earning.
            </p>




            <div className="flex items-center justify-center mb-6">
                <Link href="#" className="bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-lg rounded-b-lg font-bold py-2 px-4 rounded inline-flex items-center transform transition-transform duration-300 shadow-md hover:bg-purple-800 hover:scale-105">


                    Affiliate Link

                </Link>

            </div>

            <h2 className="text-2xl font-bold mb-2 text-gray-900">How To Promote Affiliate Products:</h2>

            <p className="text-lg text-gray-700 mb-6">
                Affiliate marketing is the best way to earn extra money. In affiliate marketing, you need to share the product link that you like with your friends and family. Suppose you are a content creator, then there is a high chance that you can make huge money using affiliate marketing as you have a larger audience with whom you can share the affiliate link. In this article, we will discuss the best platform for affiliate marketing.
            </p>

            <div className="max-w-screen-md mx-auto p-4">
                <Image
                    src="https://source.unsplash.com/random/800x600?sig=1"
                    alt="Blog Image 1"
                    className="w-full h-auto shadow-md rounded-md mb-4"
                />

            </div>


            <p className="text-lg text-gray-700 mb-6">
                The best part about affiliate marketing is that you can do it part-time as well. You can do affiliate marketing along with your job or your business. If you are a content creator, then by using affiliate marketing, you can start earning more. If you are a student, then I suggest you start working on affiliate marketing to start earning.
            </p>

            {/* Tags Button */}
            <div className="flex flex-wrap gap-2">
                <Link href="#" className="bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-lg rounded-b-lg font-bold py-2 px-4 rounded inline-flex items-center transform transition-transform duration-300 shadow-md hover:bg-purple-800 hover:scale-105">Affiliate Marketing</Link>

            </div>
        </div>

    </>
}