/* eslint-disable react/jsx-key */
import { Css, Nextjs, Prisma, ReactHookForm, ReactIcon, ReduxIcon, Tailwindcss } from "@/components/ui/icons/Icons"
import { CardProject } from "@/components/project/Card"

export default function Home () {
  return (
    <section className="flex-1">
      <h3 className="text-3xl my-2 text-center">Projects</h3>
      <h2 className="text-center mt-6">Personal Projects</h2>
      <div className="border-b-2 border-cascade-600 w-1/4 mx-auto m-2"></div>
      <section className="flex flex-wrap justify-around gap-4">
        <CardProject
          name="Cosplay Proportions"
          description="Allows you to upload an image, in which lines are drawn and established The proportions they are will have with respect to a baseline."
          technologies={[<ReactIcon />, <Css />]}
          url="https://cosplayproportions.vercel.app/"
          github="https://github.com/sdelpinoc/projects-cosplayproportions"
        />
        <CardProject
          name="Pokemon Stab"
          description="It has a Pokémon search engine to know its weaknesses and strengths."
          technologies={[<ReactIcon />, <ReduxIcon />, <Css />]}
          url="https://pokemonstab.vercel.app/"
          github="https://github.com/sdelpinoc/projects-pokemonstab"
        />
      </section>
      <h2 className="text-center mt-6">Courses Projects</h2>
      <div className="border-b-2 border-cascade-600 w-1/4 mx-auto m-2"></div>
      <section className="flex flex-wrap justify-around gap-4">
        <CardProject
          name="Giffy"
          description="It is a gif search engine, with the possibility of saving and deleting favorites"
          technologies={[<ReactIcon />, <ReactHookForm />, <Css />]}
          url="https://giffy-sdelpinoc.vercel.app/"
          github="https://github.com/sdelpinoc/courses-midudev-giffy-app"
        />
        <CardProject
          name="Teslo Shop"
          description="It is a card store, with product administration, login and integration with Paypal. Use Postgresql and Prisma."
          technologies={[<Nextjs />, <Tailwindcss />, <ReactHookForm />, <Prisma />]}
          url="https://sdelpinoc-teslo-shop.vercel.app/"
          github="https://github.com/sdelpinoc/courses-devtalles-teslo-shop"
        />
      </section>
    </section>
  )
}
