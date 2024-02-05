import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const ArrowRightToLine = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / arrow-right-to-line">
      <G id="icon_24 / arrow-right-to-line_2">
        <G id="Icon">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 12C2 11.4477 2.44772 11 3 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H3C2.44772 13 2 12.5523 2 12Z"
            fill={props.color}
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.2929 5.29289C10.6834 4.90237 11.3166 4.90237 11.7071 5.29289L17.7071 11.2929C18.0976 11.6834 18.0976 12.3166 17.7071 12.7071L11.7071 18.7071C11.3166 19.0976 10.6834 19.0976 10.2929 18.7071C9.90237 18.3166 9.90237 17.6834 10.2929 17.2929L15.5858 12L10.2929 6.70711C9.90237 6.31658 9.90237 5.68342 10.2929 5.29289Z"
            fill={props.color}
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21 4C21.5523 4 22 4.44772 22 5V19C22 19.5523 21.5523 20 21 20C20.4477 20 20 19.5523 20 19V5C20 4.44772 20.4477 4 21 4Z"
            fill={props.color}
          />
        </G>
      </G>
    </G>
  </Svg>
);
export default ArrowRightToLine;
