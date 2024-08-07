import ContactComponents from "@/components/ContactComponents";
import SideBarComponent from "@/components/SideBarComponent";
import SpotMovieSideBarComponent from "@/components/SpotMovieSideBarComponent";

export const metadata = {
    title: "Contact Filmiwood",
    description: "If you have any suggestions or messages for Filmiwood, please feel free to contact us. ",
    keyword: "contact filmiwood"
  };
  


export default function Contact() {
    return <>

        <div className="bg-grey-100 px-6 pt-16 pb-20 flex flex-col md:flex-row">
            {/* First Section (5/6 width) */}
            <div className="w-full md:w-5/6 mb-4 md:mb-0 ">



                {/* Content for the first section */}

                <ContactComponents />

            </div>
            {/* Second Section (1/6 width) */}
            <div className="w-full md:w-1/6 sm:container">


                {/* Content for the second section */}

                <SpotMovieSideBarComponent/>

            </div>
        </div>
    </>
}