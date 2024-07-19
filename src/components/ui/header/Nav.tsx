import Link from "next/link"
import { Toggle } from "../dark-mode/Toggle"

export const Nav = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <nav className="">
        <ul className="flex justify-center gap-4">
          <li key="home" className="underline">
            <Link href="/" target="_self">Home</Link>
          </li>
          <li key="github" className="underline">
            <Link href="https://github.com/sdelpinoc" target="_blank">Github</Link>
          </li>
          <li key="about" className="underline">
            <Link href="/about" target="_self">About</Link>
          </li>
        </ul>
      </nav>
      <Toggle />
    </div>
  )
}