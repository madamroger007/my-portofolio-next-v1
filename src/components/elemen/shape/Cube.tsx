"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "../../../lib/utils"

type ShapeProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string
  title?: string
  isFloating?: boolean
  floatDistance?: number
  floatDuration?: number
}

const Cube = ({
  className,
  size = 96,
  title = "Cube outline",
  isFloating = false,
  floatDistance = 8,
  floatDuration = 3,
  ...props
}: ShapeProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 96 96"
      fill="none"
      role="img"
      aria-label={title}
      className={cn("text-[#286F6C]", className)}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <motion.g
        animate={isFloating ? { y: [-floatDistance, floatDistance, -floatDistance] } : { y: 0 }}
        transition={
          isFloating
            ? { duration: floatDuration, repeat: Infinity, ease: "easeInOut" }
            : undefined
        }
      >
        <path d="M22 34L48 20L74 34V66L48 82L22 66V34Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <path d="M22 34L48 50L74 34" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <path d="M48 50V82" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </motion.g>
    </svg>
  )
}

export default React.memo(Cube)
