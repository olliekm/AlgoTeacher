'use client';
import React from 'react'
import HiddenCodeBlock from '@/components/HiddenCodeBlock'


function Page() {

    function scrollSection(location){
        document.getElementById(location).scrollIntoView({behavior:"smooth"})
    }

  return (
    <div className='w-full min-h-screen flex justify-center'>
        <div className="xl:w-1/2 border-white border-x-[1px] min-h-screen h-auto p-16 flex flex-col">
            <h1 className='font-serif text-4xl'>Algo Teacher</h1>
            <div className='w-full flex justify-between'>
                <h1 className='font-mono text-3xl italic'>Resources:</h1>
                <div className="flex space-x-4">
                    <button onClick={() => scrollSection('dp')} className='hover:underline decoration-wavy decoration-indigo-300'>Dynamic Programming</button>
                    <button onClick={() => scrollSection('graphs')} className='hover:underline decoration-wavy decoration-pink-300'>Graphs</button>
                    <button className='hover:underline decoration-wavy decoration-emerald-300'>Other</button>
                </div>
            </div>
            <div className="w-full py-8 ">
                <div className="h-64 w-full bg-[url('/milo.png')] bg-center bg-cover bg-no-repeat rounded-2xl flex items-center justify-center">
                    <h1 className='font-bold text-3xl'>Try out these resources!</h1>
                </div>
            </div>
            <div className="flex flex-wrap w-full gap-4">
                <a   href="https://dmoj.ca" target="_blank" rel="noopener noreferrer"className="px-8 h-16 bg-gradient-to-t from-yellow-300 to-yellow-600 flex items-center justify-center rounded-xl">
                    <h1>DMOJ</h1>
                </a>
                <a  href="https://codeforces.com/" target="_blank" rel="noopener noreferrer" className="px-8 h-16 bg-gradient-to-t from-blue-300 to-blue-600 flex items-center justify-center rounded-xl">
                    <h1>Codeforces</h1>
                </a>
                <a  href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className="px-8 h-16 bg-gradient-to-t from-orange-300 to-orange-600 flex items-center justify-center rounded-xl">
                    <h1>Leetcode</h1>
                </a>
                <a  href="https://cp-algorithms.com/" target="_blank" rel="noopener noreferrer" className="px-8 h-16 bg-gradient-to-t from-indigo-300 to-indigo-600 flex items-center justify-center rounded-xl">
                    <h1>cp-algorithms</h1>
                </a>
            </div>
            <div className="space-y-16 mt-32">
                <div id='dp' className="space-y-8">
                    <h1 className='font-bold text-2xl'>Dynamic Programming</h1>
                    <p>Dynamic Programming is a combination between greedy (best choice) and brute-force (trying everything). In Dynamic Programming, we usually think of 2 main components, state and transistion. State is what we are storing (memoizing) and transistion is how we decide to store our state.</p>
                    <p>Let&apos;s consider the the knapsack problem. Think about what our state and transistion are.</p>
                    <p>You might have figured out that our state is the maximum value of our knapsack at with a size i, and our transition is deciding whether to take the item or not. In other words, which is bigger? The current value of our knapsack or the value of the knapsack at i-(weight of item) plus the value of the item.</p>
                    <p>As an exercise, try coding up a solution and then comparing it with mine. Take note of the differences and think through the reasons behind them.</p>
                    <HiddenCodeBlock img={'/carbon.png'}/>
                    <p>Hopefully you are starting to understand this concept. But keep in mind, Dynamic Programming is a tough subject and is always confusing at first.</p>
                    <p>Try out these questions on dmoj for more practice:</p>
                    <div className="flex items-start gap-4 flex-wrap">
                      <div className='text-xl bg-black text-white rounded-2xl px-12 py-4 w-max hover:bg-transparent border-2 border-white hover:bg-white hover:text-black duration-150'>
                        <a href="https://dmoj.ca/problem/dpd" target="_blank" rel="noopener noreferrer">
                            <h1 className='text-lg font-mono'>Educational DP Contest AtCoder D - Knapsack 1</h1 >
                        </a>
                      </div>
                      <div className='text-xl  bg-black text-white rounded-2xl px-12 py-4 w-max hover:bg-transparent border-2 border-white hover:bg-white hover:text-black duration-150'>
                        <a href="https://dmoj.ca/problem/dpa" target="_blank" rel="noopener noreferrer">
                            <h1 className='text-lg font-mono'> Educational DP Contest AtCoder A - Frog 1</h1>
                        </a>
                      </div>
                      <div className='text-xl  bg-black text-white rounded-2xl px-12 py-4 w-max hover:bg-transparent border-2 border-white hover:bg-white hover:text-black duration-150'>
                        <a href="https://dmoj.ca/problem/dpb" target="_blank" rel="noopener noreferrer">
                            <h1 className='text-lg font-mono'> Educational DP Contest AtCoder A - Frog 2</h1>
                        </a>
                      </div>
                    </div>
                </div>
                <div id='graphs' className="space-y-8">
                    <h1 className='font-bold text-2xl'>Graphs</h1>
                    <p>Graphs are one of the most intimidating concepts for new programmers. But let me assure you that they are much more simple than you think.</p>
                    <p>Graphs in programming are made up of two main components, edges and nodes. If you think of it as a city, the houses and buildings can be thought of as nodes and the streets connecting them can be thought of as edges.</p>
                    <p>Graphs are incredibly important in programming since they allow you to model problems in a more comprehensible way. We could take the knapsack problem as an example of this. While we approach this problem using Dynamic Programming, there are ways to model the problem as a graph. For example, if we applied Dijkstra&apos;s algorithm (An algorthm used to find the shortest path from node a to node b), we could make the cost (distance or weight) of each edge the value of picking that item. Then we multiply the cost by -1, and then traverse (go through) the graph to find the shortest path.</p>
                    <p>Now that may have sounded complicated or boring, but trust me, you can do some really interesting things with graphs.</p>
                    <p>First we should learn how to make a graph. This can be done in many ways, but the two most popular are adjacency lists and adjacency matrices.</p>
                    <p>These two methods use the same fundamental idea. What is node A next to? In this case, it may be adjacent (next to) to node B and node C. That means, from node A, we can travel to node B or node C. If that is still confusing, let&apos;s look at a real world example. If you live in Canada, you are adjecent to the US, and the US is adjacent to Mexico. If you wanted to drive to Mexico from Canada, you must first drive to the US, and then from the US, drive to Mexico.</p>
                    <p>We can shake this up when we add directed edges, think of them as one-way streets. We can model school as a directed graph. From grade 10, you can only go to grade 11, and from grade 11, you can only go to grade 12. </p>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Page