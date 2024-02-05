import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
const ArrowRight = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G id="icon_24 / arrow-right">
      <G id="icon_24 / arrow-right_2">
        <Path
          id="Icon"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.5858 19.9999C12.1952 20.3904 12.1952 21.0236 12.5858 21.4141C12.9763 21.8047 13.6095 21.8047 14 21.4141L22.7071 12.707C23.0976 12.3165 23.0976 11.6834 22.7071 11.2928L14 2.58573C13.6095 2.19521 12.9763 2.19521 12.5858 2.58573C12.1952 2.97626 12.1952 3.60943 12.5858 3.99995L19.5858 10.9999L3 10.9999C2.44771 10.9999 2 11.4477 2 11.9999C2 12.5522 2.44771 12.9999 3 12.9999L19.5858 12.9999L12.5858 19.9999Z"
          fill={props.color}
        />
      </G>
    </G>
  </Svg>
);
export default ArrowRight;
