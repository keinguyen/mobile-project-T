import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const BarChart2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / bar-chart-2">
      <G id="icon_24 / bar-chart-2_2">
        <G id="Icon">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 9C18.5523 9 19 9.44772 19 10V20C19 20.5523 18.5523 21 18 21C17.4477 21 17 20.5523 17 20V10C17 9.44772 17.4477 9 18 9Z"
            fill={props.color}
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 3C12.5523 3 13 3.44772 13 4V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V4C11 3.44772 11.4477 3 12 3Z"
            fill={props.color}
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 13C6.55228 13 7 13.4477 7 14V20C7 20.5523 6.55228 21 6 21C5.44772 21 5 20.5523 5 20V14C5 13.4477 5.44772 13 6 13Z"
            fill={props.color}
          />
        </G>
      </G>
    </G>
  </Svg>
);
export default BarChart2;
