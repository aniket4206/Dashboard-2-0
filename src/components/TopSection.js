import TopSectionOptions from "./TopSectionOptions"

function TopSection() {
    return (
        <div className="p-2 xl:space-x-4 flex">
            <TopSectionOptions title="Total Applications" color="text-purple-600" color2="#7F00FF" color3="hover:bg-purple-400" total="7956" percentage="3.59" percentage2="70"  />
            <TopSectionOptions title="Shortlisted Candidates" color="text-blue-500" color2="#1F51FF"
            color3="hover:bg-blue-400" total="4658" percentage="06" percentage2="60"  />
            <TopSectionOptions title="Total Applications" color="text-red-500" color2="#FF3131" color3="hover:bg-red-400" total="1501" percentage="04" selected percentage2="40"  />
        </div>
    )
}

export default TopSection
