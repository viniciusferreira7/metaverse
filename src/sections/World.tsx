'use client'

import { motion } from 'framer-motion'
import { TypingText, TitleText } from '@/components'
import { staggerContainer, fadeIn } from '@/utils/motion'
import { newFeatures } from '../constants'
import styles from '../styles'
import Image from 'next/image'

function World() {
  return (
    <section className={`${styles.paddings} relative z-0`}>
      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| People on the world" textStyles="text-center" />
        <TitleText
          title={
            <>
              Track friends around you and invite then to play together in the
              same world
            </>
          }
          textStyles="text-center"
        />
        <motion.div
          variants={fadeIn('up,', 'tween', 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550px]"
        >
          <Image
            src="/map.png"
            alt="map"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-[40px] right-[30%] w-28 h-20 ">
            <Image
              src="/planet-07.png"
              alt="planet"
              width={250}
              height={250}
              className="object-cover w-full h-full rounded-lg"
            />
            <div className="w-full bg-orange-300 opacity-60 text-center absolute bottom-0 p-1 rounded-bl-lg rounded-br-lg">
              <p className="text-white text-xs font-bold tracking-wide">
                Andrômeda
              </p>
            </div>
          </div>
          <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <Image
              src="/people-01.png"
              alt="people"
              width={70}
              height={70}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-12 left-24 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <Image
              src="/people-02.png"
              alt="people"
              width={70}
              height={70}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-52 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <Image
              src="/people-03.png"
              alt="people"
              width={70}
              height={70}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-[120px] left-[12%] w-28 h-20">
            <Image
              src="/planet-09.png"
              alt="planet"
              width={250}
              height={250}
              className="object-cover w-full h-full rounded-lg"
            />
            <div className="w-full bg-purple-400 opacity-60 text-center absolute bottom-0 p-1 rounded-bl-lg rounded-br-lg">
              <p className="text-white text-xs font-bold tracking-wide">
                Outer Edge
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default World
