import Link from "next/link"


export default function NotFound() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-fuchsia-700">
        404 - Page Not Found
      </h1>
        <div className="!mt-5 flex items-center justify-center gap-2">
        <p className="text-gray-600 flex ">here come</p>
            <Link href="/" className="!p-1 rounded bg-fuchsia-800 text-white">
                Home
            </Link>
        </div>
    </div>
  )
}
