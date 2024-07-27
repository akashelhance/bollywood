
import CelebDescWithImageComponent from "@/components/CelebDescWithImageComponent"
import LoadMore from "@/components/LoadMore"
import PopularPostSideBarComponent from "@/components/PopularPostSideBarComponent"
import ProductRecommendCardComponent from "@/components/ProductRecommendComponent"

import SpotCelebSideBarComponent from "@/components/SpotCelebSideBarComponent"
import TabLinkCelebComponent from "@/components/TabLinkCelebComponent"
import Link from "next/link"

const apiUrl = process.env.API_URL;

export default async function productRecommendSlugPage({ params }) {

  async function fetchData() {
    const res = await fetch(`${apiUrl}/api/products/celebrity/${params.slug}` , { cache: 'no-cache', next: { revalidate: 0 }});
  
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
  
    return res.json();
  }

  const data= await fetchData()
    return <>

        <div className="bg-grey-100 px-6 pt-16 pb-20 flex flex-col md:flex-row">
            {/* First Section (5/6 width) */}
            <div className="w-full md:w-5/6 mb-4 md:mb-0 ">





                {/* Content for the first section */}
                <div className="max-w-8xl  p-6  shadow-xl rounded-lg bg-orange-50">
                
                    <CelebDescWithImageComponent data ={data}/>



                    <TabLinkCelebComponent  id={params.slug} />

                    {/* Content for the Product Recommend section */}
                        <ProductRecommendCardComponent data={data}/>
                        

                   
                    <LoadMore />


                </div>


            </div>
            {/* Second Section (1/6 width) */}
            <div className="w-full md:w-1/6 sm:container">


                {/* Content for the second section */}

                <SpotCelebSideBarComponent />

                {/* <PopularPostSideBarComponent /> */}


            </div>
        </div>



    </>
}