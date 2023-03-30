'use client'

import { motion } from 'framer-motion'
import { textContainer, textVariant2 } from '@/utils/motion'
import { ReactElement } from 'react'

interface TypingTextProps {
  title: string
  textStyles: string
}

export function TypingText({ title, textStyles }: TypingTextProps) {
  return (
    <motion.p
      variants={textContainer}
      className={`${textStyles} font-normal text-[17px] text-secondary-white `}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span key={index} variants={textVariant2}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.p>
  )
}

interface TitleTextProps {
  title: ReactElement
  textStyles: string
}

export function TitleText({ title, textStyles }: TitleTextProps) {
  return (
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${textStyles} mt-[8px] font-bold md:text-[64px] text-[40px] text-white`}
    >
      {title}
    </motion.h2>
  )
}
