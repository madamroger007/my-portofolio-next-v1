import * as React from "react"
import { cn } from "../../../lib/utils"

type ShapeProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string
  title?: string
}

const Octagon = ({ className, size = 96, title = "Octagon outline", ...props }: ShapeProps) => {
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
      <path
        d="M35 14H61L82 35V61L61 82H35L14 61V35L35 14Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default React.memo(Octagon)
