import { Doughnut } from 'react-chartjs-2'

function BottomSectionPie() {
    return (
        <div className="p-2">
            <Doughnut
             data={{
                labels: ['Red','Blue','Yellow'],
                datasets: [{
                    label: 'My First Dataset',
                    data: [45, 30, 25],
                    backgroundColor: [
                      'rgb(255, 99, 132)',
                      'rgb(54, 162, 235)',
                      'rgb(255, 205, 86)'
                    ],
                    borderColor:[
                      'rgb(255, 99, 132)',
                      'rgb(54, 162, 235)',
                      'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 15
                }]
             }
            }
             height={250}
             options={{
                 maintainAspectRatio:false,
                 plugins:{
                     legend:{
                         display:false
                     }
                 }
             }}
            />
        </div>
    )
}

export default BottomSectionPie
