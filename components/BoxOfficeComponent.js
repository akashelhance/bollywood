import Link from "next/link"
import Image from "next/image"
import BoxOfficeTableComponent from "./BoxOfficeTableComponet"


export default function BoxOfficeComponent() {
  return <>

    <div className="max-w-7xl mx-auto p-6  shadow-xl rounded-lg bg-indigo-50">



      <h1 className="text-4xl font-bold mb-2 text-gray-900">
        BollyWood Box Office Collection 2024 Report & Verdict India
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


      <p className="text-lg text-gray-700 mb-6">

      </p>


     


     <BoxOfficeTableComponent/>


      {/* <div className="flex items-center justify-center mb-6 pt-6">
        <Link href="#" className="bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-lg rounded-b-lg font-bold py-2 px-4 rounded inline-flex items-center transform transition-transform duration-300 shadow-md hover:bg-purple-800 hover:scale-105">
        
          Load More
        </Link>
      </div> */}



  
    </div>
  </>
}