import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const Play = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / play">
      <G id="icon_24 / play_2">
        <Path
          id="Icon"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.52081 2.12229C5.84189 1.947 6.23305 1.96101 6.54076 2.15882L20.5408 11.1588C20.827 11.3428 21 11.6597 21 12C21 12.3403 20.827 12.6572 20.5408 12.8412L6.54076 21.8412C6.23305 22.039 5.84189 22.053 5.52081 21.8777C5.19974 21.7024 5 21.3658 5 21V3C5 2.63419 5.19974 2.29758 5.52081 2.12229ZM7 4.83167V19.1683L18.1507 12L7 4.83167Z"
          fill={props.color}
        />
      </G>
    </G>
  </Svg>
);
export default Play;
