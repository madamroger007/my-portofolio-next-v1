import * as React from "react"
import { cn } from "../../../lib/utils"

type ShapeProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string
  title?: string
}

const Circle = ({ className, size = 96, title = "Circle outline", ...props }: ShapeProps) => {
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
      <circle cx="48" cy="48" r="34" stroke="currentColor" strokeWidth="3" />
    </svg>
  )
}

export default React.memo(Circle)
