import {MailIcon,PhoneIcon} from "@heroicons/react/solid"
import {UserIcon} from "@heroicons/react/outline"

function WidgetsOptions({ title,subTitle }) {
    return (
        <div className="flex p-2 space-x-4">
            <div className="w-[70%] flex space-x-2 sm:space-x-4 md:space-x-6 items-center">
                <UserIcon className="h-5 border border-gray-500 rounded-full cursor-pointer" />
                <div className="flex flex-col space-x-1 items-center">
                    <h2 className="text-lg md:text-sm">{title}</h2>
                    <h5 className="text-xs ">Applied to <span className="text-blue-500">{subTitle}</span></h5>
                </div>
            </div>
            <div className="flex justify-evenly items-center w-[30%]">
                <MailIcon className="h-5  border border-gray-500 rounded-full bg-gray-700 cursor-pointer" />
                <PhoneIcon className="h-5 border border-gray-500 rounded-full bg-gray-700 cursor-pointer" />
            </div>
        </div>
    )
}

export default WidgetsOptions
