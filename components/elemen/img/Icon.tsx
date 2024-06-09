"use client"
import { useTheme } from 'next-themes';
import React, { useContext } from 'react'
type Icon ={
className?:string;

}

export const IconHero:React.FC<Icon> = ({className}) => {
    const {  theme } = useTheme();
    console.log(theme)
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="500" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="500" preserveAspectRatio="xMidYMid meet" version="1.0">
            <defs>
                <clipPath id="00d46969fb">
                    <path d="M 197 74.585938 L 354 74.585938 L 354 235 L 197 235 Z M 197 74.585938 " clipRule="nonzero" />
                </clipPath>
                <clipPath id="1d04d7db90">
                    <path d="M 21.003906 74.585938 L 228 74.585938 L 228 300.335938 L 21.003906 300.335938 Z M 21.003906 74.585938 " clipRule="nonzero" />
                </clipPath>
            </defs>
            <g clipPath="url(#00d46969fb)">
                <path fill={theme === "light" ?"#000": "#fff"} d="M 220.847656 192.363281 L 254.40625 118.195312 L 306.757812 234.730469 L 353.992188 234.730469 L 281.757812 74.738281 L 229.320312 74.738281 L 197.523438 144.039062 Z M 220.847656 192.363281 " fillOpacity="1" fillRule="evenodd" />
            </g>
            <g clipPath="url(#1d04d7db90)">
                <path fill={theme === "light" ?"#000": "#fff"} d="M 142.488281 74.738281 L 90.050781 74.738281 L 21.003906 234.730469 L 69.160156 234.730469 L 118.996094 118.195312 L 206 300.253906 L 227.726562 252.265625 Z M 142.488281 74.738281 " fillOpacity="1" fillRule="evenodd" />
            </g>
        </svg>
    );
}