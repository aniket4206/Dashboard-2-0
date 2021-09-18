import { Line } from 'react-chartjs-2'

function MiddleSectionGraph() {
    return (
        <div className="p-2 m-2 border xl:w-[50%] lg:w-[50%] border-gray-500">
           <Line
            data={{
                labels:['Jan','Feb','Mar','Apr','May','Jun','Jul'],
                datasets:[{
                    label:"This Year",
                    fill:true,
                    tension: 0.5,
                    data:[0,40,20,80,60,100,80],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1
                    },
                {
                    label:"This Week",
                    fill:true,
                    tension: 0.5,
                    data:[20,80,40,60,20,40,60],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1
                    },
                {
                    label:"Today",
                    fill:true,
                    tension: 0.5,
                    data:[20,40,20,60,100,80,40],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1
                    }],
            }}
            height={250}
            width={400}
            options={{
                plugins:{
                    title:{
                        display:true,
                        text: 'Applications Received',
                    }
                },
                 maintainAspectRatio: false,
                 scales:{
                     y:{
                         beginAtZero:true,
                     },
                     x:{
                        grid:{
                            display:false
                        }
                     }
                 },
                 responsive:true
                }}
           />

        </div>
    )
}

export default MiddleSectionGraph
