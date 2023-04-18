import { ResponsivePie } from "@nivo/pie";
import { GrFormClose } from "react-icons/gr";
import { GraphOverlay, PieGraph } from './styles'
import { Item } from "../../types/item";

interface GraphProps {
  props: {
    setIsOpenGraph: (state: boolean) => void,
    filteredItems: Item[]
  }
}

export default ({props}: GraphProps) => {
  const {filteredItems, setIsOpenGraph} = props
  const data: any = [];

  filteredItems.map(item => {
    data.push({
      id: item.title,
      label: item.title,
      value: item.value,
      color: `${!!item.expense ? "#ff0000be" : "#0000ffbe"}`
    })
  })

  return (
    <GraphOverlay>
      <PieGraph>
        <GrFormClose className='icon' onClick={() => {setIsOpenGraph(false)}}/>
        <ResponsivePie
            data={data}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={2}
            colors={{ datum: 'data.color'}}
            cornerRadius={5}
            activeOuterRadiusOffset={8}
            arcLabelsTextColor="#ffffff"
            borderWidth={1.5}
            animate={false}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1
                    ]
                ]
            }}
            enableArcLinkLabels={false}
            legends={[
              {
                  anchor: 'bottom',
                  direction: 'row',
                  justify: false,
                  translateX: 30,
                  translateY: 50,
                  itemsSpacing: 0,
                  itemWidth: 100,
                  itemHeight: 18,
                  itemTextColor: '#000',
                  itemDirection: 'left-to-right',
                  itemOpacity: 1,
                  symbolSize: 18,
                  symbolShape: 'circle',
                  effects: [
                      {
                          on: 'hover',
                          style: {
                            itemTextColor: '#000'
                          }
                      }
                  ]
              }
          ]}
        />
      </PieGraph>
    </GraphOverlay>
  )
}

