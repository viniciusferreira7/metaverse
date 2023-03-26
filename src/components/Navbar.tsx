'use client'

import styles from '../styles'
import { motion } from 'framer-motion'
import { navVariants } from '@/utils/motion'
import Image from 'next/image'

function Navbar() {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <Image
          src="/search.svg"
          alt="magnifier"
          width={32}
          height={32}
          className="w-[24px] h-[24px] object-contain cursor-pointer"
        />
        <h2 className="font-extrabold text-[24px] leading-[24px] text-white">
          Metaverse
        </h2>
        <Image
          src="/menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="w-[24px] h-[24px] cursor-pointer object-contain"
        />
      </div>
    </motion.nav>
  )
}

export default Navbar
