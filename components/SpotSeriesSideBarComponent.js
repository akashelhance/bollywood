import Image from "next/image";



const apiUrl = process.env.API_URL;


async function fetchData() {
  const res = await fetch(`${apiUrl}/api/spotlights?fields=webseries`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const final = await res.json();

  return final
}


export default async function SpotSeriesSideBarComponent(){
  
  const webseries= await fetchData()
    return <>
 <div className="border-2 p-2 border-red-800 mb-6">
      <h4 className="px-4 py-2 bg-rose-100 font-bold text-2xl text-center border border-4 border-rose-400">Spot Light Series</h4>
      <ul role="list" className="divide-y divide-gray-100">
    {webseries?.webseries?.map((item, index) => (
      <li key={index} className="flex flex-col md:flex-row justify-between gap-x-6 py-5">
        <div className="flex min-w-0 gap-x-4">
          <Image
           width={100}
           height={100}
            className="h-12 w-12 flex-none rounded-full bg-gray-50"
            src={item.poster}
            alt={item.title}
          />
          <div className="min-w-0 flex-auto">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              {item.title}
            </p>
            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
              {item.genres}
            </p>
          </div>
        </div>
        <div className="hidden md:flex md:flex-col md:items-end">
          <p className="text-sm leading-6 text-gray-900">{item.heading}</p>
          <p className="mt-1 text-xs leading-5 text-gray-500">
            {item.description}
          </p>
        </div>
      </li>
    ))}
  </ul>
    </div>
    </>
}
