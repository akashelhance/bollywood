
import CelebDescWithImageComponent from "@/components/CelebDescWithImageComponent"
import LoadMore from "@/components/LoadMore"
import PopularPostSideBarComponent from "@/components/PopularPostSideBarComponent"
import ProductRecommendCardComponent from "@/components/ProductRecommendComponent"

import SpotCelebSideBarComponent from "@/components/SpotCelebSideBarComponent"
import TabLinkCelebComponent from "@/components/TabLinkCelebComponent"
import Link from "next/link"


export default function productRecommendSlugPage({ params }) {

    const data =
        {
          "id": 1,
          "image": "http://localhost:8000/celebrities/read-recommend-logo.png",
          "industry": [
            {
              "id": 1,
              "name": "Bollywood",
              "name_slug": "bollywood"
            }
          ],
          "roles": [
            {
              "id": 1,
              "name": "ACTOR",
              "name_slug": "actor"
            }
          ],
          "products_recommended": [
            {
              "recommendation_reason": "Because he likes it",
              "name": "product-1",
              "description": "dfgtrkldskjsnksdndskbjfk",
              "price": 450,
              "price_currency": "USD",
              "product_image": "http://localhost:8000",
              "category": "Bla-bla, cata-cat",
              "brand": "Nike",
              "sku": "435",
              "likes": 10,
              "links": [
                {
                  "id": 1,
                  "platform": "Amazon",
                  "link": "http://aaharaannapoorna.com/",
                  "product": 1
                }
              ]
            }
          ],
          "first_name": "Akash",
          "last_name": "Elhance",
          "celebrity_slug": "akash-elhance",
          "description": "Desc Desc 5",
          "is_published": true,
          "created_at": "2024-06-08T12:43:08.312674Z",
          "updated_at": "2024-06-09T08:26:20.333593Z"
        }
      


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

                <PopularPostSideBarComponent />


            </div>
        </div>



    </>
}