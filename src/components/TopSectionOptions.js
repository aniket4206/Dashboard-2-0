import { DotsVerticalIcon,TrendingUpIcon,TrendingDownIcon } from "@heroicons/react/solid";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function TopSectionOptions({title,total,percentage,selected,percentage2,color,color2,color3}) {
    return (
        <div className={`lg:w-[48%] xl:w-[32%] text-white cursor-pointer select-none font-bold flex justify-between border rounded-md border-gray-500 p-2 group ${color3}`}>
            <div className="flex flex-col items-center space-y-5 w-[50%]">
                <p className="text-sm">{title}</p>
                <h3>{total}</h3>
                <div className="flex items-center space-x-2">
                    {selected ? <TrendingDownIcon className={`h-5 ${color} group-hover:text-white`} /> :<TrendingUpIcon className={`h-5 ${color} group-hover:text-white`} />}
                    <p className={`${color} group-hover:text-white`}>+{percentage} %</p>
                </div>
            </div>
            <div className="flex space-y-3 item flex-col w-[50%] items-end">
                <DotsVerticalIcon className="h-5 hover:cursor-pointer" />
                <div style={{height:100,width:100}} className="w-20">
                <CircularProgressbar className="p-2" value={percentage2} styles={buildStyles({pathColor: `${color2}`,textColor: `${color2}`})} text={`+${percentage2}%`} />
                </div>
            </div>
        </div>
    )
}

export default TopSectionOptions
