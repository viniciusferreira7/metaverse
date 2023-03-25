'use client'

import styles from '../styles'
import { motion } from 'framer-motion'
import { navVariants } from '@/utils/motion'

function Navbar() {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      navbar
      <div className="absolute w-[50%] inset-0 gradient-01" />
    </motion.nav>
  )
}

export default Navbar
