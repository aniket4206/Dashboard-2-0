import MiddleSectionBarOptions from './MiddleSectionBarOptions';

function MiddleSectionBar() {
    return (
        <div className="select-none flex flex-col space-y-4 p-2 border-gray-500 border xl:w-[50%] lg:w-[50%] m-2">
            <h4>Total Applications</h4>
            <div>
            <MiddleSectionBarOptions title="Applications" percentage="w-[40%]" color="bg-blue-400" textcolor="text-blue-400" />
            <MiddleSectionBarOptions title="Short Listed" percentage="w-[80%]" color="bg-red-400" textcolor="text-red-400" />
            <MiddleSectionBarOptions title="Rejected" percentage="w-[35%]" color="bg-yellow-400" textcolor="text-yellow-400" />
            <MiddleSectionBarOptions title="On hold" percentage="w-[15%]" color="bg-green-400" textcolor="text-green-400" />
            <MiddleSectionBarOptions title="Payment" percentage="w-[90%]" color="bg-purple-400" textcolor="text-purple-400" />
            </div>
        </div>
    )
}

export default MiddleSectionBar
