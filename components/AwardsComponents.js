import Image from "next/image";
import Link from "next/link";
export default function AwardsComponents({data}){

   

    return <>

<div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map(celebrity => (
          <div key={celebrity.id} className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
            {/* <Image
              className="w-full"
              src={celebrity.image}
              alt={`${celebrity.first_name} ${celebrity.last_name}`}
              width={300}
              height={300}
            /> */}
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{`${celebrity.first_name} ${celebrity.last_name}`}</div>
              {/* <p className="text-gray-700 text-base">{celebrity.description}</p> */}
              {/* <div className="mt-4">
                <span className="text-gray-600 text-sm">Industry: {celebrity.industry.map(ind => ind.name).join(', ')}</span>
              </div> */}
              <div>
                <span className="text-gray-600 text-sm">Roles: {celebrity.roles.map(role => role.name).join(', ')}</span>
              </div>
              {celebrity.awards.map((award, index) => (
                <div key={index} className="mt-4">
                  <div className="font-bold">{award.award_name}</div>
                  <div>{award.category} ({award.year})</div>
                  <div>Movie: {award.movie.title} ({award.movie.verdict})</div>
                  {/* <Image
                    className="w-full mt-2"
                    src={award.movie.poster}
                    alt={award.movie.title}
                    width={100}
                    height={150}
                  /> */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
}