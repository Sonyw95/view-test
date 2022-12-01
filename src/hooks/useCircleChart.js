// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/calendar
// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/pie
import { ResponsivePie } from '@nivo/pie'

export const UseCircleChart = ({ data /* see data tab */ }) => {
    return(
        <div style={{ width: '100%', height: '300px' }}>
            <ResponsivePie
                data={[
                        {
                            "id": "Java",
                            "label": "Java",
                            "value": 396,
                            "color": "hsl(244, 70%, 50%)"
                        },
                        {
                            "id": "etc",
                            "label": "etc",
                            "value": 252,
                            "color": "hsl(300, 70%, 50%)"
                        },
                    ]}
                margin={{ top: 40, bottom: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                colors={{ scheme: 'orange_red' }}
                borderWidth={1}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0.2
                        ]
                    ]
                }}
                enableArcLinkLabels={false}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                arcLabel="id"
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            2
                        ]
                    ]
                }}

                legends={[
                    {
                        anchor: 'bottom',
                        direction: 'row',
                        justify: false,
                        translateX: 0,
                        translateY: 40,
                        itemWidth: 80,
                        itemHeight: 28,
                        itemsSpacing: 0,
                        symbolSize: 20,
                        itemDirection: 'left-to-right'
                    }
                ]}
            />
        </div>
    )
}
