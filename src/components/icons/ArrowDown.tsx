import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const ArrowDown = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / arrow-down">
      <G id="icon_24 / arrow-down_2">
        <Path
          id="Icon"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.70717 12.5858C3.31664 12.1952 2.68348 12.1952 2.29295 12.5858C1.90243 12.9763 1.90243 13.6095 2.29295 14L11 22.7071C11.3906 23.0976 12.0237 23.0976 12.4143 22.7071L21.1214 14C21.5119 13.6095 21.5119 12.9763 21.1214 12.5858C20.7308 12.1952 20.0977 12.1952 19.7071 12.5858L12.7072 19.5858L12.7072 3C12.7072 2.44771 12.2594 2 11.7072 2C11.1549 2 10.7072 2.44771 10.7072 3L10.7072 19.5858L3.70717 12.5858Z"
          fill={props.color}
        />
      </G>
    </G>
  </Svg>
);
export default ArrowDown;
