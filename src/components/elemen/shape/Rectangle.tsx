"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "../../../lib/utils"

type ShapeProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string
  title?: string
  isRotating?: boolean
  rotateDuration?: number
}

const Rectangle = ({
  className,
  size = 112,
  title = "Rectangle outline",
  isRotating = false,
  rotateDuration = 28,
  ...props
}: ShapeProps) => {
  return (
    <svg
      width={size}
      height={typeof size === "number" ? size * 0.7 : size}
      viewBox="0 0 112 78"
      fill="none"
      role="img"
      aria-label={title}
      className={cn("stroke-slate-950 dark:stroke-blue-500", className)}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <motion.rect
        x="12"
        y="14"
        width="50"
        height="50"
        rx="4"
        stroke="currentColor"
        strokeWidth="2"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        animate={isRotating ? { rotate: 360 } : { rotate: 0 }}
        transition={isRotating ? { duration: rotateDuration, repeat: Infinity, ease: "linear" } : undefined}
      />
    </svg>
  )
}

export default React.memo(Rectangle)
