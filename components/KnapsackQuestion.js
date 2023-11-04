"use client";
import React, {useState, useEffect} from 'react'
import {motion, AnimatePresence, stagger} from 'framer-motion'

function KnapsackQuestion({w, v, u, n, ans, nextQuestion, cur}) {
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2  
          }
        }
      }
      
      const item = {
        hidden: { opacity: 0, x:-200 },
        show: { opacity: 1, x:0, 
            transition: {
                stiffness: 100,
                mass: 0.3
            }
        }
      }

      const bar = {
        hidden: { opacity: 0, x:-200 },
        show: { opacity: 1, x:0, 
            transition: {
                stiffness: 100,
                mass: 0.3
            }
        }
      }
    useEffect(() => {
        document.getElementById(n+"this").scrollIntoView({behavior:"smooth"})
    })
    
    const [wrongAns, setWrongAns] = useState(false)
    const [uInput, setUInput] = useState(0)
    const [done, setDone] = useState(false)

    function checkAnswer(){
        if(uInput == ans){
            setDone(true)
            setWrongAns(false)
            return nextQuestion()
        } else {
            setWrongAns(true)
        }
    }

  return (
    <>
    <div className="relative">

    {
    done &&
    <motion.div 
    initial={{opacity:0, y:100, scale: 1}}
    animate={{opacity:1, y:0, rotate: 360, scale:1.2}}
    exist={{opacity:0, y:120, scale: 1}}
    transition={{delay:.4}}
        className="absolute top-0 left-0 w-full flex h-full items-center justify-center z-10">
        <svg className='fill-emerald-100 h-32 bg-emerald-500 rounded-full w-32 p-8 hover:rotate-[360deg] duration-300' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
    </motion.div>
    }
    <div className={`duration-200 relative ${done ? "opacity-25":"opacity-100"}`} id={n+"this"}>  
    <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className={`flex justify-center items-center w-full gap-8 py-8`}>
        <motion.div variants={item} className="h-48 w-48 border-2 flex items-center justify-center text-3xl font-serif rounded-2xl">
            <h1>Knapsack <br /> w = {w} </h1>
        </motion.div>
        {
            [...Array(n)].map((e, j) => (
                <motion.div key={j} variants={item} className="h-64 w-64 border-2 flex items-center justify-center text-3xl font-serif rounded-2xl">
                    <h1>v = {v[j]} <br /> u = {u[j]}</h1>
                </motion.div>
            ))
        }

        {/* <div className="h-64 w-64 border-2 flex items-center justify-center text-3xl font-serif rounded-2xl">
            <h1>v = 4 <br /> u = 1</h1> 
        </div>
        <div className="h-64 w-64 border-2 flex items-center justify-center text-3xl font-serif rounded-2xl">
        <h1>v = 2 <br /> u = 5</h1>
    </div> */}
    </motion.div>
    <motion.div
        initial={{opacity:0, y:13}}
        animate={{opacity:1, y:0}}
        exist={{opacity:0, y:15}}
        transition={{delay:1}}
        className="w-full flex flex-col items-center">
        <h1 className={`${wrongAns ? 'text-red-500':'text-white'}`}>What is the maximum value that you could leave with?</h1>
        <input disabled={done} type="number" value={uInput} onChange={(e) => setUInput(e.target.value)} className='bg-black border-2' /> <button disabled={done} onClick={() => checkAnswer()} className='border-2 px-2 rounded-lg'>Check</button>
        {
            wrongAns &&
            <small className='px-2 py-1 bg-red-500 m-2 rounded-sm animate-pulse'>Wrong answer, try again!</small>
        }
    </motion.div>  
    </div>
    </div>

    </>
)
}

export default KnapsackQuestion