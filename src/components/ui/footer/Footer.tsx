import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="my-4 text-center">
      <ul className="inline-grid grid-flow-col justify-center items-baseline gap-6">
        <li className="underline p-2 rounded hover:shadow">
          <Link href="mailto:sdelpinocampos@hotmail.com" target="_blank">Contact me!</Link>
        </li>
        <li className="underline p-2 rounded hover:shadow">
          <Link href="https://twitter.com/sdelpinoc" target="_blank">Twitter</Link>
        </li>
        <li className="last:col-start-1 last:col-end-2 peer-hover:animate-wave-animation">
          👋
        </li>
      </ul>
    </footer>
  )
}