'use client'

import { motion } from 'framer-motion'
import { TypingText, TitleText, NewFeatures } from '@/components'
import { staggerContainer, fadeIn, planetVariants } from '@/utils/motion'
import { newFeatures } from '../constants'
import styles from '../styles'
import Image from 'next/image'

function WhatsNew() {
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
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col "
        >
          <TypingText title="| What´s New?" />
          <TitleText title={<>What´s new about Metaverse?</>} />
          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
            {newFeatures.map((feature) => (
              <NewFeatures key={feature.title} {...feature} />
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={planetVariants('right')}
          className={`${styles.flexCenter} flex-1`}
        >
          <Image
            src="/whats-new.png"
            alt="planet"
            className="w-[90%] h-[90%] object-contain"
            width={1000}
            height={1000}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default WhatsNew
