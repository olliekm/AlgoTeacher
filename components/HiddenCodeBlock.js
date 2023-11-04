"use client";
import React, {useState} from 'react'
import Image from 'next/image'

function HiddenCodeBlock({img}) {
    const [show, setShow] = useState(false)
  return (
    <div className='w-full h-auto overflow-hidden relative rounded-2xl flex justify-center items-center border-2'>
        <button onClick={() => setShow(!show)} className="px-4 py-2 bg-indigo-700 rounded-2xl hover:bg-indigo-400 z-10 absolute">{show ? 'Hide code':'Show code'}</button>
        <Image
          src={img} 
          width={800}
          height={500}
          alt="Picture of the author"
          blurDataURL="data:..." 
          placeholder="blur"
          className={`w-full h-full ${show ? 'blur-none':'blur-lg'}`}
        />
    </div>
  )
}

export default HiddenCodeBlock