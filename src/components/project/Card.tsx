import { ArrowRight, BrandGitHub } from "@/components/ui/icons/Icons"
import Link from "next/link"

interface Props {
  name: string
  description: string
  technologies: JSX.Element[]
  github: string
  url: string
}

export const CardProject = ({ name, description, technologies, url, github }: Props) => {
  return (
    <article className="flex flex-col w-full md:w-2/5 rounded-lg shadow-md pb-4 bg-slate-100 dark:bg-slate-600">
      <p className="text-2xl bg-cascade-800 rounded-t-lg p-2 text-center text-white dark:bg-cascade-900">{name}</p>
      <div className="flex-1 px-4 py-2">
        <p className="text-sm">{description}</p>
        <div className="my-4 text-center">
          <p className="py-4">Technologies used</p>
          <div className="grid gap-6 grid-cols-2 grid-rows-2 justify-items-center items-center">
            {
              technologies.map((technology, index) => {
                return (
                  <div key={`${name}${index}`} className=" dark:bg-slate-400 p-2 rounded">
                    {technology}
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-end gap-2 mt-2 px-4 text-center">
        <Link className="w-full p-2 rounded bg-cascade-700 text-white hover:bg-cascade-800 dark:bg-cascade-900 dark:hover:bg-cascade-700" href={url} target="_blank">Go to the site <ArrowRight /></Link>
        <Link className="w-full p-2 rounded bg-cascade-700 text-white hover:bg-cascade-800 dark:bg-cascade-900 dark:hover:bg-cascade-700" href={github} target="_blank">Go to GitHub<BrandGitHub /></Link>
      </div>
    </article>
  )
}
