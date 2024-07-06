import Link from "next/link"
import Image from "next/image"

export default function BoiTableComponent({data}){

    return <>

{data.map((celebrity) => (
          <h1 key={celebrity.id} className="text-2xl font-bold mb-2 text-gray-900 py-2 px-4 border-b text-center hover:text-rose-500">{celebrity.first_name} {celebrity.last_name} Age, Height, Weight, Wiki, Biography, Family, And More
</h1>
        ))}

<div className="overflow-x-auto">
  <table className="min-w-full bg-white border-4 border-rose-800 mt-12">
    <thead>
      <tr>
        <th className="py-3 px-4 text-center text-xl font-bold bg-indigo-100 border-b border-rose-600">Attribute</th>
        {data.map((celebrity) => (
          <th key={celebrity.id} className="py-3 px-4 text-center text-xl font-bold bg-indigo-100 border-b border-rose-600">{celebrity.first_name} {celebrity.last_name} Biography</th>
        ))}
      </tr>
    </thead>
    <tbody>
      <tr className="hover:bg-gray-100 even:bg-gray-50">
        <td className="py-3 px-4 border-b border-rose-300 text-center text-lg font-bold">First Name</td>
        {data.map((celebrity) => (
          <td key={celebrity.id} className="py-3 px-4 border-b border-rose-300 text-center text-lg">{celebrity.first_name || 'NaN'}</td>
        ))}
      </tr>
      <tr className="hover:bg-gray-100 even:bg-gray-50">
        <td className="py-3 px-4 border-b border-rose-300 text-center text-lg font-bold">Last Name</td>
        {data.map((celebrity) => (
          <td key={celebrity.id} className="py-3 px-4 border-b border-rose-300 text-center text-lg">{celebrity.last_name || 'NaN'}</td>
        ))}
      </tr>
      <tr className="hover:bg-gray-100 even:bg-gray-50">
        <td className="py-3 px-4 border-b border-rose-300 text-center text-lg font-bold">Industry</td>
        {data.map((celebrity) => (
          <td key={celebrity.id} className="py-3 px-4 border-b border-rose-300 text-center text-lg">{celebrity.industry ? celebrity.industry.map(ind => ind.name).join(', ') : 'NaN'}</td>
        ))}
      </tr>
      <tr className="hover:bg-gray-100 even:bg-gray-50">
        <td className="py-3 px-4 border-b border-rose-300 text-center text-lg font-bold">Role</td>
        {data.map((celebrity) => (
          <td key={celebrity.id} className="py-3 px-4 border-b border-rose-300 text-center text-lg">{celebrity.roles ? celebrity.roles.map(role => role.name).join(', ') : 'NaN'}</td>
        ))}
      </tr>
      <tr className="hover:bg-gray-100 even:bg-gray-50">
        <td className="py-3 px-4 border-b border-rose-300 text-center text-lg font-bold">Nickname</td>
        {data.map((celebrity) => (
          <td key={celebrity.id} className="py-3 px-4 border-b border-rose-300 text-center text-lg">{celebrity.biography.nickname || 'NaN'}</td>
        ))}
      </tr>
      <tr className="hover:bg-gray-100 even:bg-gray-50">
        <td className="py-3 px-4 border-b border-rose-300 text-center text-lg font-bold">Date of Birth</td>
        {data.map((celebrity) => (
          <td key={celebrity.id} className="py-3 px-4 border-b border-rose-300 text-center text-lg">{celebrity.biography.date_of_birth || 'NaN'}</td>
        ))}
      </tr>
      <tr className="hover:bg-gray-100 even:bg-gray-50">
        <td className="py-3 px-4 border-b border-rose-300 text-center text-lg font-bold">BirthPlace</td>
        {data.map((celebrity) => (
          <td key={celebrity.id} className="py-3 px-4 border-b border-rose-300 text-center text-lg">{celebrity.biography.birthplace || 'NaN'}</td>
        ))}
      </tr>
      <tr className="hover:bg-gray-100 even:bg-gray-50">
        <td className="py-3 px-4 border-b border-rose-300 text-center text-lg font-bold">School</td>
        {data.map((celebrity) => (
          <td key={celebrity.id} className="py-3 px-4 border-b border-rose-300 text-center text-lg">{celebrity.biography.school || 'NaN'}</td>
        ))}
      </tr>
      <tr className="hover:bg-gray-100 even:bg-gray-50">
        <td className="py-3 px-4 border-b border-rose-300 text-center text-lg font-bold">College</td>
        {data.map((celebrity) => (
          <td key={celebrity.id} className="py-3 px-4 border-b border-rose-300 text-center text-lg">{celebrity.biography.college || 'NaN'}</td>
        ))}
      </tr>
      <tr className="hover:bg-gray-100 even:bg-gray-50">
        <td className="py-3 px-4 border-b border-rose-300 text-center text-lg font-bold">Education Qualification</td>
        {data.map((celebrity) => (
          <td key={celebrity.id} className="py-3 px-4 border-b border-rose-300 text-center text-lg">{celebrity.biography.education_qualification || 'NaN'}</td>
        ))}
      </tr>
      <tr className="hover:bg-gray-100 even:bg-gray-50">
        <td className="py-3 px-4 border-b border-rose-300 text-center text-lg font-bold">Ethnicity</td>
        {data.map((celebrity) => (
          <td key={celebrity.id} className="py-3 px-4 border-b border-rose-300 text-center text-lg">{celebrity.biography.ethnicity || 'NaN'}</td>
        ))}
      </tr>
      <tr className="hover:bg-gray-100 even:bg-gray-50">
        <td className="py-3 px-4 border-b border-rose-300 text-center text-lg font-bold">Net Worth</td>
        {data.map((celebrity) => (
          <td key={celebrity.id} className="py-3 px-4 border-b border-rose-300 text-center text-lg">{celebrity.biography.net_worth ? `${celebrity.biography.net_worth} ${celebrity.biography.net_worth_currency}` : 'NaN'}</td>
        ))}
      </tr>
      <tr className="hover:bg-gray-100 even:bg-gray-50">
        <td className="py-3 px-4 border-b border-rose-300 text-center text-lg font-bold">Nationality</td>
        {data.map((celebrity) => (
          <td key={celebrity.id} className="py-3 px-4 border-b border-rose-300 text-center text-lg">{celebrity.biography.nationality || 'NaN'}</td>
        ))}
      </tr>
      <tr className="hover:bg-gray-100 even:bg-gray-50">
        <td className="py-3 px-4 border-b border-rose-300 text-center text-lg font-bold">Height</td>
        {data.map((celebrity) => (
          <td key={celebrity.id} className="py-3 px-4 border-b border-rose-300 text-center text-lg">{celebrity.biography.height || 'NaN'}</td>
        ))}
      </tr>
      <tr className="hover:bg-gray-100 even:bg-gray-50">
        <td className="py-3 px-4 border-b border-rose-300 text-center text-lg font-bold">Eye Color</td>
        {data.map((celebrity) => (
          <td key={celebrity.id} className="py-3 px-4 border-b border-rose-300 text-center text-lg">{celebrity.biography.eye_color || 'NaN'}</td>
        ))}
      </tr>
      <tr className="hover:bg-gray-100 even:bg-gray-50">
        <td className="py-3 px-4 border-b border-rose-300 text-center text-lg font-bold">Hair Color</td>
        {data.map((celebrity) => (
          <td key={celebrity.id} className="py-3 px-4 border-b border-rose-300 text-center text-lg">{celebrity.biography.hair_color || 'NaN'}</td>
        ))}
      </tr>
      <tr className="hover:bg-gray-100 even:bg-gray-50">
        <td className="py-3 px-4 border-b border-rose-300 text-center text-lg font-bold">Favorite Food</td>
        {data.map((celebrity) => (
          <td key={celebrity.id} className="py-3 px-4 border-b border-rose-300 text-center text-lg">{celebrity.biography.favorite_food || 'NaN'}</td>
        ))}
      </tr>
      <tr className="hover:bg-gray-100 even:bg-gray-50">
        <td className="py-3 px-4 border-b border-rose-300 text-center text-lg font-bold">Instagram Followers</td>
        {data.map((celebrity) => (
          <td key={celebrity.id} className="py-3 px-4 border-b border-rose-300 text-center text-lg">{celebrity.biography.instagram_followers || 'NaN'}</td>
        ))}
      </tr>
    </tbody>
  </table>
</div>



{data.map((celebrity) => (
          <h2 key={celebrity.id} className="pt-4 text-2xl font-bold mb-2 text-gray-900 py-2 px-4 border-b text-center hover:text-rose-500">{celebrity.first_name} {celebrity.last_name} Social Media Accounts
</h2>
        ))}

<div className="overflow-x-auto">
  <div className="hidden md:block">
    <table className="min-w-full bg-white border-4 border-rose-800 mt-12">
      <thead>
        <tr>
          <th className="py-2 px-4 text-center text-xl font-bold bg-indigo-100">Celeb Name</th>
          <th className="py-2 px-4 text-center text-xl font-bold bg-indigo-100">Instagram</th>
          <th className="py-2 px-4 text-center text-xl font-bold bg-indigo-100">Twitter</th>
          <th className="py-2 px-4 text-center text-xl font-bold bg-indigo-100">Facebook</th>
          <th className="py-2 px-4 text-center text-xl font-bold bg-indigo-100">YouTube</th>
        </tr>
      </thead>
      <tbody>
        {data.map((celebrity) => (
          <tr key={celebrity.id} className="hover:bg-gray-100 even:bg-gray-50">
            <td className="py-2 px-4 border-b text-center text-lg font-bold">
              {celebrity.first_name} {celebrity.last_name}
            </td>
            <td className="py-2 px-4 border-b text-center text-lg">
              {celebrity.biography.instagram ? (
                <Link href={celebrity.biography.instagram} className="text-blue-500">Profile</Link>
              ) : 'NaN'}
            </td>
            <td className="py-2 px-4 border-b text-center text-lg">
              {celebrity.biography.twitter ? (
                <Link href={celebrity.biography.twitter} className="text-blue-500">Profile</Link>
              ) : 'NaN'}
            </td>
            <td className="py-2 px-4 border-b text-center text-lg">
              {celebrity.biography.facebook ? (
                <Link href={celebrity.biography.facebook} className="text-blue-500">Profile</Link>
              ) : 'NaN'}
            </td>
            <td className="py-2 px-4 border-b text-center text-lg">
              {celebrity.biography.youtube ? (
                <Link href={celebrity.biography.youtube} className="text-blue-500">Channel</Link>
              ) : 'NaN'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <div className="md:hidden">
    {data.map((celebrity) => (
      <div key={celebrity.id} className="border border-gray-200 bg-white mb-4">
        <div className="bg-indigo-100 py-2 px-4 text-center text-xl font-bold">
          {celebrity.first_name} {celebrity.last_name}
        </div>
        <div className="py-2 px-4 border-b text-lg">
          <span className="font-bold">Instagram:</span> {celebrity.biography.instagram ? (
            <Link href={celebrity.biography.instagram} className="text-blue-500">Profile</Link>
          ) : 'NaN'}
        </div>
        <div className="py-2 px-4 border-b text-lg">
          <span className="font-bold">Twitter:</span> {celebrity.biography.twitter ? (
            <Link href={celebrity.biography.twitter} className="text-blue-500">Profile</Link>
          ) : 'NaN'}
        </div>
        <div className="py-2 px-4 border-b text-lg">
          <span className="font-bold">Facebook:</span> {celebrity.biography.facebook ? (
            <Link href={celebrity.biography.facebook} className="text-blue-500">Profile</Link>
          ) : 'NaN'}
        </div>
        <div className="py-2 px-4 border-b text-lg">
          <span className="font-bold">YouTube:</span> {celebrity.biography.youtube ? (
            <Link href={celebrity.biography.youtube} className="text-blue-500">Channel</Link>
          ) : 'NaN'}
        </div>
      </div>
    ))}
  </div>
</div>




{/* <div className="overflow-x-auto mt-8">
  <table className="min-w-full bg-white border border-gray-200">
    <thead>
      <tr>
        <th className="py-2 px-4 border-b text-center text-lg">Attribute</th>
        {data.map((celebrity) => (
          <th key={celebrity.id} className="py-2 px-4 border-b text-center text-lg">{celebrity.first_name} {celebrity.last_name}</th>
        ))}
      </tr>
    </thead>
    <tbody>
 
    </tbody>
  </table>
</div> */}


    </>
}