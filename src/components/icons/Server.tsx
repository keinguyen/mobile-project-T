import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const Server = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / server">
      <G id="icon_24 / server_2">
        <Path
          id="Icon"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V8C21 8.55228 20.5523 9 20 9H4C3.44772 9 3 8.55228 3 8V4ZM4 1C2.34315 1 1 2.34315 1 4V8C1 9.65685 2.34315 11 4 11H20C21.6569 11 23 9.65685 23 8V4C23 2.34315 21.6569 1 20 1H4ZM3 16C3 15.4477 3.44772 15 4 15H20C20.5523 15 21 15.4477 21 16V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V16ZM4 13C2.34315 13 1 14.3431 1 16V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V16C23 14.3431 21.6569 13 20 13H4Z"
          fill={props.color}
        />
      </G>
    </G>
  </Svg>
);
export default Server;
