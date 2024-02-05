import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const Grid = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / grid">
      <G id="icon_24 / grid_2">
        <Path
          id="Vector (Stroke)"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 3C2 2.44772 2.44772 2 3 2H10C10.5523 2 11 2.44772 11 3V10C11 10.5523 10.5523 11 10 11H3C2.44772 11 2 10.5523 2 10V3ZM4 4V9H9V4H4Z"
          fill={props.color}
        />
        <Path
          id="Vector (Stroke)_2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 3C13 2.44772 13.4477 2 14 2H21C21.5523 2 22 2.44772 22 3V10C22 10.5523 21.5523 11 21 11H14C13.4477 11 13 10.5523 13 10V3ZM15 4V9H20V4H15Z"
          fill={props.color}
        />
        <Path
          id="Vector (Stroke)_3"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 14C13 13.4477 13.4477 13 14 13H21C21.5523 13 22 13.4477 22 14V21C22 21.5523 21.5523 22 21 22H14C13.4477 22 13 21.5523 13 21V14ZM15 15V20H20V15H15Z"
          fill={props.color}
        />
        <Path
          id="Vector (Stroke)_4"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 14C2 13.4477 2.44772 13 3 13H10C10.5523 13 11 13.4477 11 14V21C11 21.5523 10.5523 22 10 22H3C2.44772 22 2 21.5523 2 21V14ZM4 15V20H9V15H4Z"
          fill={props.color}
        />
      </G>
    </G>
  </Svg>
);
export default Grid;
