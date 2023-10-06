import Link from 'next/link'
import GitHub from '../components/Icons/Github'
import Javascript from '../components/Icons/Javascript'
import Css from '../components/Icons/Css'
import ReactIcon from '../components/Icons/ReactIcon'
import ReduxIcon from '../components/Icons/Redux'
import ExternalLink from '../components/Icons/ExternalLink'

export default function Home () {
  return (
    <section className='flex-1'>
      <h3 className='text-2xl my-2 text-center'>Projects</h3>
      <div className='flex flex-wrap justify-around gap-2'>
        <div className='flex flex-col md:w-1/3 min-h-fit rounded-lg shadow-md py-2'>
          <p className='text-xl bg-cascade-800 rounded-t-lg p-2 text-center text-white'>Cosplay proportions</p>
          <div className='flex-1 p-2'>
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
          <div className='flex justify-around items-center gap-2 mt-2'>
            <Link className='p-2 rounded hover:bg-cascade-300' href='https://cosplayproportions.vercel.app/' target='_blank'><ExternalLink /></Link>
            <Link className='p-2 rounded hover:bg-cascade-300' href='https://github.com/sdelpinoc/projects-cosplayproportions' target='_blank'><GitHub /></Link>
          </div>
        </div>
        <div className='flex flex-col md:w-1/3 min-h-fit rounded-lg shadow-md py-2'>
          <p className='text-xl bg-cascade-800 rounded-t-lg p-2 text-center text-white'>Pokemon Stab</p>
          <div className='flex-1 p-2'>
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
            <div className='flex justify-around items-center gap-2 mt-2'>
              <Link className='p-2 rounded hover:bg-cascade-300' href='https://pokemonstab.vercel.app/' target='_blank'><ExternalLink /></Link>
              <Link className='p-2 rounded hover:bg-cascade-300' href='https://github.com/sdelpinoc/projects-pokemonstab' target='_blank'><GitHub /></Link>
            </div>
        </div>
      </div>
    </section>
  )
}
