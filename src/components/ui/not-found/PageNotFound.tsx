import Link from "next/link"

export default function PageNotFound () {
  return (
    <div className="flex flex-col items-center gap-4 mt-4 h-screen">
      <h2 className="text-2xl">404 - Page Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className="underline" href="/">Return Home</Link>
    </div>
  )
}
