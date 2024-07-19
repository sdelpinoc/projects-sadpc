import Link from "next/link"

export default function About () {
  return (
    <main className="flex-1 self-center max-w-3xl mx-10">
      <section className="flex flex-col justify-center gap-4">
        <h3 className="text-2xl my-2 text-center">About me</h3>
        <p>Passionate about movies, video games and programming. Looking for the opportunity to continue specializing in frontend framework or libraries just like React, NEXT.js, but without leaving aside the programming of backend environment with languages like PHP.</p>
        <p>Site made with <Link className="" href="https://nextjs.org/" target="_blank"> NEXT.JS 14</Link>, <Link className="text-tailwindcss-text" href="https://tailwindcss.com/" target="_blank">Tailwindcss</Link> and <Link className="text-typescript-text" href="https://www.typescriptlang.org/" target="_blank">Typescript</Link>.</p>
      </section>
    </main>
  )
}
