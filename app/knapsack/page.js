'use client'

import React from 'react'
import { useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import KnapsackQuestion from '@/components/KnapsackQuestion'
import Link from 'next/link'

function page() {
    const [curQuestion, setCurQuestion] = useState(1)
    const [isCorrect, setIsCorrect] = useState(false)
    const [nextLevel, setNextLevel] = useState(false)
    const ans = [13, 21, 14, 25]
    const q = [
    {
        n: 3,
        w: 8,
        u: [3, 1, 5],
        v: [9, 4, 2]
    },
    {
        n: 3,
        w: 24,
        u: [9, 2, 5],
        v: [9, 5, 7]
    },  
    {
        n: 4,
        w: 105,
        u: [83, 23, 45, 63],
        v: [9, 4, 2, 10]
    },
    {
        n: 4,
        w: 18,
        u: [6, 14, 9, 2],
        v: [9, 4, 2, 10]
    },
    ]   
    function nextQuestion(){
        if(curQuestion + 1 <= q.length)
            setCurQuestion(curQuestion+1)
        else{
                // document.getElementById("bottompage").scrollIntoView({behavior:"smooth"})
            setNextLevel(true)
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
            delay: 1.2
          },
        },
        hide: {
          x: "-100vw",
          opacity: 0,
        },
      };
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
    
  return (
    <AnimatePresence>
            <AnimatePresence initial={false}>
                <motion.div 
                animate={nextLevel ? 'show' : 'hide'}
                variants={nextScreen}
                className="h-screen w-full fixed top-0 left-0 bg-gradient-to-r flex flex-col justify-center pl-24 from-green-500/90 via-green-20/80 to-purple-700/0 z-20 backdrop-blur-sm">
                    <motion.h1 className='text-8xl font-serif pb-8'>
                        4/4
                    </motion.h1>
                    <motion.h1 variants={goodText} className='text-9xl font-serif pb-8'>
                        Great job!
                    </motion.h1>
                    <Link href={'/knapsack/next-step'}>
                        <motion.button variants={goodText} className='text-4xl  bg-white text-green-600 rounded-2xl px-12 py-4 w-min hover:bg-transparent border-2 border-white hover:text-white duration-150'>
                            Next
                        </motion.button>
                    </Link>
                </motion.div>
            </AnimatePresence>
        
        <motion.div
        initial={{opacity:0, y:13}}
        animate={{opacity:1, y:0}}
        exist={{opacity:0, y:15}}
        transition={{delay:0.33}}
        >
    <main className="flex min-h-screen flex-col p-24 w-full overflow-hidden">
        <div className="">
            <h1 className="font-mono text-4xl"><Link href={'/'}>Algo Teacher</Link>: Can you knapsack?</h1>
        </div>
        <div className="">
            <p>You just stumbled upon a treasure trove of <strong className='italic'>n</strong> items. For each item <strong className='italic'>n</strong> there is a value <strong className='italic'>v</strong> and a weight <strong className='italic'>u</strong>, where <strong className='italic'>u</strong> is the respective item's weight and <strong className='italic'>v</strong> is the respective items value. But unfortunately your bag can only hold a maximum weight of <strong className='italic'>w</strong> and there is only 1 of each items. </p>
            <p>Your goal is to maximize the total value of items in your bag.</p>
        </div>
            {
                [...Array(curQuestion)].map((e, i) => (
                    <KnapsackQuestion key={i} nextQuestion={() => nextQuestion()} w={q[i].w} v={q[i].v} u={q[i].u} n={q[i].n} ans={ans[i]} cur={curQuestion+1<q.length} />
                ))
            }
            {/* {
                nextLevel ? (
                <motion.div
                initial={{opacity:0, y:13}}
                animate={{opacity:1, y:0}}
                exist={{opacity:0, y:15}}
                transition={{delay:0.33}}
                 className="w-full h-96 bg-emerald-600 mt-8 rounded-2xl p-8 flex items-center"
                 >
                    <motion.h1>
                        Keep going!
                    </motion.h1>
                </motion.div>
                ):(
                    <div id="bottompage" className="w-full rounded-2xl p-8 flex h-96 items-center"
                    ></div>
                )
            } */}
            {/* <div className="h-64 w-64 border-2 flex items-center justify-center text-3xl font-serif rounded-2xl">
                <h1>v = 4 <br /> u = 1</h1> 
            </div>
            <div className="h-64 w-64 border-2 flex items-center justify-center text-3xl font-serif rounded-2xl">
                <h1>v = 2 <br /> u = 5</h1>
            </div> */}
        </main>
    </motion.div>
    </AnimatePresence>
  )
}

export default page