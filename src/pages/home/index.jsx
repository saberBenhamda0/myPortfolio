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
import SocialMediaLinks from '../../components/SocialMediaLinks';


function Home() {

    const [clicked, setClicked] = useState(false)

  return (
    <motion.div
    initial={{opacity:0, y:"30vh"}}
    animate={{opacity:1, y:0}}
    transition={{duration:1}}
    >
            <Menu />
            
    <SocialMediaLinks />

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