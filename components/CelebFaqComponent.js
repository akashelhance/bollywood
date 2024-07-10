export default function CelebFaqComponent({faqs, data}){{

    return <>

<div className="relative w-full bg-white px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:rounded-lg sm:px-10">
  <div className="mx-auto px-5 w-full">
    <div className="flex flex-col items-center">
      {data.map((celebrity) => (
                <h2 key={celebrity.id} className="pt-4 text-2xl font-bold mb-2 text-gray-900 py-2 px-4 border-b text-center hover:text-rose-500">{celebrity.first_name} {celebrity.last_name} FAQs
</h2>
      ))}
      <p className="mt-3 text-lg text-neutral-500 md:text-xl">
        Frequently asked questions
      </p>
    </div>
    <div className="mx-auto mt-8 grid max-w-full divide-y divide-neutral-200 w-full">
      {faqs.map((faq) => (
        <div className="py-5 w-full" key={faq.id}>
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              <span>
                {faq.question}
              </span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </summary>
            <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
              {faq.answer}
            </p>
          </details>
        </div>
      ))}
    </div>
  </div>
</div>

    </>
}}