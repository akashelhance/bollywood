import Link from "next/link"

export default function PopularPostSideBarComponent(){
    return <>

<div className="overflow-x-auto">
    <table className="w-full table-auto  border-2 border-rose-800 p-4">
      <thead>
        <tr>
          <th className="px-4 py-2 bg-rose-300 font-bold text-2xl">POPULAR POSTS</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border border-gray-300">
          <td className="px-4 py-2">
            <Link href="#" className="text-rose-500 hover:underline hover:text-rose-700 text-normal">Hot Movie On Netflix</Link>
          </td>
        </tr>
        <tr className="border border-gray-300">
          <td className="px-4 py-2">
            <Link href="#" className="text-rose-500 hover:underline hover:text-rose-700 text-normal">Hot Movie On Netflix</Link>
          </td>
        </tr>
        <tr className="border border-gray-300">
          <td className="px-4 py-2">
            <Link href="#" className="text-rose-500 hover:underline hover:text-rose-700 text-normal">Hot Movie On Netflix</Link>
          </td>
        </tr>
        <tr className="border border-gray-300">
          <td className="px-4 py-2">
            <Link href="#" className="text-rose-500 hover:underline hover:text-rose-700 text-normal">Hot Movie On Netflix</Link>
          </td>
        </tr>
        <tr className="border border-gray-300">
          <td className="px-4 py-2">
            <Link href="#" className="text-rose-500 hover:underline hover:text-rose-700 text-normal">Hot Movie On Netflix</Link>
          </td>
        </tr>
        <tr className="border border-gray-300">
          <td className="px-4 py-2">
            <Link href="#" className="text-rose-500 hover:underline hover:text-rose-700 text-normal">Hot Movie On Netflix</Link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
    </>
}