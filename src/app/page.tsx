import Link from 'next/link'

import { BrandGitHub, ArrowRight, Css, Javascript, ReactIcon, ReduxIcon } from '@/components/icons'

export default function Home () {
  return (
    <section className='flex-1'>
      <h3 className='text-3xl my-2 text-center'>Projects</h3>
      <div className='flex flex-wrap justify-around gap-2'>
        <div className='flex flex-col md:w-1/3 min-h-fit rounded-lg shadow-md py-2'>
          <p className='text-2xl bg-cascade-800 rounded-t-lg p-2 text-center text-white'>Cosplay Proportions</p>
          <div className='flex-1 px-4 py-2'>
            <p className='text-sm'>Allows you to upload an image, in which lines are drawn and established
              The proportions they are will have with respect to a baseline.</p>
            <div className='my-4 text-center'>
              <p className='py-4'>Technologies used</p>
              <div className='grid gap-6 grid-cols-2 grid-rows-2 justify-items-center'>
                <Javascript />
                <Css />
                <ReactIcon />
              </div>
            </div>
          </div>
          <div className='border-b-2 border-cascade-800 w-1/2 mx-auto'></div>
          <div className='flex flex-1 flex-col justify-around items-center gap-2 mt-2 px-4 text-center'>
            <Link className='w-full p-2 rounded bg-cascade-700 text-white hover:bg-cascade-800' href='https://cosplayproportions.vercel.app/' target='_blank'>Go to the site <ArrowRight /></Link>
            <Link className='w-full p-2 rounded bg-cascade-700 text-white hover:bg-cascade-800' href='https://github.com/sdelpinoc/projects-cosplayproportions' target='_blank'>Go to GitHub<BrandGitHub /></Link>
          </div>
        </div>
        <div className='flex flex-col md:w-1/3 min-h-fit rounded-lg shadow-md py-2'>
          <p className='text-2xl bg-cascade-800 rounded-t-lg p-2 text-center text-white'>Pokemon Stab</p>
          <div className='flex-1 px-4 py-2'>
            <p className='text-sm'>It has a Pokémon search engine to know its weaknesses and
              strengths, it is currently hosted on an AWS S3.</p>
            <div className='my-4 text-center'>
              <p className='py-4'>Technologies used</p>
              <div className='grid gap-6 grid-cols-2 grid-rows-2 justify-items-center p-2'>
                <Javascript />
                <Css />
                <ReactIcon />
                <ReduxIcon />
              </div>
            </div>
          </div>
          <div className='border-b-2 border-cascade-800 w-1/2 mx-auto'></div>
          <div className='flex flex-1 flex-col justify-around items-center gap-2 mt-2 px-4 text-center'>
            <Link className='w-full p-2 rounded bg-cascade-700 text-white hover:bg-cascade-800' href='https://pokemonstab.vercel.app/' target='_blank'>Go to the site <ArrowRight /></Link>
            <Link className='w-full p-2 rounded bg-cascade-700 text-white hover:bg-cascade-800' href='https://github.com/sdelpinoc/projects-pokemonstab' target='_blank'>Go to GitHub <BrandGitHub /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}
