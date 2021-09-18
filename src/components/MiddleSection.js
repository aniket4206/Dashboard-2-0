import BottomSection from "./BottomSection"
import BottomSectionPieGraph from "./BottomSectionPieGraph"
import MiddleSectionBar from "./MiddleSectionBar"
import MiddleSectionGraph from "./MiddleSectionGraph"
import TopSection from "./TopSection"
import Widgets from "./Widgets"

function MiddleSection() {
    return (
        <>
        <div className="xl:flex flex-row">
           <div>
           <TopSection />
           <div className="xl:flex flex-grow">
            <MiddleSectionGraph />
            <MiddleSectionBar />
            </div>
            <div className="xl:flex">
            <BottomSection />
            <BottomSectionPieGraph />
            </div>
           </div>
           
           <Widgets />
        </div>
        </>
    )
}

export default MiddleSection
