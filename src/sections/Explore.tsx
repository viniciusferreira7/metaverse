'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { TypingText, ExploreCard, TitleText } from '@/components'
import { staggerContainer } from '@/utils/motion'
import { exploreWorlds } from '../constants'
import styles from '../styles'

function Explore() {
  const [active, setActive] = useState('world-2')

  function handleClick(id: string) {
    setActive(id)
  }

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the world you want <br className="md:block hidden" /> to
              Explore
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={index}
              index={index}
              {...world}
              active={active}
              handleClick={handleClick}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Explore
