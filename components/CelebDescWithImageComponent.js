export default function CelebDescWithImageComponent({data}){
 
   return<>

<div className="container mx-auto pb-4">
  <div className="w-full flex flex-col items-center md:flex-row border rounded-lg shadow-md hover:shadow-lg transition duration-300">
  <img
        src={data.image}
        alt={`${data.first_name} ${data.last_name}`}
        className="rounded-full object-cover w-64 h-64 mb-4 md:mb-0 md:mr-4 md:ml-0"
      />
    <div className="text-left">
      <h1 className="text-4xl font-bold text-center md:text-left px-8 pt-6 mb-2 text-gray-900 pb-4">
        {data.first_name} {data.last_name}
      </h1>
      <div className="flex flex-col md:flex-row mb-4 px-8">
      <div className="flex flex-col md:flex-row mb-2 md:mb-0 md:mr-4">
        <span className="inline-block bg-blue-200 text-blue-800 text-normal font-semibold mr-2 px-2.5 py-0.5 rounded">Role</span>
        {data.roles.map((role, index) => (
          <span key={index} className="text-gray-700 text-normal">{role.name}</span>
        ))}
      </div>
      <div className="flex flex-col md:flex-row">
        <span className="inline-block bg-green-200 text-green-800 text-normal font-semibold mr-2 px-2.5 py-0.5 rounded">Industry</span>
        {data.industry.map((industry, index) => (
          <span key={index} className="text-gray-700 text-normal">{industry.name}</span>
        ))}
      </div>
    </div>
      <p className="text-xl text-gray-900 mb-6 px-8">
       {data.description}
      </p>
    </div>
  </div>
</div>

   </>
   
}