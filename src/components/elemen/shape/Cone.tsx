import * as React from "react"
import { cn } from "../../../lib/utils"

type ShapeProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string
  title?: string
}

const Cone = ({ className, size = 96, title = "Cone outline", ...props }: ShapeProps) => {
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
      <path d="M48 14L20 70" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M48 14L76 70" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="48" cy="70" rx="28" ry="10" stroke="currentColor" strokeWidth="3" />
    </svg>
  )
}

export default React.memo(Cone)
