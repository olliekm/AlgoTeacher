"use client";
import React, {useState} from 'react'
import Image from 'next/image'
import {motion, AnimatePresence} from 'framer-motion'
import Link from 'next/link';

function Page() {
  const [finish, setFinish] = useState(false)
  const goodText = {
    hidden: { opacity: 0, x:-200 },
    show: { opacity: 1, x:0, 
        transition: {
            stiffness: 100,
            mass: 0.3,
            delay: 0.5
        }
    }
  }
  const nextScreen = {
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        stiffness: 100,
        staggerChildren: 0.3,
        delayChildren:0.3,
        delay: .5
      },
    },
    hide: {
      x: "-100vw",
      opacity: 0,
    },
  };
  return (
    <main className="flex min-h-screen h-auto flex-col">
              <AnimatePresence initial={false}>
                <motion.div 
                animate={finish ? 'show' : 'hide'}
                variants={nextScreen}
                className="h-screen w-full fixed top-0 left-0 bg-gradient-to-r flex flex-col justify-center pl-24 from-indigo-500/90 via-green-20/80 to-purple-700/0 z-20 backdrop-blur-sm">
                    <motion.h1 variants={goodText} className='text-8xl font-serif pb-8 animate-bounce'>
                      👑👑👑
                    </motion.h1>
                    <motion.h1 variants={goodText} className='text-8xl font-serif pb-8'>
                        You completed: <strong className='italic font-light font-mono'>Can You Knapsack?</strong>
                    </motion.h1>
                        <motion.button variants={goodText} className='text-4xl  bg-white text-indigo-600 rounded-2xl px-12 py-4 hover:bg-transparent border-2 border-white hover:text-white duration-150 w-max'>
                    <Link href={'/'} className=''>
                            Back to <strong className='font-normal font-mono'>AlgoTeacher</strong>
                    </Link>
                        </motion.button>
                    <motion.h1 className='text-3xl font-serif pt-16'>
                        Practice Questions:
                    </motion.h1>
                    <div className="flex items-start space-x-4 py-4">
                      <div className='text-4xl bg-white text-indigo-600 rounded-2xl px-12 py-4 w-min hover:bg-transparent border-2 border-white hover:text-white duration-150'>
                        <a href="https://dmoj.ca/problem/dpd" target="_blank" rel="noopener noreferrer">
                            <h1 className='text-3xl font-mono'>Educational DP Contest AtCoder D - Knapsack 1</h1 >
                        </a>
                      </div>
                      <div className='text-4xl  bg-white text-indigo-600 rounded-2xl px-12 py-4 w-min hover:bg-transparent border-2 border-white hover:text-white duration-150'>
                        <a href="https://dmoj.ca/problem/dpa" target="_blank" rel="noopener noreferrer">
                            <h1 className='text-3xl font-mono'> Educational DP Contest AtCoder A - Frog 1</h1>
                        </a>
                      </div>
                      <div className='text-4xl  bg-white text-indigo-600 rounded-2xl px-12 py-4 w-min hover:bg-transparent border-2 border-white hover:text-white duration-150'>
                        <a href="https://dmoj.ca/problem/dpb" target="_blank" rel="noopener noreferrer">
                            <h1 className='text-3xl font-mono'> Educational DP Contest AtCoder A - Frog 2</h1>
                        </a>
                      </div>
                    </div>
                </motion.div>
            </AnimatePresence>
            <motion.div
        initial={{opacity:0, y:13}}
        animate={{opacity:1, y:0}}
        exist={{opacity:0, y:15}}
        transition={{delay:0.33}}
        >
      <div className=" p-24 pb-8">

        <div className="">
            <h1 className="font-mono text-4xl">Algo Teacher: Can you knapsack?</h1>
        </div>
        <p>
          Take a look at the code and try implementing it yourself! There are many ways to solve this problem using different methods of storing the best answer. Try to find ways that you would optimize this code and ways and situations where you would need to!    
        </p>
        <div class="overflow-x-auto flex justify-center">
        <Image
          src={'/carbon.png'} 
          width={800}
          height={500}
          alt="Picture of the author"
          blurDataURL="data:..." 
          placeholder="blur"
        />
        </div>
      </div>  

        {/* <div className="h-96 w-full flex items-center justify-center pt-96">
          <div className="text-center">
          <h1 className='text-5xl'>Congrats on completing this lesson!</h1>
          <h2 className='text-xl'>Try out other lessons or go on to apply what you have learned!</h2>
          <h3>Here are some places to practice:</h3>
          
          </div>
        </div> */}
        </motion.div>
        <div onClick={() => setFinish(true)} className="w-full flex flex-col h-96 overflow-hidden absolute bottom-0 cursor-pointer bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-emerald-900 via-violet-600/0 to-sky-900/0  hover:from-emerald-800 hover:via-violet-600/0 hover:to-sky-900/0 justify-center items-center transition-colors duration-200 group">
        <h1 


        class=" group-hover:tracking-[.3em] ease-in duration-75  text-5xl text-white font-serif mt-8">Complete lesson</h1>

        <h1 

class=" group-hover:tracking-[.3em] ease-in duration-75  text-sxl text-white font-serif mt-8">Apply what you learned</h1>

        </div>
    </main>
      )
}

export default Page