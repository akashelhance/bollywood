import Link from "next/link"
import Image from "next/image"

export default function BoiTableComponent({ data }) {

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
              <th key={celebrity.id} className="py-3 px-4 text-center text-xl font-bold bg-indigo-100 border-b border-rose-600">
                {celebrity.first_name} {celebrity.last_name} Biography
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            { label: 'First Name', key: 'first_name' },
            { label: 'Last Name', key: 'last_name' },
            { label: 'Industry', key: 'industry', isNested: true, nestedKey: 'name' },
            { label: 'Role', key: 'roles', isNested: true, nestedKey: 'name' },
            { label: 'Nickname', key: 'biography.nickname' },
            { label: 'Date of Birth', key: 'biography.date_of_birth' },
            { label: 'Birthplace', key: 'biography.birthplace' },
            { label: 'School', key: 'biography.school' },
            { label: 'College', key: 'biography.college' },
            { label: 'Education Qualification', key: 'biography.education_qualification' },
            { label: 'Ethnicity', key: 'biography.ethnicity' },
            { label: 'Religion', key: 'biography.religion' },
            { label: 'Caste', key: 'biography.caste' },
            { label: 'Hobbies', key: 'biography.hobbies' },
            { label: 'Vegetarian', key: 'biography.vegetarian' },

            { label: 'Net Worth (in Crores)', key: 'biography.net_worth_in_crores' },
            { label: 'Net Worth (in Millions)', key: 'biography.net_worth_in_millions' },
            { label: 'Net Worth Currency', key: 'biography.net_worth_currency' },
            { label: 'Instagram Followers', key: 'biography.instagram_followers' },
            { label: 'Salary per Film (in Crores)', key: 'biography.salary_per_film_in_crores' },
            { label: 'Salary per Film (in Millions)', key: 'biography.salary_per_film_in_millions' },
            { label: 'Salary Currency', key: 'biography.salary_currency' },
            { label: 'Salary Note', key: 'biography.salary_note' },
            { label: 'Height', key: 'biography.height' },
            { label: 'Eye Color', key: 'biography.eye_color' },
            { label: 'Hair Color', key: 'biography.hair_color' },
            { label: 'Chest', key: 'biography.chest' },
            { label: 'Waist', key: 'biography.waist' },
            { label: 'Biceps', key: 'biography.biceps' },
            { label: 'Body Figure', key: 'biography.body_figure' },
            { label: 'Nationality', key: 'biography.nationality' },
            { label: 'Zodiac Sign', key: 'biography.zodiac_sign' },
            { label: 'Hometown', key: 'biography.hometown' },


          ].map((attr) => (
            <tr key={attr.label} className="hover:bg-gray-100 even:bg-gray-50">
              <td className="py-3 px-4 border-b border-rose-300 text-center text-lg font-bold">{attr.label}</td>
              {data.map((celebrity) => {
                const value = attr.key.split('.').reduce((obj, key) => obj && obj[key], celebrity);
                const displayValue = attr.isNested
                  ? value ? value.map((nestedItem) => nestedItem[attr.nestedKey]).join(', ') : 'NaN'
                  : value !== null && value !== undefined ? value.toString() : 'NaN';

                return (
                  <td key={celebrity.id} className="py-3 px-4 border-b border-rose-300 text-center text-lg">
                    {displayValue}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>


   {data.map((celebrity) => (
          <h2 key={celebrity.id} className="pt-4 text-2xl font-bold mb-2 text-gray-900 py-2 px-4 border-b text-center hover:text-rose-500">{celebrity.first_name} {celebrity.last_name} Favorite's
</h2>
        ))} 


    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border-4 border-rose-800 mt-12">
        <thead>
          <tr>
            <th className="py-3 px-4 text-center text-xl font-bold bg-indigo-100 border-b border-rose-600">Attribute</th>
            {data.map((celebrity) => (
              <th key={celebrity.id} className="py-3 px-4 text-center text-xl font-bold bg-indigo-100 border-b border-rose-600">
                {celebrity.first_name} {celebrity.last_name} Biography
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            { label: 'Favorite Hollywood Actor', key: 'biography.favorite_hollywood_actor' },
            { label: 'Favorite Bollywood Actor', key: 'biography.favorite_bollywood_actor' },
            { label: 'Favorite Actress', key: 'biography.favorite_actress' },
            { label: 'Favorite Film', key: 'biography.favorite_film' },
            { label: 'Favorite Singer', key: 'biography.favorite_singer' },
            { label: 'Favorite Food', key: 'biography.favorite_food' },
            { label: 'Favorite Restaurant', key: 'biography.favorite_restaurant' },
            { label: 'Favorite Color', key: 'biography.favorite_color' },
            { label: 'Favorite Beverage', key: 'biography.favorite_beverage' },
            { label: 'Favorite Dessert', key: 'biography.favorite_dessert' },
            { label: 'Favorite Perfume', key: 'biography.favorite_perfume' },
            { label: 'Favorite Sport', key: 'biography.favorite_sport' },
            { label: 'Favorite Cricketers', key: 'biography.favorite_cricketers' },
            { label: 'Favorite Song', key: 'biography.favorite_song' },
            { label: 'Favorite Cars', key: 'biography.favorite_cars' },
            { label: 'Favorite Outfit', key: 'biography.favorite_outfit' },
            { label: 'Favorite Fashion Brands', key: 'biography.favorite_fashion_brands' },
            { label: 'Favorite Film Director', key: 'biography.favorite_film_director' },

          ].map((attr) => (
            <tr key={attr.label} className="hover:bg-gray-100 even:bg-gray-50">
              <td className="py-3 px-4 border-b border-rose-300 text-center text-lg font-bold">{attr.label}</td>
              {data.map((celebrity) => {
                const value = attr.key.split('.').reduce((obj, key) => obj && obj[key], celebrity);
                const displayValue = attr.isNested
                  ? value ? value.map((nestedItem) => nestedItem[attr.nestedKey]).join(', ') : 'NaN'
                  : value !== null && value !== undefined ? value.toString() : 'NaN';

                return (
                  <td key={celebrity.id} className="py-3 px-4 border-b border-rose-300 text-center text-lg">
                    {displayValue}
                  </td>
                );
              })}
            </tr>
          ))}
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





  </>
}

