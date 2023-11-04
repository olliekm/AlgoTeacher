"use client";
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay:1.2
    }
  }
}
const item = {
  hidden: { opacity: 0, scale:0 },
  show: { opacity: 1, scale:1 }
}

const gradients = [
  'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900',
  'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 via-fuchsia-600 to-orange-600',
  'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-700 via-orange-300 to-rose-800',
  'bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600',
  'bg-gradient-to-t from-orange-400 to-sky-400',
  'bg-gradient-to-tr from-violet-500 to-orange-300',
  'bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500',
  'bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900',
  'bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-500 to-indigo-700',
  'bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400'
  
]


export default function Home() {
  return (
    <AnimatePresence>
      <motion.div
      initial={{opacity:0, y:13}}
      animate={{opacity:1, y:0}}
      exist={{opacity:0, y:15}}
      transition={{delay:0.33}}
      >

        <main className="flex min-h-screen flex-col">
            <div className="flex flex-col w-full items-center space-y-8 h-screen justify-center xl:p-24 lg:p-8 p-4 duration-100">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0, 0.71, 0.2, 1.01]
                }}
              className={`w-full relative h-full text-center flex space-y-8 flex-col items-center justify-center ${gradients[Math.floor(Math.random() * 10)]}  lg:rounded-[8rem] rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]`}>
                <div className="absolute bottom-0 w-full flex justify-center py-4">
                  <motion.h1
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 1,
                      ease: [0, 0.71, 0.2, 1.01]
                    }}
                    className="text-white text-2xl uppercase tracking-widest font-light space-x-8"
                  >
                    <Link href={'/about'}>
                      About me
                    </Link>
                    <Link href={'/resources'}>Resources</Link>
                  </motion.h1>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                  }}
                >

                  <h1 className="font-serif text-9xl hover:text-yellow-100 duration-300 cursor-default hover:tracking-[0.2em] delay-100 ">Algo Teacher</h1>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.7,
                    ease: [0, 0.71, 0.2, 1.01]
                  }}
                  className="text-center"
                >
                  <h2 className="font-mono text-3xl">Learn algorithms, the better way!</h2>
                </motion.div>
                <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-wrap gap-4 py-16 justify-center">
                  <motion.div
                  variants={item}
                  >
                    <Link href={'/knapsack'}>
                      <div className="border-2 p-8 rounded-2xl hover:bg-white duration-150 hover:text-indigo-900 cursor-pointer hover:scale-105 ease-in-out">
                        <h1 className="font-semibold text-2xl">Can you knapsack?</h1>
                        <small>Knapsack Dynamic Programming</small>
                      </div>
                    </Link>
                  </motion.div>
                  {/* <motion.div
                  variants={item}
                  >
                    <Link href={'/knapsack'}>
                      <div className="border-2 p-8 rounded-2xl hover:bg-white duration-150 hover:text-indigo-900 cursor-pointer hover:scale-105 ease-in-out">
                        <h1 className="font-semibold text-2xl">Are you a star?</h1>
                        <small>Knapsack Dynamic Programming</small>
                      </div>
                    </Link>
                  </motion.div>
                  <motion.div
                  variants={item}
                  >
                    <Link href={'/knapsack'}>
                      <div className="border-2 p-8 rounded-2xl hover:bg-white duration-150 hover:text-indigo-900 cursor-pointer hover:scale-105 ease-in-out">
                        <h1 className="font-semibold text-2xl">Can you keep up with Dijktra?</h1>
                        <small>Knapsack Dynamic Programming</small>
                      </div>
                    </Link>
                  </motion.div> */}


                </motion.div>
              </motion.div>
            </div>
                  
        </main>
      </motion.div>
    </AnimatePresence>
  )
}
