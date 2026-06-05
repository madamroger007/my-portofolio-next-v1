import Link from "next/link";
import TooltipComponent from "../TooltipComponent";
import { GiConsoleController } from "react-icons/gi";
import { RiCodeBoxFill } from "react-icons/ri";
import { FaPaintBrush } from "react-icons/fa";
const CardRoundedItem = () => {
    return (
        <div className="rounded-badge px-4 py-2 max-w-sm flex items-center justify-center gap-5 border-2 border-gray-900 dark:border-white">
            <TooltipComponent tooltip="See my playlist games">
                <Link href="#gaming">
                    <GiConsoleController className="size-10" />
                </Link>
            </TooltipComponent>
            <div className="w-[3px] h-[40px] bg-gray-900 dark:bg-white"></div>
            <TooltipComponent tooltip="See my projects">
                <Link href="/project">
                    <RiCodeBoxFill className="size-10 " />
                </Link>
            </TooltipComponent>
            <div className="w-[3px] h-[40px] bg-gray-900 dark:bg-white"></div>
            <TooltipComponent tooltip="See my design">
                <Link href="/project">
                    <FaPaintBrush className="size-8" />
                </Link>
            </TooltipComponent>
        </div>
    )
}
export default CardRoundedItem;