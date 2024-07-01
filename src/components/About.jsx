import React from 'react'
import {Tilt}  from 'react-tilt'
import { motion } from 'framer-motion'
import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
const About = () => {
  return <>
  <motion.dev variants={textVariant()}>
    <p className={styles.sectionSubText}>introduction</p>
    <h2 className={styles.sectionHeadText}>overview.</h2>
  </motion.dev>
  <motion.p variants={fadeIn("","",0.1,1)} className=' mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestias ad sint unde quo! Voluptates, quasi! Iure, neque alias. Architecto alias rem, atque accusamus itaque repellat sapiente reiciendis consequatur dolores ullam nisi deserunt maxime quam placeat laborum nam corrupti commodi eos quo, corporis quos. Dignissimos rem incidunt ex nam dolorum dolorem, sunt, beatae placeat vel amet pariatur quidem laboriosam. At debitis suscipit, dicta molestias voluptatem incidunt quam atque eligendi soluta?
  </motion.p>
  <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
  </>
}

export default SectionWrapper (About,"about")