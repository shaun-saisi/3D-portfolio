import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
  return (
   <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p 
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl 
      leading-[30px]'
    >
      Hello! I'm a software developer with a knack for coding in Python and JavaScript,
       building stuff on the web, and tinkering with AWS. I also know a bit about
        networking, which helps me understand how computers talk to each other. Lately, I've been diving into React-Three, trying to create cool 3D experiences for the web, and I'm super interested in AI too! 
      I'm all about learning new things and using technology to make cool stuff that actually matters.

    </motion.p>
   </>
  )
}

export default About