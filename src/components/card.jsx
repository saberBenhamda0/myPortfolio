import { motion } from 'framer-motion'
import projectOneImg from '../assets/images/project1.png'

export default function Cards(props) {
  return (
    <motion.div 

    className='w-[384px] shadow-2xl border-solid rounded-2xl  h-[456.388px]'> 
    <img
      alt="Meaningful alt text for an image that is not purely decorative"
      src={props.img}
      className='w-[384px] h-[200px] rounded-tl-2xl rounded-tr-2xl'
    />
    <div className='grid place-content-center'>
      <h5 className="mt-6 mb-6 text-2xl font-bold tracking-tight text-center text-white dark:text-gray-900">
        <p>
          {props.title}
        </p>
      </h5>
      <p className="font-normal text-center text-white dark:text-gray-400">
        <p>
            {props.discription}
        </p>
      </p>
      </div>
    </motion.div>
  )
}
