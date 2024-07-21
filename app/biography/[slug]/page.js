import BoiTableComponent from "@/components/BioTableComponent"
import CelebCovComponent from "@/components/CelebCovComponent";
import CelebDescWithImageComponent from "@/components/CelebDescWithImageComponent"
import CelebFactComponent from "@/components/CelebFactComponent";
import CelebFaqComponent from "@/components/CelebFaqComponent";
import CelebRelComponent from "@/components/CelebRelComponent";
import SpotCelebSideBarComponent from "@/components/SpotCelebSideBarComponent"
import TabLinkCelebComponent from "@/components/TabLinkCelebComponent"

const apiUrl = process.env.NEXT_PUBLIC_API_URL;


export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  let id = params.slug;
  const string = "Age, Height, Relationship, Biography, Facts";
  const biography = "Biography"
  
 
  const result = id + " " + string + "|" + id + " " + biography
 
  return {
    title: result ,
    description: "In this article ",
    keywords: ""
  
  }
}



export default async function BiographySlugPage({ params }) {

  async function fetchData() {
    const res = await fetch(`${apiUrl}/api/celebrity/biography/${params.slug}`);

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();

  }


  async function fetchFactsAndFaq() {
    const res = await fetch(`${apiUrl}/api/celebrity/facts/${params.slug}`);

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  }

  const data = await fetchData()


  const FactsAndFAQ = await fetchFactsAndFaq()

  const FAQ = FactsAndFAQ.celebrity_FQ;

  const Fact = FactsAndFAQ.celebrity_facts



  return <>
    


    <div className="bg-grey-100 px-6 pt-16 pb-20 flex flex-col md:flex-row">
      {/* First Section (5/6 width) */}
      <div className="w-full md:w-5/6 mb-4 md:mb-0 ">





        {/* Content for the first section */}
        <div className="max-w-7xl mx-auto p-6 shadow-xl rounded-lg bg-indigo-50">

          <CelebDescWithImageComponent data={data} />

          <TabLinkCelebComponent id={params.slug} data={data} />


          <BoiTableComponent data={[data]} />

          {data.biography?.celebrity_controversies && data.biography?.celebrity_controversies.length >0 && <CelebCovComponent controversies={data.biography.celebrity_controversies} data={data} />}
          {/* <CelebRelComponent relationship={data.biography.celebrity_relationship} data={data} /> */}

         { Fact?.length > 0 && <CelebFactComponent celebrityFacts={Fact} data={data} />}

        { FAQ?.length > 0 && <CelebFaqComponent faqs={FAQ} data={[data]} />}

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