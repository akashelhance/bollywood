export default function CelebDescWithImageComponent({data}){
 
   return<>

<div className="container mx-auto pb-4">
  <div className="w-full flex flex-col items-center md:flex-row border rounded-lg shadow-md hover:shadow-lg transition duration-300">
    <img
      src="https://via.placeholder.com/300"
      alt="Person's Image"
      className="rounded-full object-cover w-64 h-64 mb-4 md:mb-0 md:mr-4 md:ml-0"
    />
    <div className="text-left">
      <h1 className="text-4xl font-bold text-center md:text-left px-8 pt-6 mb-2 text-gray-900 pb-4">
        {data.first_name} {data.last_name}
      </h1>
      <div className="flex flex-col md:flex-row mb-4 px-8">
        <div className="flex items-center mb-2 md:mb-0 md:mr-4">
          <span className="inline-block bg-blue-200 text-blue-800 text-normal font-semibold mr-2 px-2.5 py-0.5 rounded">Role</span>
          <span className="text-gray-700 text-normal">Hello</span>
        </div>
        <div className="flex items-center">
          <span className="inline-block bg-green-200 text-green-800 text-normal font-semibold mr-2 px-2.5 py-0.5 rounded">Industry</span>
          <span className="text-gray-700 text-normal">Helooo</span>
        </div>
      </div>
      <p className="text-xl text-gray-900 mb-6 px-8">
        frequently use their prominent attention to important social problems
        and enhance society. Hollywood celebrities as well as South Indian
        (Tamil, Telugu, Kannada, and Malayalam) and Bollywood industry
        celebrities are included here, providing the most recent stuff. Check
        out this website for the birthdays of your favorite South Indian,
        Hollywood, and Bollywood celebrities.
      </p>
    </div>
  </div>
</div>

   </>
   
}