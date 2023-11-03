"use client";
import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import Link from 'next/link';

function page() {
  return (
    <AnimatePresence>
        <motion.div 
        initial={{opacity:0, y:13}}
        animate={{opacity:1, y:0}}
        exist={{opacity:0, y:15}}
        transition={{delay:0.33}}
        className='space-y-4 text-xl '>
            
            <div className="text-xl p-24 pb-8 space-y-4">
                <div className="">
                    <h1 className="font-mono text-4xl"><Link href={'/'}>Algo Teacher</Link>: Can you knapsack?</h1>
                </div>
                <div className="">                    
                    <p>Think about the general steps and set of rules that lead you to your solution.</p>
                    <p>Would these apply to every situation?</p>
                    <p>Let's look at one of the most important concepts, dp tables.</p>
                    <p>For knapsack, we need a 2 dimensional dp table where at d[i][j], we store the max value we can obtain with a knapsack of size j.</p>
                    <p>With a dp table, we can perform useful operations.</p>
                    <p>Lets say we are checking whether we should an item n, this item n has a weight of u and a value of v. Therefore, the maximum value we can obtain if we take this item is the value at dp[i-1][j-u] + v. Meaning that if our item takes up u space, our effective knapsack space is  j-u, so we take the maximum value at our effective knapsack space     which is stored at dp[i-1][j-u]</p>
                </div>
            </div>
            <div className="p-8 flex flex-col space-y-4 items-center">
                <table class="border-collapse border rounded-2xl text-3xl font-serif">
                    <tbody>
                        <tr>
                        <td class="border border-white/50 p-4">Index</td>
                        <td class="border border-white/50 p-4 italic">j=0</td>
                        <td class="border border-white/50 p-4 italic">j=1</td>
                        <td class="border border-white/50 p-4 italic">j=2</td>
                        </tr>
                        <tr>
                        <td class="border border-white/50 p-4 italic">i=0</td>
                        <td class="border border-white/50 p-4">/</td>
                        <td class="border border-white/50 p-4">/</td>
                        <td class="border border-white/50 p-4">/</td>
                        </tr>
                        <tr>
                        <td class="border border-white/50 p-4 italic">i=1</td>
                        <td class="border border-white/50 p-4">/</td>
                        <td class="border border-white/50 p-4">/</td>
                        <td class="border border-white/50 p-4">/</td>
                        </tr>
                        <tr>
                        <td class="border border-white/50 p-4 italic">i=2</td>
                        <td class="border border-white/50 p-4">/</td>
                        <td class="border border-white/50 p-4">/</td>
                        <td class="border border-white/50 p-4">/</td>
                        </tr>
                    </tbody>
                </table>
                <table class="border-collapse border rounded-2xl text-3xl font-serif">
                    <tbody>
                        <tr>
                        <td class="border border-white/50 p-4">Index</td>
                        <td class="border border-white/50 p-4 italic">j=0</td>
                        <td class="border border-white/50 p-4 italic">j=1</td>
                        <td class="border border-white/50 p-4 italic">j=2</td>
                        </tr>
                        <tr>
                        <td class="border border-white/50 p-4 italic">i=0</td>
                        <td class="border border-white/50 p-4"><input type="number" className='bg-white/10' placeholder='value'     /></td>
                        <td class="border border-white/50 p-4"><input type="number" className='bg-white/10' placeholder='value' /></td>
                        <td class="border border-white/50 p-4"><input type="number" className='bg-white/10' placeholder='value' /></td>
                        </tr>
                        <tr>
                        <td class="border border-white/50 p-4 italic">i=1</td>
                        <td class="border border-white/50 p-4"><input type="number" className='bg-white/10' placeholder='value' /></td>
                        <td class="border border-white/50 p-4"><input type="number" className='bg-white/10' placeholder='value' /></td>
                        <td class="border border-white/50 p-4"><input type="number" className='bg-white/10' placeholder='value' /></td>
                        </tr>
                        <tr>
                        <td class="border border-white/50 p-4 italic">i=2</td>
                        <td class="border border-white/50 p-4"><input type="number" className='bg-white/10' placeholder='value' /></td>
                        <td class="border border-white/50 p-4"><input type="number" className='bg-white/10' placeholder='value' /></td>
                        <td class="border border-white/50 p-4"><input type="number" className='bg-white/10' placeholder='value' />  </td>
                        </tr>
                    </tbody>
                </table>
                <p>Looking at the table can you figure out where our final answer will end up? </p>
            </div>
            <Link href={'/knapsack/info'}>
                <div className="w-full flex flex-col h-96 overflow-hidden cursor-pointer bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-pink-900 via-violet-600/0 to-sky-900/0  hover:from-emerald-900 hover:via-violet-600/0 hover:to-sky-900/0 justify-center items-center transition-colors duration-200 group">
                <motion.h1 
                initial={{ opacity: 0, y:100, scale: 0.8 }}
                whileInView={{ opacity: 1, y:0, scale: 1.2 }}
                transition={{
                    stiffness: 100,
                }}

                class="text-white group-hover:tracking-[.3em] ease-in duration-75  text-7xl inline-block text-transparent bg-clip-text font-serif mt-8">Keep going</motion.h1>

                <motion.h1 
                initial={{ opacity: 0, y:100, scale: 0.8 }}
                whileInView={{ opacity: 1, y:0, scale: 1.2 }}
                transition={{
                    stiffness: 100,
                    delay:.1
                }}

                class="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 text-xl inline-block text-transparent bg-clip-text font-serif mt-8">Check out the code</motion.h1>

                </div>
            </Link>

        </motion.div>
    </AnimatePresence>
  )
}

export default page