import { ChevronRightIcon } from "@heroicons/react/solid"
import WidgetsOptions from "./WidgetsOptions"

function WidgetsOption() {
    return (
        <div className="select-none bg-black w-full mx-[10px] -mt-4 z-[100] flex flex-col space-y-4 p-2 border-t-4 rounded-t-2xl border border-b-0 border-gray-800">
            <div className="flex justify-between">
                <h2>New Applicants</h2>
                <ChevronRightIcon className="h-5 cursor-pointer" />
            </div>
            <WidgetsOptions title="Rosie Metts" subTitle="IOS Developer" />
            <WidgetsOptions title="James Scott" subTitle="ISO Developer" />
            <WidgetsOptions title="Jamie Laurenson" subTitle="UX Designer" />
            <WidgetsOptions title="Elizabeth Hurton" subTitle="UX Designer" />
            <WidgetsOptions title="Danny Watson" subTitle="IOS Developer" />
            <WidgetsOptions title="Reha Scarlett" subTitle="IOS Developer" />
        </div>
    )
}

export default WidgetsOption
