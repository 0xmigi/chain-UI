// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/pie
import { Pie } from '@nivo/pie';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export const Piee = ({ data /* see data tab */ }: any) => (
  <Pie
    height={190}
    width={190}
    data={data}
    margin={{ top: 14, right: 10, bottom: 10, left: 10 }}
    innerRadius={0.7}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={4}
    activeInnerRadiusOffset={4}
    borderWidth={0}
    borderColor={{
      from: 'color',
      modifiers: [['darker', 0.2]],
    }}
    enableArcLinkLabels={false}
    enableArcLabels={false}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: 'color' }}
    arcLabelsSkipAngle={10}
    isInteractive={true}
    arcLabelsTextColor={{
      from: 'color',
      modifiers: [['darker', 2]],
    }}
    theme={{
      tooltip: {
        container: {
          background: '',
          color: '#333333',
          fontSize: 12,
          height: 16,
        },
        basic: {},
        chip: {},
        table: {},
        tableCell: {},
        tableCellValue: {},
      },
    }}
    defs={[
      {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: 'rgba(255, 255, 255, 0.3)',
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: 'rgba(255, 255, 255, 0.3)',
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: 'ruby',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'c',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'go',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'python',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'scala',
        },
        id: 'lines',
      },
      {
        match: {
          id: 'lisp',
        },
        id: 'lines',
      },
      {
        match: {
          id: 'elixir',
        },
        id: 'lines',
      },
      {
        match: {
          id: 'javascript',
        },
        id: 'lines',
      },
    ]}
    // css={xStyle({
    //     css: { width: `$3`, height: `$3` },
    //   })}
    // legends={[
    //     {
    //         anchor: 'bottom',
    //         direction: 'row',
    //         justify: false,
    //         translateX: 0,
    //         translateY: 56,
    //         itemsSpacing: 0,
    //         itemWidth: 100,
    //         itemHeight: 18,
    //         itemTextColor: '#999',
    //         itemDirection: 'left-to-right',
    //         itemOpacity: 1,
    //         symbolSize: 18,
    //         symbolShape: 'circle',
    //         effects: [
    //             {
    //                 on: 'hover',
    //                 style: {
    //                     itemTextColor: '#000'
    //                 }
    //             }
    //         ]
    //     }
    // ]}
  />
);
