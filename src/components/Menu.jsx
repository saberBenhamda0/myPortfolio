"use client"
import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import { redirect } from "react-router-dom";
import MenuIcon from '../assets/svg/icons8-menu.svg'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'


const Menu = () => {





    

    const menuVars = { 
        initial:{
            scaleX:0,
        },
        animate:{
            scaleX:1,
            transition:{
                duration:0.5,
                ease:[0.12, 0, 0.39, 0]
            }
        },
        exit:{
            scaleX:0,
            transition:{
                delay:0.3,
                duration:0.5,
                ease:[0.22, 1, 0.36, 1]
            }
        }
    } 


    const navbarLinks = [
        {title:"Home", href:"/myPortfolio"},
        {title:"About", href:"/myPortfolio/about/"},
        {title:"Projects",href:"/myPortfolio/projects"},
        {title:"Contact", href:"/myPortfolio/Contact"},
    ]

    
    const [open, setOpen] = useState(false)
    const toggleMenu = () => {setOpen(prevOpen => !prevOpen)}
  return (
    <div className='  bg-[#cacaca] fixed place-content-center grid z-10'>
        <motion.div whileHover={{scale:1.1}}  onClick={toggleMenu} className='fixed z-50 w-16 h-16 mr-10 cursor-pointer top-6 right-6'>
            <img src={MenuIcon} alt='menuIcon' className='w-8 h-8 ' />
        </motion.div>

        <AnimatePresence>

        {   open && (
            <motion.div  variants={menuVars} initial="initial" animate="animate" exit="exit" className='fixed w-screen h-screen z-40 grid place-content-center origin-top-right bg-[#333333] '>
            {navbarLinks.map((link, index) =>{
                return (

                <motion.div
                initial={{transition:{staggedChildren:0.9}}}
                animate={{transition:{staggedChildren:0.09, delayChildren:0.3}}}
                transition={{duration:1, ease:[0.22, 1, 0.36, 1]}}

                key={index} className='grid overflow-hidden place-content-center'>
                    {open && (
                        <motion.div 
                        transition={{duration:1}}
                        initial={{y:"30vh", transition:{duration:0.5}}} animate={{y:0, transition:{duration:0.7}}} exit={{y:"-30vh"}} >
                    <Link  to={link.href}  className='m-2 text-4xl font-bold uppercase origin-top cursor-pointer text-slate-200 font-lato'>
                            {link.title}
                    </Link>
                    </motion.div>)}

                </motion.div>

            )})}

        </motion.div>
            )
        }
    </AnimatePresence>
        
    </div>
  )
}


export default Menu



