import BottomSectionOptions from "./BottomSectionOptions"

function BottomSection() {
    return (
        <div className="xl:flex">
            <BottomSectionOptions maintitle="Referals and Campaign Stats" subtitle1="User's Reached" subtitle2="Referals" percentage1="3.59" percentage2="9.01" total1="7956" total2="0662" buttontitle="Start a New Campaign now" />
            <BottomSectionOptions selected maintitle="40 Campaigns sent in total" maintitle2="4 campaigns sent in last month" subtitle1="Shares" subtitle2="Applications" percentage1="39.18" percentage2="12.00" total1="1478" total2="0564" buttontitle="Pause All Running Campaigns" />
        </div>
    )
}

export default BottomSection
