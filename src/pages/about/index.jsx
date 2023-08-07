import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import rightIcon from '../../assets/svg/right-arrow-next-svgrepo-com.svg'
import Menu from '../../components/Menu'
import myPic from '../../assets/images/myPic.jpg'
import { redirect } from "react-router-dom";
import { motion } from 'framer-motion'
import SkillCard from '../../components/skillCard'
import frontendIcon from '../../assets/images/web-design.png'
import backendIcon from '../../assets/images/backend.png'
import webSecurityIcon from '../../assets/images/shield.png'
import Lottie from 'lottie-react'
import collegeanimation from '../../assets/animation/collegeanimation.json'

const About = () => {


  return (
    <>
    <motion.div 
        initial={{opacity:0, y:"-30vh"}}
        animate={{opacity:1, y:0}}
        transition={{duration:1}}
    className='flex flex-row justify-between w-screen h-screen bg-[#2f2f2f]'>
        <Menu />
        <Link to='/myPortfolio/projects' className='fixed z-50 w-16 cursor-pointer top-2/4 right-6'>
            <img src={rightIcon} alt='rightIcon' className='w-8 h-8 ' />
        </Link>
        <Link to='/myPortfolio' className='fixed z-50 w-16 rotate-180 cursor-pointer top-2/4 left-6'>
            <img src={rightIcon} alt='rightIcon' className='w-8 h-8 ' />
        </Link>
        <div className= 'flex flex-col justify-between w-screen h-screen '>
            <div className='grid h-2/4 place-content-center'>
                <h1 className='text-3xl text-[#cacaca] font-extrabold text-center '>
                    Hello  my name is Saber Ben Hamda 
                </h1>
            </div>
            <div className='grid h-2/4 place-content-center'>
                <h3 className='mb-32 text-xl font-semibold text-[#959494] text-center w-60'>
                    i'm a computer science student and a full stack web dev passionate  about software development and web security 
                </h3>
                <div className="absolute top-0 left-[-250px] w-[450px] h-[450px] rounded-full blur-3xl bg-slate-700 opacity-50"></div>

            </div>

        </div>
        <div className='grid w-screen mb-32 opacity-75 place-content-center'>
             <img className='z-10 rounded-full' src={myPic} />
             <div class=" z-0 absolute top-[120px] right-[200px]  w-[350px] h-[350px] rounded-full blur-3xl bg-gray-500 opacity-50"></div>
        </div>

    </motion.div>
        
    <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1,transition:{duration:0.7, ease:[0.12, 0, 0.39, 0]}}}
        
         className='w-screen h-screen flex flex-row justify-between  bg-[#262424]'>
        <div className='grid w-screen mt-4 place-content-start ml-28'>
            <h1  className='mb-12 text-4xl font-bold tracking-tight bg-sla text-slate-200 sm:text-5xl'>My Acamedic Journey</h1>
            <motion.div className='grid place-content-center'>
                 <Lottie loop={true} animationData={collegeanimation} className=' mr-36'/>
            </motion.div>
        </div>
        <div 
        className='grid grid-rows-3 mt-12 mb-12 place-content-end'>
        <motion.div  className='hover:bg-slate-600 transition-all ease-linear rounded-2xl  w-[517.2px] '>
            <div className='ml-6 text-xl font-semibold tracking-tight text-slate-200'>
            my computer science degree
            </div>
            <div>
                <h1 className='ml-6 text-base font-semibold tracking-tight text-slate-400'>
                2021 - 2024

                </h1>
                <h1 className='ml-6 text-base font-semibold tracking-tight text-slate-400'>
                    FST tanger
                </h1>
                <p className='text-base ml-4 font-light tracking-tight text-[#cacaca]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis omnis eos adipisci sunt? Sapiente tempore, quasi maxime veritatis adipisci hic, libero cupiditate, a corrupti dolore fuga magnam sunt voluptas dolores!
                </p>
            </div>
        </motion.div>
        <motion.div  className='hover:bg-slate-600 ease-linear transition-all rounded-2xl w-[517.2px]'>
            <div className='ml-6 text-xl font-semibold tracking-tight text-slate-200'>
            my master degree
            </div>
            <div>
                <h1 className='ml-6 text-base font-semibold tracking-tight text-slate-400'>
                    2024 - 2026

                </h1>
                <h1 className='ml-6 text-base font-semibold tracking-tight text-slate-400'>
                    FST tanger
                </h1>
                <p className='text-base ml-4 font-light tracking-tight text-[#cacaca]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis omnis eos adipisci sunt? Sapiente tempore, quasi maxime veritatis adipisci hic, libero cupiditate, a corrupti dolore fuga magnam sunt voluptas dolores!
                </p>
            </div>
        </motion.div>
        <motion.div   className='hover:bg-slate-600 transition-all ease-linear rounded-2xl w-[517.2px] '>
            <div className='ml-6 text-xl font-semibold tracking-tight text-slate-200'>
            my first full time job
            </div>
            <div>
                <h1 className='ml-6 text-base font-semibold tracking-tight text-slate-400'>
                2026 - one Day
                </h1>
                <h1 className='ml-6 text-base font-semibold tracking-tight text-slate-400'>
                    where that shit
                </h1>
                <p className='text-base ml-4 font-light tracking-tight text-[#cacaca]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis omnis eos adipisci sunt? Sapiente tempore, quasi maxime veritatis adipisci hic, libero cupiditate, a corrupti dolore fuga magnam sunt voluptas dolores!
                </p>
            </div>
        </motion.div>
        </div>
    </motion.div>
    <motion.div 
                initial={{opacity:0, y:"30vh"}}
                whileInView={{opacity:1,y:0,transition:{duration:1, delay:0.2}}}
    className='w-screen h-screen place-content-center grid bg-[#2f2f2f]'>
        <h1>
            my skills
        </h1>
        <section 

        className='grid grid-cols-3 w-[1144px] rounded-2xl h-[617px] grid-rows-1 mt-12 mb-12 border-solid border-l-[1px] border-[#4d4e50] place-content-center'>
        <SkillCard
            img={frontendIcon}
            title="Frontend Development"
            discription="I like bringing designs to life in the browser"
            skills={["html","css","javascript","react","nextjs13"]}
                        
                        />    

            <SkillCard
            img={backendIcon}
            title="Backend Development"
            discription="Writing secure code to communicate between user browser and databases"
            skills={["python","django","mongodb","postgresql"]}
                        
            />            
            <SkillCard
            img={webSecurityIcon}
            title="Web Security"
            discription="using my exp as a security researcher (bug bounty) to secure your website"
            skills={["kali","burpsuite","OWASP10"]}
                        
             />            
        </section>

    </motion.div>
    </>
  )
}

export default About