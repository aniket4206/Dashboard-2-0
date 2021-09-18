import { ArrowCircleRightIcon } from "@heroicons/react/solid"
import Image from "next/image"
import notifi from "../images/notification.jpg"
import WidgetsOption from "./WidgetsOption"

function Widgets() {
    return (
        <div className="select-none items-center border border-gray-500 xl:w-[30%] p-2 m-2 flex flex-col">
            <div className="flex flex-col items-center w-full">
                <h3>Hello John Bayer.</h3>
                <div className="flex w-full m-2">
                    <ArrowCircleRightIcon className="h-5 lg:w-[40%] w-[20%] md:w-[20%] sm:w-[30%]" />
                    <p className="text-sm w-[80%] lg:w-[60%] md:w-[80%] sm:w-[70%]">You have 8 New Applications Today!</p>
                </div>
            </div>
            <div>
            <Image 
             src={notifi}
             height={250}
             width={370}
            />
            </div>
            <WidgetsOption />
        </div>
    )
}

export default Widgets
