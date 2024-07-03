export default function CelebDescWithImageComponent({ data }) {


  function truncateAtFullStop(text, minLength) {
    if (text.length <= minLength) return text;

    const truncated = text.slice(0, minLength);
    const nextFullStopIndex = text.indexOf('.', minLength);

    if (nextFullStopIndex !== -1) {
      return text.slice(0, nextFullStopIndex + 1);
    }

    return truncated;
  }

  // Truncate the description at the next full stop after 600 characters
  const description = data.description.length > 600
    ? truncateAtFullStop(data.description, 600)
    : data.description;


  return <>

<div className="container mx-auto pb-4">
  <div className="w-full flex flex-col md:flex-row items-center border border-4 border-rose-800 rounded-lg shadow-md hover:shadow-lg transition duration-300">
    <div className="w-full md:w-64 h-96 mb-4 md:mb-0">
      <img
        src={data.image}
        alt={`${data.first_name} ${data.last_name}`}
        className="object-cover w-full h-full"
      />
    </div>
    <div className="text-left flex-1">
      <h1 className="text-2xl font-bold text-center md:text-left px-8 pt-6 mb-2 text-gray-900 pb-4">
        {data.first_name} {data.last_name}
      </h1>
      <div className="flex flex-col md:flex-row mb-4 px-8">
        <div className="flex flex-col md:flex-row mb-2 md:mb-0 md:mr-4">
          <span className="inline-block bg-blue-200 text-blue-800 text-normal font-semibold mr-2 px-2.5 py-0.5 rounded">
            Role
          </span>
          <span className="text-gray-900 text-normal">
            {data.roles.map((role, index) => (
              <span
                key={index}
                className="font-bold text-rose-800"
              >
                {role.name}
                {index < data.roles.length - 1 && ", "}
              </span>
            ))}
          </span>
        </div>
        <div className="flex flex-col md:flex-row">
          <span className="inline-block bg-green-200 text-green-800 text-normal font-semibold mr-2 px-2.5 py-0.5 rounded">
            Industry
          </span>
          <span className="text-gray-900 text-normal">
            {data.industry.map((industry, index) => (
              <span
                key={index}
                className="font-bold text-rose-800"
              >
                {industry.name}
                {index < data.industry.length - 1 && ", "}
              </span>
            ))}
          </span>
        </div>
      </div>
      <p className="text-lg text-grey-900 mb-6 px-8">
        {description}
      </p>
    </div>
  </div>
</div>

  </>

}