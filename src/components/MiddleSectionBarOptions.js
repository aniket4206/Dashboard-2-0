function MiddleSectionBarOptions({ title,percentage,color,textcolor }) {

    return (
        <div className="select-none flex justify-around items-center p-2">
            <div className="w-[40%] space-x-2 flex">
                 <span className={`${textcolor}`}>&#11044;</span>
                <div>
                 <p>{title}</p>
                </div>
            </div>
            <div className="relative w-[60%]">
                <div className=" overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                    <div className={`${percentage} shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${color}`}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiddleSectionBarOptions
