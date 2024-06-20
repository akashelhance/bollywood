import BoiTableComponent from "@/components/BioTableComponent"
import CelebDescWithImageComponent from "@/components/CelebDescWithImageComponent"
import PopularPostSideBarComponent from "@/components/PopularPostSideBarComponent"
import SpotCelebSideBarComponent from "@/components/SpotCelebSideBarComponent"
import TabLinkCelebComponent from "@/components/TabLinkCelebComponent"

export default function BiographySlugPage({params}){
    const data = 
        {
          id: 1,
          image: "http://localhost:8000/celebrities/read-recommend-logo.png",
          industry: [
            {
              id: 1,
              name: "Bollywood",
              name_slug: "bollywood"
            },
            {
                id: 2,
                name: "Tollywood",
                name_slug: "tollywood"
              }
          ],
          roles: [
            {
              id: 1,
              name: "ACTOR",
              name_slug: "actor"
            }
          ],
          biography: {
            id: 1,
            image: "http://localhost:8000/celebrities/456.png",
            nickname: "ak",
            date_of_birth: "2024-06-09",
            date_of_death: null,
            marital_status: "Single",
            nationality: "Indian",
            gender: "Male",
            net_worth_currency: "USD",
            net_worth: "100000000.00",
            height: "135 cm",
            eye_color: "black",
            hair_color: "black",
            birthplace: "Moradabad",
            zodiac_sign: "Gemini",
            hometown: "hardoi",
            school: "SSCA",
            college: "KITE",
            education_qualification: "Btech",
            ethnicity: "North Indian",
            vegetarian: false,
            favorite_food: "Butter Chicken, Nutton",
            website: "http://readrecommend.com",
            instagram_followers: 32,
            instagram: null,
            twitter: null,
            facebook: null,
            youtube: null
          },
          first_name: "Akash",
          last_name: "Elhance",
          celebrity_slug: "akash-elhance",
          description: "Desc Desc 5",
          is_published: true,
          created_at: "2024-06-08T12:43:08.312674Z",
          updated_at: "2024-06-09T08:26:20.333593Z"
        }
      ;

    return    <div className="bg-grey-100 px-6 pt-16 pb-20 flex flex-col md:flex-row">
    {/* First Section (5/6 width) */}
    <div className="w-full md:w-5/6 mb-4 md:mb-0 ">





        {/* Content for the first section */}
        <div className="max-w-8xl  p-6 shadow-xl rounded-lg bg-orange-50">
    
            <CelebDescWithImageComponent data={data} />

            <TabLinkCelebComponent id={params.slug}/>


            <BoiTableComponent data={[data]}/>


      





        </div>


    </div>
    {/* Second Section (1/6 width) */}
    <div className="w-full md:w-1/6 sm:container">


        {/* Content for the second section */}

        <SpotCelebSideBarComponent />

        <PopularPostSideBarComponent />


    </div>
</div>
}