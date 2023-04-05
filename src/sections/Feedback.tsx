'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, zoomIn } from '@/utils/motion'
import styles from '../styles'
import Image from 'next/image'

function Feedback() {
  return (
    <section className={`${styles.paddings} relative z-0`}>
      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex flex-[0.5] lg:max-w-[370px] 
            flex-col justify-end gradient-05 
            sm:p-8 p-4 rounded-[32px] 
            border-[1px] border-[#6a6a6a] relative"
        >
          <div className="feedback-gradient" />
          <div>
            <h4 className="font-bold sm:text-[32px] text-[24px] sm:leading-[40px] leading-[36px] text-white">
              Samantha
            </h4>
            <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[22px] text-white">
              Founder | Metaverse{' '}
            </p>
          </div>
          <p className="mt-[8px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
            &quot;With the development of today&apos;s technology, metaverse is
            very useful for today`&apos;`s work, or can be called web 3.0 by
            using metaverse you can use it as anything&quot;
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="relative flex-1 flex justify-center items-center"
        >
          <Image
            src="/planet-09.png"
            alt="planet"
            width={900}
            height={610}
            className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
          />
          <motion.div
            variants={zoomIn(0.4, 1)}
            className="lg:block hidden absolute -left-[10%] top-[3%]"
          >
            <Image
              src="/stamp.png"
              alt="stamp"
              width={180}
              height={188}
              className="w-[155px] h-[155px] object-contain"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Feedback
