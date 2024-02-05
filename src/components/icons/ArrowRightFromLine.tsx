import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const ArrowRightFromLine = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / arrow-right-from-line">
      <G id="icon_24 / arrow-right-from-line_2">
        <G id="Icon">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 4C3.55228 4 4 4.44772 4 5V19C4 19.5523 3.55228 20 3 20C2.44772 20 2 19.5523 2 19V5C2 4.44772 2.44772 4 3 4Z"
            fill={props.color}
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 12C6 11.4477 6.44772 11 7 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H7C6.44772 13 6 12.5523 6 12Z"
            fill={props.color}
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071C13.9024 18.3166 13.9024 17.6834 14.2929 17.2929L19.5858 12L14.2929 6.70711C13.9024 6.31658 13.9024 5.68342 14.2929 5.29289Z"
            fill={props.color}
          />
        </G>
      </G>
    </G>
  </Svg>
);
export default ArrowRightFromLine;
