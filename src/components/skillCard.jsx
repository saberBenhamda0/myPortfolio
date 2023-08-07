import React from 'react'
import { motion } from 'framer-motion'

const SkillCard = (props) => {
  return (
    <motion.div


    className='flex flex-col content-center w-full h-full rounded-xl bg-[#262424] border-solid border-r-[1px] border-t-[1px] border-b-[1px] border-[#4d4e50] justify-top '>
    <div className='grid mt-8 place-content-center'> 
        <div className='grid mb-4 place-content-center'>
            <img src={props.img} className='w-16 h-16 rounded-full ' />
        </div>
        <h1 className='mb-4 text-2xl font-bold text-center text-slate-200 font-roboto '>
            {props.title}
        </h1>
        <h3 className='text-xl font-medium text-center text-slate-400 '>
            {props.discription}
        </h3>
    </div>
    <div className='grid mt-10 place-content-center'>
        <h1 className='mb-8 text-xl font-semibold text-center text-slate-200 '>Skills :</h1>
        <div className='text-lg font-medium text-slate-400'>
            {props.skills.map((skill)=>{
                return<ol>{skill}</ol>
                
            })}
        </div>
    </div>
</motion.div>  )
}

export default SkillCard