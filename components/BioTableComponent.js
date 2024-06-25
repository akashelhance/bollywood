export default function BoiTableComponent({data}){

 

    return <>

{data.map((celebrity) => (
          <h1 key={celebrity.id} className="py-2 px-4 border-b text-center text-lg">{celebrity.first_name} {celebrity.last_name} Biography</h1>
        ))}
<div className="overflow-x-auto">
  <table className="min-w-full bg-white border border-gray-200 mt-12">
    <thead>
      <tr>
        <th className="py-2 px-4 text-center text-xl font-bold bg-teal-50">Attribute</th>
        {data.map((celebrity) => (
          <th key={celebrity.id} className="py-2 px-4 text-center text-xl font-bold bg-teal-50">{celebrity.first_name} {celebrity.last_name} Biography</th>
        ))}
      </tr>
    </thead>
    <tbody>
      <tr className="hover:bg-gray-100 even:bg-gray-50">
        <td className="py-2 px-4 border-b text-center text-lg font-bold">First Name</td>
        {data.map((celebrity) => (
          <td key={celebrity.id} className="py-2 px-4 border-b text-center text-lg">{celebrity.first_name}</td>
        ))}
      </tr>
      <tr className="hover:bg-gray-100 even:bg-gray-50">
        <td className="py-2 px-4 border-b text-center text-lg font-bold">Last Name</td>
        {data.map((celebrity) => (
          <td key={celebrity.id} className="py-2 px-4 border-b text-center text-lg">{celebrity.last_name}</td>
        ))}
      </tr>
      <tr className="hover:bg-gray-100 even:bg-gray-50">
        <td className="py-2 px-4 border-b text-center text-lg font-bold">Industry</td>
        {data.map((celebrity) => (
          <td key={celebrity.id} className="py-2 px-4 border-b text-center text-lg">{celebrity.industry.map(ind => ind.name).join(', ')}</td>
        ))}
      </tr>
      <tr className="hover:bg-gray-100 even:bg-gray-50">
        <td className="py-2 px-4 border-b text-center text-lg font-bold">Role</td>
        {data.map((celebrity) => (
          <td key={celebrity.id} className="py-2 px-4 border-b text-center text-lg">{celebrity.roles.map(role => role.name).join(', ')}</td>
        ))}
      </tr>
      <tr className="hover:bg-gray-100 even:bg-gray-50">
        <td className="py-2 px-4 border-b text-center text-lg font-bold">Nickname</td>
        {data.map((celebrity) => (
          <td key={celebrity.id} className="py-2 px-4 border-b text-center text-lg">{celebrity.biography.nickname}</td>
        ))}
      </tr>
      <tr className="hover:bg-gray-100 even:bg-gray-50">
        <td className="py-2 px-4 border-b text-center text-lg font-bold">Date of Birth</td>
        {data.map((celebrity) => (
          <td key={celebrity.id} className="py-2 px-4 border-b text-center text-lg">{celebrity.biography.date_of_birth}</td>
        ))}
      </tr>
      <tr className="hover:bg-gray-100 even:bg-gray-50">
        <td className="py-2 px-4 border-b text-center text-lg font-bold">BirthPlace</td>
        {data.map((celebrity) => (
          <td key={celebrity.id} className="py-2 px-4 border-b text-center text-lg">{celebrity.biography.birthplace}</td>
        ))}
      </tr>
      <tr className="hover:bg-gray-100 even:bg-gray-50">
        <td className="py-2 px-4 border-b text-center text-lg font-bold">School</td>
        {data.map((celebrity) => (
          <td key={celebrity.id} className="py-2 px-4 border-b text-center text-lg">{celebrity.biography.school}</td>
        ))}
      </tr>
      <tr className="hover:bg-gray-100 even:bg-gray-50">
        <td className="py-2 px-4 border-b text-center text-lg font-bold">College</td>
        {data.map((celebrity) => (
          <td key={celebrity.id} className="py-2 px-4 border-b text-center text-lg">{celebrity.biography.college}</td>
        ))}
      </tr>
      <tr className="hover:bg-gray-100 even:bg-gray-50">
        <td className="py-2 px-4 border-b text-center text-lg font-bold">Education Qualification</td>
        {data.map((celebrity) => (
          <td key={celebrity.id} className="py-2 px-4 border-b text-center text-lg">{celebrity.biography.education_qualification}</td>
        ))}
      </tr>
      <tr className="hover:bg-gray-100 even:bg-gray-50">
        <td className="py-2 px-4 border-b text-center text-lg font-bold">Ethnicity</td>
        {data.map((celebrity) => (
          <td key={celebrity.id} className="py-2 px-4 border-b text-center text-lg">{celebrity.biography.ethnicity}</td>
        ))}
      </tr>
      <tr className="hover:bg-gray-100 even:bg-gray-50">
        <td className="py-2 px-4 border-b text-center text-lg font-bold">Net Worth</td>
        {data.map((celebrity) => (
          <td key={celebrity.id} className="py-2 px-4 border-b text-center text-lg">{celebrity.biography.net_worth} {celebrity.biography.net_worth_currency}</td>
        ))}
      </tr>
      <tr className="hover:bg-gray-100 even:bg-gray-50">
        <td className="py-2 px-4 border-b text-center text-lg font-bold">Nationality</td>
        {data.map((celebrity) => (
          <td key={celebrity.id} className="py-2 px-4 border-b text-center text-lg">{celebrity.biography.nationality}</td>
        ))}
      </tr>
      <tr className="hover:bg-gray-100 even:bg-gray-50">
        <td className="py-2 px-4 border-b text-center text-lg font-bold">Height</td>
        {data.map((celebrity) => (
          <td key={celebrity.id} className="py-2 px-4 border-b text-center text-lg">{celebrity.biography.height}</td>
        ))}
      </tr>
      <tr className="hover:bg-gray-100 even:bg-gray-50">
        <td className="py-2 px-4 border-b text-center text-lg font-bold">Eye Color</td>
        {data.map((celebrity) => (
          <td key={celebrity.id} className="py-2 px-4 border-b text-center text-lg">{celebrity.biography.eye_color}</td>
        ))}
      </tr>
      <tr className="hover:bg-gray-100 even:bg-gray-50">
        <td className="py-2 px-4 border-b text-center text-lg font-bold">Hair Color</td>
        {data.map((celebrity) => (
          <td key={celebrity.id} className="py-2 px-4 border-b text-center text-lg">{celebrity.biography.hair_color}</td>
        ))}
      </tr>
      <tr className="hover:bg-gray-100 even:bg-gray-50">
        <td className="py-2 px-4 border-b text-center text-lg font-bold">Favorite Food</td>
        {data.map((celebrity) => (
          <td key={celebrity.id} className="py-2 px-4 border-b text-center text-lg">{celebrity.biography.favorite_food}</td>
        ))}
      </tr>
      <tr className="hover:bg-gray-100 even:bg-gray-50">
        <td className="py-2 px-4 border-b text-center text-lg font-bold">Instagram Followers</td>
        {data.map((celebrity) => (
          <td key={celebrity.id} className="py-2 px-4 border-b text-center text-lg">{celebrity.biography.instagram_followers}</td>
        ))}
      </tr>
      <tr className="hover:bg-gray-100 even:bg-gray-50">
        <td className="py-2 px-4 border-b text-center text-lg font-bold">Instagram</td>
        {data.map((celebrity) => (
          <td key={celebrity.id} className="py-2 px-4 border-b text-center text-lg">{celebrity.biography.instagram ? <a href={celebrity.biography.instagram} className="text-blue-500">Profile</a> : 'N/A'}</td>
        ))}
      </tr>
      <tr className="hover:bg-gray-100 even:bg-gray-50">
        <td className="py-2 px-4 border-b text-center text-lg font-bold">Twitter</td>
        {data.map((celebrity) => (
          <td key={celebrity.id} className="py-2 px-4 border-b text-center text-lg">{celebrity.biography.twitter ? <a href={celebrity.biography.twitter} className="text-blue-500">Profile</a> : 'N/A'}</td>
        ))}
      </tr>
      <tr className="hover:bg-gray-100 even:bg-gray-50">
        <td className="py-2 px-4 border-b text-center text-lg font-bold">Facebook</td>
        {data.map((celebrity) => (
          <td key={celebrity.id} className="py-2 px-4 border-b text-center text-lg">{celebrity.biography.facebook ? <a href={celebrity.biography.facebook} className="text-blue-500">Profile</a> : 'N/A'}</td>
        ))}
      </tr>
      <tr className="hover:bg-gray-100 even:bg-gray-50">
        <td className="py-2 px-4 border-b text-center text-lg font-bold">YouTube</td>
        {data.map((celebrity) => (
          <td key={celebrity.id} className="py-2 px-4 border-b text-center text-lg">{celebrity.biography.youtube ? <a href={celebrity.biography.youtube} className="text-blue-500">Channel</a> : 'N/A'}</td>
        ))}
      </tr>
    </tbody>
  </table>
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