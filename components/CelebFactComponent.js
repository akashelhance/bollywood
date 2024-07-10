export default function CelebFactComponent({ data, celebrityFacts }) {
  return <>


    <div className="relative w-full bg-white px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:rounded-lg sm:px-10">
      <div className="mx-auto px-5 w-full">
        <div className="flex flex-col items-center">

          <h2 key={data.id} className="pt-4 text-2xl font-bold mb-2 text-gray-900 py-2 px-4 border-b text-center hover:text-rose-500">{data.first_name} {data.last_name} Facts
          </h2>

          <p className="mt-3 text-lg text-neutral-500 md:text-xl">
            Here are some interesting facts about celebrities.
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-full divide-y divide-neutral-200 w-full">
          {celebrityFacts.map((fact) => (
            <div className="py-5 w-full" key={fact.id}>
              <div className="flex flex-col items-center">
                {fact.image ? <img src={fact.image} alt="done" className="mb-4" /> : null}
                {fact.text ? <p className="mb-4 text-neutral-600">{fact.text}</p> : null}
                {fact.embedded_code ? (
                  <div dangerouslySetInnerHTML={{ __html: fact.embedded_code }} />
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
}