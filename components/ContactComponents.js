import Link from "next/link"
import Image from "next/image"
import ContactFormComponent from "./ContactFormComponent"

export default function ContactComponents(){
    return <>
  <div className="max-w-7xl mx-auto p-6  shadow-xl rounded-lg bg-teal-50">



<h1 className="text-4xl font-bold mb-2 text-gray-900 pb-4">


  Contact US:
</h1>




<div className="flex items-center mb-4">
  <Link href="/author">
    <Image
     width={100}
     height={100}
      src="https://via.placeholder.com/40"
      alt="Author Image"
      className="w-10 h-10 rounded-full mr-4"
    /></Link>
  <div>
    <Link href="/author">
      <p className="text-gray-900 font-semibold">John Doe</p>
    </Link>
    <p className="text-gray-600 text-sm">May 28, 2024</p>
  </div>
</div>


<hr className="bg-purple-700 mt-2 mb-6" />


<p className="text-xl text-gray-900 mb-6">
  frequently use their prominenw attention to important social problems and enhance society. Hollywood celebrities as well as South Indian (Tamil, Telugu, Kannada, and Malayalam) and Bollywood industry celebrities are included here, providing the most recent stuff. Check out this website for the birthdays of your favourite South Indian, Hollywood, and Bollywood celebrities.
</p>


<ContactFormComponent/>

</div>
    </>
}