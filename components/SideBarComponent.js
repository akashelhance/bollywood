import Link from "next/link"
import PopularPostSideBarComponent from "./PopularPostSideBarComponent"

export default function SideBarComponent() {
  return <>

<div>
<PopularPostSideBarComponent/>

  <div className="grid md:grid-cols-1 sm:grid-cols-2 gap-4 pt-4 pb-4">
  <h4 className="px-4 py-2 bg-rose-100 font-bold text-2xl text-center border border-4 border-orange-300 sm:hidden md:block"> More Artciles</h4>
  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out">
    <img src="https://via.placeholder.com/300" alt="Post Image" className="w-full h-auto max-w-xs mx-auto" />
    <div className="p-4">
     
      <p className="text-gray-900 font-sem-bold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </div>
  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out">
    <img src="https://via.placeholder.com/300" alt="Post Image" className="w-full h-auto max-w-xs mx-auto" />
    <div className="p-4">
     
      <p className="text-gray-900 font-sem-bold">
     

Read more at: https://www.filmibeat.com/television/news/2024/bhuvan-bam-bb-ki-vines-character-titu-mama-gets-trademarked-know-what-it-means-398685.html
      </p>
    </div>
  </div>

</div>

</div>



  </>
}