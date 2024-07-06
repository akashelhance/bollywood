import BoiTableComponent from "@/components/BioTableComponent"
import CelebDescWithImageComponent from "@/components/CelebDescWithImageComponent"
import PopularPostSideBarComponent from "@/components/PopularPostSideBarComponent"
import SpotCelebSideBarComponent from "@/components/SpotCelebSideBarComponent"
import TabLinkCelebComponent from "@/components/TabLinkCelebComponent"

const apiUrl = process.env.NEXT_PUBLIC_API_URL;


export default async function BiographySlugPage({ params }) {

  async function fetchData() {
    const res = await fetch(`${apiUrl}/api/celebrity/biography/${params.slug}`);

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  }

  const data = await fetchData()

  return <>
  
    <div className="bg-grey-100 px-6 pt-16 pb-20 flex flex-col md:flex-row">
      {/* First Section (5/6 width) */}
      <div className="w-full md:w-5/6 mb-4 md:mb-0 ">


   


        {/* Content for the first section */}
        <div className="max-w-7xl mx-auto p-6 shadow-xl rounded-lg bg-indigo-50">

          <CelebDescWithImageComponent data={data} />

          <TabLinkCelebComponent id={params.slug}  data={data}/>


          <BoiTableComponent data={[data]} />


        </div>


      </div>
      {/* Second Section (1/6 width) */}
      <div className="w-full md:w-1/6 sm:container">


        {/* Content for the second section */}

        <SpotCelebSideBarComponent />
{/* 
        <PopularPostSideBarComponent /> */}


      </div>
    </div>
  </>

}