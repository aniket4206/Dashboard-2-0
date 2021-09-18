import { DotsVerticalIcon } from"@heroicons/react/solid"
import BottomSectionPie from "./BottomSectionPie"

function BottomSectionPieGraph() {
    return (
        <div className="p-2 m-2 xl:w-[51%] h-full select-none border border-gray-500">
            <div className="flex justify-between">
                <h3>Open Positions By Department</h3>
                <DotsVerticalIcon className="h-5 cursor-pointer" />
            </div>
            <BottomSectionPie />
        </div>
    )
}

export default BottomSectionPieGraph
