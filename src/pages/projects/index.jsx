"use client"
import { useRef } from 'react'
import { motion } from 'framer-motion'
import rightIcon from '../../assets/svg/right-arrow-next-svgrepo-com.svg'
import { redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
import Menu from '../../components/Menu'
import projectOneImg from '../../assets/images/project1.png'
import Cards from '../../components/card'

const Projects = () =>   {

  return (
    <div className='w-screen bg-[#2f2f2f]'

    >
        <Menu />
        <Link to='/contact' className='fixed z-50 w-16 top-2/4 right-6'>
            <img src={rightIcon} alt='rightIcon' className='w-8 h-8 ' />
        </Link>
        <Link to='/about' className='fixed z-50 w-16 rotate-180 top-2/4 left-6'>
            <img src={rightIcon} alt='rightIcon' className='w-8 h-8 ' />
        </Link>

      <motion.div
        className=' top-0 left-0 w-screen bg-[#2f2f2f] h-[2500px] origin-right'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1, ease:[0.22, 1, 0.36, 1]}}

        >
      <div
    key='lasdkg'
    className=" w-screen h-[100vh] bg-[#2f2f2f] ">
          <div className='relative flex flex-col items-center w-screen mt-6 align-center '>
        <h1  className=' text-center mb-6 Roboto text-[#cacaca] font-bold uppercase text-2xl'>my full stack projects </h1>
        <h3 className='text-[#757575] text-center mb-6 r w-[900px]	 Roboto font-bold text-lg'>I mainly use React/Next.js for the frontend and Django (Python) for the backend. </h3>
        <p className='text-[#757575] text-center mb-6  w-[900px]	 Roboto font-bold text-lg'>React/Next.js provides a powerful and flexible frontend framework, allowing me to build dynamic and interactive user interfaces efficiently.</p>
        <p className='text-[#757575] text-center mb-6	 w-[900px] Roboto font-bold text-lg'>On the backend, I find Django to be an excellent choice for building robust web applications. Its batteries-included approach, with features like an ORM (Object-Relational Mapping) system, built-in authentication, and admin interface, speeds up the development process significantly. </p>

      </div>
      <div className='grid place-content-center'>
      <div className='flex flex-row justify-between w-screen h-full mt-20 items-top'>

      <motion.div
            initial={{y:"30vh", opacity:0}}
            whileInView={{y:0, opacity:1, transition:{duration:0.8}}}
      whileHover={{scale:1.1}} className=' ml-60' >
      <Cards 

      title="full stack social media app"
      discription='a social media app with all the feautres you will execpt from high tech company (authentication, authorization ,livechat systme)'
      img={projectOneImg}
      />

        </motion.div>

        <motion.div
        initial={{y:"30vh", opacity:0}}
        whileInView={{y:0, opacity:1, transition:{duration:0.8}}}
        whileHover={{scale:1.1}} className='mr-60' >
        <Cards />

         </motion.div>
         </div>

         <div className='flex flex-row justify-between w-screen h-screen mt-20  bg-[#2f2f2f] items-top'>

         <motion.div initial={{y:"30vh", opacity:0}}  whileInView={{y:0, opacity:1, transition:{duration:0.8}}} whileHover={{scale:1.1}} className=' ml-60' >

         <Cards />
         </motion.div>


        <motion.div initial={{y:"30vh", opacity:0}} whileInView={{y:0, opacity:1, transition:{duration:0.8}}}  whileHover={{scale:1.1}} className='mr-60' >
        <Cards />

         </motion.div>

         </div>

      </div>
      </div>
</motion.div>


    </div>

  )
}


export default Projects