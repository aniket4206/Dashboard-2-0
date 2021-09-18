import { PlusIcon,SearchIcon } from "@heroicons/react/solid";

function Navbar() {
    return (
        <div className="select-none flex justify-between p-2 items-center text-white">
            <div className="flex flex-col space-y-1">
                <h2>Dashboard</h2>
                <h3>Monday, <span className="text-blue-500">02 July 2020</span></h3>
            </div>
            <div className="flex flex-col space-y-1 sm:flex-row items-center space-x-3">
                <button className="flex p-1 border border-blue-500 rounded-md text-white bg-blue-500 items-center ml-auto mr-2"><PlusIcon className="h-3 text-white" /><span className="text-xs mr-1">Add</span></button>
                <div className="flex space-x-1 items-center border border-gray-700 p">
                    <SearchIcon className="h-5" />
                    <input className="outline-none bg-transparent text-gray-100" type="text" placeholder="Search for Application Here" />   
                </div>
            </div>
        </div>
    )
}

export default Navbar
