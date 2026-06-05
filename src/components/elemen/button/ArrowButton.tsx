"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/src/lib/utils"
import Link, { LinkProps } from "next/link"

type ArrowButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
    LinkProps & {
        label?: string
    }

const ArrowButton = React.forwardRef<HTMLAnchorElement, ArrowButtonProps>(
    ({ className, label = "Scroll down", ...props }, ref) => {
        return (
            <Link
                ref={ref}
                aria-label={label}
                className={cn(
                    "items-center justify-center relative isolate ",
                    className
                )}
                {...props}
            >
                <motion.span
                    aria-hidden="true"
                    className="relative flex items-center justify-center hover:text-blue-500 dark:text-blue-100 dark:hover:text-blue-100"
                    animate={{ y: [0, 7, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown className="absolute top-0 size-32 stroke-[1.4] " />
                    <ChevronDown className="absolute top-7 size-32 stroke-[1.4]" />
                </motion.span>
            </Link>
        )
    }
)

ArrowButton.displayName = "ArrowButton"

export default React.memo(ArrowButton)
