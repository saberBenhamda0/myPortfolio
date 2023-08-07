import { useState } from 'react'
import rightIcon from '../../assets/svg/right-arrow-next-svgrepo-com.svg'
import { Navigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Transition from '../../Transition';
import { AnimatePresence, motion } from 'framer-motion';
import { redirect } from 'react-router-dom';
import Menu from '../../components/Menu';
import Lottie from "lottie-react";
import homeanimationData from '../../assets/animation/homeanimation.json'


function Home() {

    const [clicked, setClicked] = useState(false)

  return (
    <motion.div
    initial={{opacity:0, y:"30vh"}}
    animate={{opacity:1, y:0}}
    transition={{duration:1}}
    >
            <Menu />
    <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-7 w-7"
  style={{color: "#000000"}}
  fill="currentColor"
  viewBox="0 0 24 24">
  <path
    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
</svg>
<div className='grid w-12 h-12 bg-blue-700 place-content-center'>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class=" h-7 w-7"
    fill="currentColor"
    style={{color: "#0077b5"}}
    viewBox="0 0 24 24">
    <path
      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
  </svg>
</div>

    <div className= "w-screen h-screen bg-[#2f2f2f] flex flex-row-reverse align-middle">

        <Link to='/myPortfolio/about' className='fixed z-50 w-16 top-2/4 right-6'>
            <img src={rightIcon} alt='rightIcon' className='w-8 h-8 ' />
        </Link>
        <div className='grid flex-1 place-content-center'>
        <Lottie animationData={homeanimationData} className='w-[400px] h-[400px] ' loop={true}/>
        </div>
            <div className='relative grid flex-1 w-full h-screen place-content-center'>
                <h1 className=' text-center mb-6 Roboto text-[#cacaca] font-bold text-2xl'>hello my name is saber ben hamda</h1>
                <h3 className='text-[#585858] text-center mb-2	 Roboto font-bold text-lg'>i'm a freelance fullstack web developer i manly use react and django</h3>
                <h3  className=' cursor-pointer text-center text-[#585858]  Roboto font-bold text-lg'>feel free to check all the project in the next pages </h3>
                </div>
        </div>



    
    </motion.div>
  )
}

export default Home