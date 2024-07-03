import Link from "next/link"

export default function AboutComponents(){
    return <>
      <div className="max-w-7xl mx-auto p-6  shadow-xl rounded-lg bg-teal-50">



<h1 className="text-4xl font-bold mb-2 text-gray-900 pb-4">


  About FilmiWood:
</h1>




<div className="flex items-center mb-4">
  <Link href="/author">
    <img
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

Filmiwood is a blogging website where we mainly post articles related to Bollywood and Hollywood. Filmiwood, which aims to provide information about films, web series, box office updates, celebrities and influencer biographies. We constantly updating the data and and regularly post the articles.

</p>

<p className="text-xl text-gray-900 mb-6">


We want to become one full complete solution to get all the information about movies and web series.
We always try to provide the accurate information and data and post genuine articles. 

But if you think whatever the data we have provided or written the article is not correct. 

Please drop a <Link href="mailto:filmiwood616@gmail.com" className="text-rose-800"> mail </Link>
 or <Link href="/contact" className="text-rose-800">Contact Us </Link>


</p>


</div>
    </>
}