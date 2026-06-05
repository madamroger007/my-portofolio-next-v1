import * as React from "react"
import { cn } from "../../../lib/utils"

type ShapeProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string
  title?: string
}

const Triangle = ({ className, size = 96, title = "Triangle outline", ...props }: ShapeProps) => {
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
      <path d="M48 14L82 76H14L48 14Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
    </svg>
  )
}

export default React.memo(Triangle)
