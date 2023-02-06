import Head from 'next/head';
import { Inter } from '@next/font/google';
import {BsFillMoonStarsFill, BsSunFill} from 'react-icons/bs';
import { 
  AiFillLinkedin, 
  AiFillYoutube, 
  AiFillGithub 
} from 'react-icons/ai';
import Image from "next/image";
import brianDP from "../public/BLdp.jpeg";
import Spotter from "../public/homepage.png";
import Restaurant from "../public/restauranthome.png";
import Recipe from "../public/recipehome.png";
import Roulette from "../public/roulettehome.png";
import { useState } from 'react';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ""}>
      <Head>
        <title>Brian Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between sticky top-0">
            <h1 className="text-xl dark:text-gray-300">developedbybrian</h1>
            <ul className="flex items-center">
              <li>
                {darkMode ?
                <BsSunFill 
                  onClick={() => setDarkMode(!darkMode)} 
                  className="cursor-pointer text-2xl"
                  color="white"
                />
                :
                <BsFillMoonStarsFill 
                  onClick={() => setDarkMode(!darkMode)} 
                  className="cursor-pointer text-2xl"
                />
                }
              </li>
              <li>
                <a 
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" 
                  href="https://docs.google.com/document/d/1Mk9GGSmF_Sds0Mbg9ojErhdHZ_dfBW36p4BevMsO-hA/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex flex-wrap justify-center">
            <div className="sm:w-4/12 px-4">
              <Image src={brianDP} alt="..." className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" />
            </div>
          </div>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Brian Lee
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Software Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-300">
              Welcome to my portfolio, feel free to connect with me!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-100">
            <a href="https://www.linkedin.com/in/brianjaebum/" target="_blank" rel="noreferrer">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/jaebum25" target="_blank" rel="noreferrer">
              <AiFillGithub />
            </a>
            {/* <AiFillYoutube /> */}
          </div>
        </section>

        <section>
          <div className="lg:flex gap-10">
            <h3 className="text-3xl py-1 dark:text-white">About</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
              Welcome to the beginning of my coding journey!
              I started by completing my Software Engineering Immersive Bootcamp from 
              <span className="text-teal-500"> General Assembly </span>
              and now I am continuing to build on my foundation as a <span className="text-teal-500"> software devloper</span>.
              Check out my <span className="text-teal-500">projects</span>: 
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-600">
              <Image src={Spotter} alt="..."/>
              <a target="_blank" rel="noreferrer" href="https://brians-spotter.herokuapp.com" className="text-lg font-medium py-8 pb-2">Spotter</a>
              <p className="py-2">Search and share your favorite songs!</p>
              <h4 className="text-teal-600 py-4">tech tools!</h4>
              <p className="text-gray-800 py-1">MongoDB, Express.JS, React.JS, Node.JS</p>
              <p className="text-gray-800 py-1">HTML, CSS</p>
              <p className="text-gray-800 py-1">Deezer API</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-600">
              <Image src={Restaurant} alt="..."/>
              <h3 className="text-lg font-medium py-8 pb-2">Restaurant Reviewer</h3>
              <p className="py-2">Discover new local restaurants!</p>
              <h4 className="text-teal-600 py-4">tech tools!</h4>
              <p className="text-gray-800 py-1">Python-Django, PostgreSQL</p>
              <p className="text-gray-800 py-1">HTML, CSS</p>
              <p className="text-gray-800 py-1">AWS S3</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-600">
            <Image src={Recipe} alt="..."/>
              <h3 className="text-lg font-medium py-8 pb-2">Drink Book</h3>
              <p className="py-2">Create new drink recipes!</p>
              <h4 className="text-teal-600 py-4">tech tools!</h4>
              <p className="text-gray-800 py-1">MongoDB, Express.JS, Node.JS</p>
              <p className="text-gray-800 py-1">HTML, CSS</p>
              <p className="text-gray-800 py-1">Google OAuth 2.0</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-600">
            <Image src={Roulette} alt="..."/>
              <h3 className="text-lg font-medium py-8 pb-2">Ghoulette</h3>
              <p className="py-2">Test your luck in Spooky Roulette!</p>
              <h4 className="text-teal-600 py-4">tech tools!</h4>
              <p className="text-gray-800 py-1">Javascript, HTML, CSS</p>
            </div>
          </div>
        </section>
        <section>
          <div>
          <h3 className="text-3xl py-1 dark:text-white">Thanks!</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
            More content coming soon..
          </p>
          </div>
        </section>
      </main>
    </div>
  )
}
