'use client'

import { motion } from 'framer-motion'
import { textContainer, textVariant2 } from '@/utils/motion'

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

export function TitleText() {
  return <h2>Title Text</h2>
}
