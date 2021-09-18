import { TrendingUpIcon,PaperAirplaneIcon } from "@heroicons/react/solid";

function BottomSectionOptions({ selected,maintitle,maintitle2,subtitle1,subtitle2,percentage1,percentage2,total1,total2,buttontitle }) {
    return (
        <div className="select-none xl-w-[50%] flex flex-col space-y-5 p-2 m-2 border border-gray-500 items-center">
            <div className="flex -mb-4">
            {selected && <PaperAirplaneIcon className="h-5 text-red-400" />}
            <h4 className={`${selected && "text-red-400"}`}>{maintitle}</h4>
            </div>
            {maintitle2 && <h2 className="text-xs">{maintitle2}</h2>}
            <div className="flex w-full">
                <div className="flex flex-col p-2 space-y-2 items-center w-[50%] border-r border-gray-500 ">
                    <p className="text-xs">{subtitle1}</p>
                    <div className="flex text-blue-500 items-center space-x-2">
                        <TrendingUpIcon className="h-5" />
                        <p>+{percentage1}%</p>
                    </div>
                    <h2>{total1}</h2>
                </div>
                <div className="p-2 flex flex-col space-y-2 w-[50%] items-center">
                    <p className="text-xs">{subtitle2}</p>
                    <div className="flex text-blue-500 items-center space-x-2">
                        <TrendingUpIcon className="h-5" />
                        <p>+{percentage2}%</p>
                    </div>
                    <h2>{total2}</h2>
                </div>
            </div>
            <button className={`p-1 text-white border border-blue-500 text-md font-semibold bg-blue-500 rounded-md ${selected && "border-red-500 border bg-red-500"}`}>{buttontitle}</button>
        </div>
    )
}

export default BottomSectionOptions
