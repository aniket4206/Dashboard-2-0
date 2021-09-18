import { LightningBoltIcon,BellIcon,ChevronDownIcon } from "@heroicons/react/solid";

function Header() {
    return (
        <div className="select-none flex justify-between p-2 text-white">
            <LightningBoltIcon className="h-8" />
            <div className="flex space-x-2 items-center">
                <BellIcon className="h-5 hover:cursor-pointer" />
                <h4 className="hover:underline hover:cursor-pointer">John Bayer</h4>
                <img loading="lazy" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" className="rounded-full h-9 w-9 cursor-pointer transition duration-150 transform hover:scale-110" />
                <ChevronDownIcon className="h-5 hover:cursor-pointer" />
            </div>

        </div>
    )
}

export default Header
