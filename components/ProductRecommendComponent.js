import LoadMore from "./LoadMore";
import Image from "next/image";
import Link from "next/link";

export default function ProductRecommendCardComponent({data}) {
    return <>


<h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-red-500 font-bold pt-8 hover:text-red-700 ">
{data.first_name} {data.last_name} Recommend Products
</h1>
<div className="bg-rose-50 py-8 pb-8">
      <div className="max-w-8xl sm:px-6 lg:px-8">
        {data.products_recommended.map((product) => (
          <div key={product.sku} className="flex flex-col md:flex-row -mx-4 mb-8">
            <div className="md:flex-1 px-4 md:w-1/3">
              <div className="h-auto mx-auto rounded-lg bg-gray-300 dark:bg-gray-700 mb-4 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Image
                 width={100}
                 height={100}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  src={product.product_image}
                  alt="Product Image"
                />
              </div>
            </div>
            <div className="md:flex-2 px-4 md:w-2/3 md:pt-20">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {product.description}
              </p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Price:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {product.price_currency} {product.price}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Likes:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {product.likes}
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Category:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {product.category}
                </span>
              </div>
              <div className="mb-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Brand:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {product.brand}
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Product Description:
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {product.description}
                </p>
                <div className="flex -mx-2 mb-4 pt-8">
                  {product.links.map((link) => (
                    <div key={link.id} className="w-1/2 px-2">
                      <Link href={link.link}
                      className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-lg rounded-b-lg font-bold py-2 px-4 inline-flex items-center justify-center transform transition-transform duration-300 shadow-md hover:bg-purple-800 hover:scale-105">
                          <span className="text-center">View On {link.platform}</span>
                      
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>









    </>
}