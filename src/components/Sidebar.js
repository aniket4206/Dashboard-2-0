import { HomeIcon,FolderIcon,UsersIcon,AnnotationIcon,ClipboardCheckIcon,ChartSquareBarIcon,InboxInIcon,CogIcon } from "@heroicons/react/solid";
import { LogoutIcon } from "@heroicons/react/outline";
import SidebarOptions from "./SidebarOptions";

function Sidebar() {
    return (
        <div className="flex flex-col h-screen p-2 items-center justify-between">
            <div className="flex flex-col space-y-2 ">
                <SidebarOptions Icon={HomeIcon} selected />
                <SidebarOptions Icon={ChartSquareBarIcon} />
                <SidebarOptions Icon={InboxInIcon} />
                <SidebarOptions Icon={FolderIcon} />
                <SidebarOptions Icon={ClipboardCheckIcon} />
                <SidebarOptions Icon={UsersIcon} />
                <SidebarOptions Icon={AnnotationIcon} />
                <SidebarOptions Icon={LogoutIcon} />
            </div>
            <div>
                <SidebarOptions Icon={CogIcon} />
            </div>
        </div>
    )
}

export default Sidebar
