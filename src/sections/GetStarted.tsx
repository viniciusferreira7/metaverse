'use client'

import { motion } from 'framer-motion'
import { TypingText, StartSteps, TitleText } from '@/components'
import { staggerContainer, planetVariants, fadeIn } from '@/utils/motion'
import { startingFeatures } from '../constants'
import styles from '../styles'
import Image from 'next/image'

function GetStarted() {
  return (
    <section className={`${styles.paddings} relative z-0`}>
      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={planetVariants('left')}
          className={`${styles.flexCenter} flex-1`}
        >
          <Image
            src="/get-started.png"
            alt="planet"
            className="w-[90%] h-[90%] object-contain"
            width={1000}
            height={1000}
          />
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col "
        >
          <TypingText title="| How Metaverse Works" />
          <TitleText title={<>Get Started with just a few clicks</>} />
          <div className="mt-[32px] flex flex-col max-w-[370px] gap-[24px]">
            {startingFeatures.map((feature, index) => (
              <StartSteps key={index} number={index + 1} text={feature} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default GetStarted
