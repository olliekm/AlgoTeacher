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
              className="w-full relative h-full text-center flex space-y-8 flex-col items-center justify-center bg-gradient-to-tr from-violet-500 to-orange-300 lg:rounded-[8rem] rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
                <div className="absolute bottom-0 w-full flex justify-center py-4">
                  <motion.h1
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 1,
                      ease: [0, 0.71, 0.2, 1.01]
                    }}
                    className="text-indigo-800 text-2xl uppercase tracking-widest font-light"
                  >
                    <Link href={'/'}>
                      Back
                    </Link>
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
                  <h2 className="font-mono text-3xl">Learn algorithms, the hands on way!</h2>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: .9,
                    ease: [0, 0.71, 0.2, 1.01]
                  }}
                  className="text-center"
                >
                  <h2 className="font-mono text-3xl">When I first learned data structures and algorithms, I found it hard to grasp.</h2>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 1.0,
                    ease: [0, 0.71, 0.2, 1.01]
                  }}
                  className="text-center"
                >
                  <h2 className="font-mono text-3xl">I made Algo Teacher to show that learning algorithms doesn&apos;t have to be hard!</h2>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 1.2,
                    ease: [0, 0.71, 0.2, 1.01]
                  }}
                  className="text-center"
                >
                  <h2 className="font-mono text-3xl">My name is Oliver Kwun-Morfitt and I am a high school student in Toronto, Ontario.</h2>
                </motion.div>
                <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-wrap gap-4 py-16 justify-center">
                  


                </motion.div>
              </motion.div>
            </div>
                  
        </main>
      </motion.div>
    </AnimatePresence>
  )
}
