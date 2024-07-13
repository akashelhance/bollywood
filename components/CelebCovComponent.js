
export default function CelebCovComponent({data, controversies}){
    return <>


    <div className="relative w-full bg-white px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:rounded-lg sm:px-10">
      <div className="mx-auto px-5 w-full">
        <div className="flex flex-col items-center">

            <h2 key={data.id} className="pt-4 text-2xl font-bold mb-2 text-gray-900 py-2 px-4 border-b text-center hover:text-rose-500">{data.first_name} {data.last_name} Covs
          </h2>

          <p className="mt-3 text-lg text-neutral-500 md:text-xl">
            Here are some Covs about celebrities.
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-full divide-y divide-neutral-200 w-full">
          {controversies?.map((contro) => (
            <div className="py-5 w-full" key={contro.id}>
              <div className="flex flex-col items-center">
                {contro.image ? <img src={contro.image} alt="done" className="mb-4" /> : null}
                {contro.heading ? <h3 className="mb-4 text-neutral-600 text-2xl">{contro.heading}</h3> : null}
                {contro.text ? <p className="mb-4 text-neutral-600">{contro.text}</p> : null}
                {contro.embedded_code ? (
                  <div dangerouslySetInnerHTML={{ __html: contro.embedded_code }} />
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
}


